'use client';
import { useEffect, useState } from 'react';

type HealthItem = { id: number; ts: string };
export default function Page() {
  const [ok,setOk]=useState<boolean|null>(null);
  const [items,setItems]=useState<HealthItem[]>([]);
  useEffect(() => {
    fetch('/api/health').then(r=>r.json()).then(j=>{ setOk(j.ok); setItems((j.items||[]).slice().reverse()); }).catch(()=>setOk(false));
  },[]);
  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dune Admin — заглушка</h1>
      <div className="p-4 rounded-lg border">
        <div className="text-sm text-gray-600">API / MSSQL статус:</div>
        <div className={"mt-1 font-semibold " + (ok ? "text-green-600" : ok===false ? "text-red-600" : "text-gray-500")}>
          {ok===null ? "Загрузка…" : ok ? "OK" : "DOWN"}
        </div>
      </div>
      <div className="p-4 rounded-lg border">
        <div className="text-sm text-gray-600 mb-2">Последние вставки в Health:</div>
        <ul className="list-disc pl-6">
          {items.map(x=>(
            <li key={x.id} className="text-sm">{x.id} — {new Date(x.ts).toLocaleString()}</li>
          ))}
          {items.length===0 && <li className="text-sm text-gray-500">пусто</li>}
        </ul>
      </div>
      <p className="text-xs text-gray-500">Страница — временная заглушка. Можно смело переписывать всё.</p>
    </main>
  );
}
