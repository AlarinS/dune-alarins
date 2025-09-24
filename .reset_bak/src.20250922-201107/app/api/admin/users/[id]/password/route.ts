import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { scryptSync, randomBytes } from "crypto"
import { auth } from "@/auth"
const prisma = new PrismaClient()

export async function POST(req: Request, ctx: { params: { id: string } }) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "unauthorized" }, { status: 401 })
  const me = await prisma.user.findUnique({ where: { id: session.user?.id as string } })
  if (me?.role !== "ADMIN") return NextResponse.json({ error: "forbidden" }, { status: 403 })

  const body = await req.json()
  if (!body?.password || String(body.password).length < 6) {
    return NextResponse.json({ error: "weak password" }, { status: 400 })
  }
    const salt = randomBytes(16).toString("hex")
  const hash = scryptSync(String(body.password), salt, 64).toString("hex")
  const stored = `scrypt$1$${salt}$${hash}`
  await prisma.user.update({ where: { id: ctx.params.id }, data: { passwordHash: stored } })
  return NextResponse.json({ ok: true })
}
