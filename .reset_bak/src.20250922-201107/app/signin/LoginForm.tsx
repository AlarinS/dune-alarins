"use client";
import { useEffect, useState } from "react";
import { getCsrfToken } from "next-auth/react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export default function LoginForm() {
  const [csrf, setCsrf] = useState("");
  const [ready, setReady] = useState(false);
  useEffect(() => { (async () => {
    setCsrf((await getCsrfToken()) || "");
    setReady(true);
  })(); }, []);
  return (
    <form method="post" action="/api/auth/signin/credentials" className="space-y-4">
      <input type="hidden" name="csrfToken" value={csrf} />
      <div>
        <Label htmlFor="username">Логин или email</Label>
        <Input id="username" name="username" required autoComplete="username" placeholder="user or email" />
      </div>
      <div>
        <Label htmlFor="password">Пароль</Label>
        <Input id="password" name="password" type="password" required autoComplete="current-password" placeholder="••••••••" />
      </div>
      <Button type="submit" disabled={!ready} title={ready ? "" : "Получаем CSRF…"} className="w-full">Sign In</Button>
    </form>
  );
}
