"use client";
import { useEffect, useState } from "react";
import { getCsrfToken } from "next-auth/react";

export default function SignInForm() {
  const [csrf, setCsrf] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => { (async () => {
    try { const t = await getCsrfToken(); setCsrf(t || ""); }
    finally { setReady(true); }
  })(); }, []);

  return (
    <div style={{maxWidth:520,margin:"48px auto",fontFamily:"Inter, system-ui",color:"#e5e7eb"}}>
      <h1 style={{fontSize:28,marginBottom:16}}>Sign in</h1>
      <form method="post" action="/api/auth/signin/credentials" style={{display:"grid",gap:12}}>
        <input type="hidden" name="csrfToken" value={csrf} />
        <label>
          <div style={{marginBottom:6}}>Логин или email</div>
          <input name="username" required autoComplete="username"
                 placeholder="user or email"
                 style={{width:"100%",padding:"10px 12px",borderRadius:8}} />
        </label>
        <label>
          <div style={{marginBottom:6}}>Пароль</div>
          <input name="password" type="password" required autoComplete="current-password"
                 placeholder="••••••••"
                 style={{width:"100%",padding:"10px 12px",borderRadius:8}} />
        </label>
        <button type="submit" disabled={!ready} title={ready ? "" : "Получаем CSRF…"}
                style={{padding:"10px 16px",borderRadius:10}}>Sign In</button>
      </form>
    </div>
  );
}
