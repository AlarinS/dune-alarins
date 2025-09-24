// Простая страница входа без редиректов
import Link from "next/link";

export default function SignInPage() {
  return (
    <main style={{ display: "grid", placeItems: "center", minHeight: "60vh", fontFamily: "system-ui" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ marginBottom: 12 }}>Sign in</h1>
        <p style={{ marginBottom: 16 }}>Выберите провайдера или используйте встроенную форму.</p>

        {/* Ссылка на встроенную страницу NextAuth */}
        <a
          href="/api/auth/signin"
          style={{
            display: "inline-block",
            padding: "10px 16px",
            border: "1px solid #ccc",
            borderRadius: 8,
            textDecoration: "none"
          }}
        >
          Continue to /api/auth/signin
        </a>

        <div style={{ marginTop: 12, fontSize: 12, opacity: 0.7 }}>
          Вернёт обратно на страницу из callbackUrl после успешного входа.
        </div>

        <div style={{ marginTop: 16 }}>
          <Link href="/">← На главную</Link>
        </div>
      </div>
    </main>
  );
}
