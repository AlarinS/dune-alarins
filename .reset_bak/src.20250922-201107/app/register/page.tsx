"use client";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = {
      username: fd.get("username")?.toString() || "",
      email: fd.get("email")?.toString() || "",
      password: fd.get("password")?.toString() || "",
      name: fd.get("name")?.toString() || ""
    };
    setLoading(true); setErr(null);
    const r = await fetch("/api/register", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(body)});
    if (r.ok) router.push("/signin?registered=1");
    else setErr((await r.json()).error || "Ошибка регистрации");
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1220] text-white p-6">
      <Card className="w-full max-w-md">
        <CardHeader><CardTitle>Регистрация</CardTitle></CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={onSubmit}>
            {err && <div className="text-red-400">{err}</div>}
            <div><Label htmlFor="username">Логин</Label><Input id="username" name="username" required /></div>
            <div><Label htmlFor="email">Email (необязательно)</Label><Input id="email" name="email" type="email" /></div>
            <div><Label htmlFor="name">Имя (необязательно)</Label><Input id="name" name="name" /></div>
            <div><Label htmlFor="password">Пароль</Label><Input id="password" name="password" type="password" required /></div>
            <Button type="submit" disabled={loading} className="w-full">{loading ? "Создаём…" : "Зарегистрироваться"}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
