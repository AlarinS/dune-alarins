"use client";
import { useEffect, useState } from "react";
import { getCsrfToken } from "next-auth/react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

export default function Login03Form() {
  const [csrf, setCsrf] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => { (async () => {
    setCsrf((await getCsrfToken()) || "");
    setReady(true);
  })(); }, []);

  return (
    <form method="post" action="/api/auth/signin/credentials" className="space-y-5">
      <input type="hidden" name="csrfToken" value={csrf} />
      <input type="hidden" name="callbackUrl" value="/admin" />
      <div>
        <Label htmlFor="username">Логин или email</Label>
        <Input id="username" name="username" placeholder="user or email" autoComplete="username" required />
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <Label htmlFor="password">Пароль</Label>
          <a href="/register" className="text-sm text-slate-400 hover:text-white">Регистрация</a>
        </div>
        <Input id="password" name="password" type="password" placeholder="••••••••" autoComplete="current-password" required />
      </div>
      <div className="flex items-center gap-2 text-sm text-slate-400">
        <input id="remember" name="remember" type="checkbox" className="size-4 rounded border-[#1f2937]" />
        <label htmlFor="remember">Запомнить меня</label>
      </div>
      <Button type="submit" disabled={!ready} title={ready ? "" : "Получаем CSRF…"} className="w-full">
        Войти
      </Button>
    </form>
  );
}
