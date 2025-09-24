"use client"
import { useEffect, useState } from "react"

type User = { id: string; username: string|null; email: string|null; role: string; name: string|null }
type Data = { users: User[] }

export default function Users() {
  const [data, setData] = useState<Data | null>(null)
  const [pwd, setPwd] = useState("")
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState<string | null>(null)

  async function load() {
    setErr(null)
    try {
      const r = await fetch("/api/admin/users", { cache: "no-store" })
      if (!r.ok) throw new Error(`HTTP ${r.status}`)
      const j = await r.json() as Data
      setData(j)
    } catch (e:any) {
      setErr("Не удалось загрузить список пользователей")
      console.error(e)
    }
  }

  useEffect(() => { load() }, [])

  async function setPassword(id: string) {
    if (!pwd) return
    setLoading(true)
    try {
      const r = await fetch(`/api/admin/users/${id}/password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pwd })
      })
      if (!r.ok) throw new Error(`HTTP ${r.status}`)
      setPwd("")
      await load()
    } catch (e:any) {
      setErr("Не удалось сохранить пароль")
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  if (!data) return <div style={{padding:24}}>Загрузка… {err && <span style={{color:"crimson"}}>{err}</span>}</div>

  return (
    <div style={{padding:24,fontFamily:"Inter,system-ui"}}>
      <h1 style={{fontSize:24,marginBottom:12}}>Пользователи</h1>
      {err && <div style={{color:"crimson",marginBottom:12}}>{err}</div>}
      <table cellPadding={8} style={{borderCollapse:"collapse"}}>
        <thead><tr><th>id</th><th>username</th><th>role</th><th>Новый пароль</th><th/></tr></thead>
        <tbody>
          {data.users.map((u)=>(
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.username ?? u.email ?? u.name}</td>
              <td>{u.role}</td>
              <td><input value={pwd} onChange={e=>setPwd(e.target.value)} placeholder="••••••••" /></td>
              <td><button onClick={()=>setPassword(u.id)} disabled={!pwd || loading}>Сохранить</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
