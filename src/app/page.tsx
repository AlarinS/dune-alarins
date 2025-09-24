import { t } from "@/lib/i18n"
import Link from "next/link"

export default function Home() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">{t("welcome","Добро пожаловать")}</h1>
      <p className="text-muted-foreground">
        Перейти в панель администратора.
      </p>
      <p>
        <Link href="/admin" className="underline">Go to Admin</Link>
      </p>
    </main>
  )
}
