import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { auth } from "@/auth"
const prisma = new PrismaClient()

export async function GET() {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "unauthorized" }, { status: 401 })
  const me = await prisma.user.findUnique({ where: { id: session.user?.id as string } })
  if (me?.role !== "ADMIN") return NextResponse.json({ error: "forbidden" }, { status: 403 })
  const users = await prisma.user.findMany({ select: { id:true, username:true, email:true, role:true, name:true } })
  return NextResponse.json({ users })
}
