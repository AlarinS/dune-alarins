export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { randomBytes, scryptSync } from "crypto";

const prisma = new PrismaClient();

function hashScrypt(password: string) {
  const salt = randomBytes(16).toString("hex");
  const hex = scryptSync(password, salt, 64).toString("hex");
  return `scrypt$${salt}$${hex}`;
}

export async function POST(req: Request) {
  try {
    const { username, email, password, name } = await req.json();
    if (!password || (!username && !email)) {
      return NextResponse.json({ error: "Некорректный запрос" }, { status: 400 });
    }
    const exists = await prisma.user.findFirst({
      where: email ? { OR: [{ email }, { username }] } : { username: String(username) },
      select: { id: true },
    });
    if (exists) return NextResponse.json({ error: "Пользователь уже существует" }, { status: 409 });

    const user = await prisma.user.create({
      data: {
        username: username ?? null,
        email: email ?? null,
        name: name ?? null,
        passwordHash: hashScrypt(password),
        role: "user",
      },
      select: { id: true, username: true, email: true },
    });
    return NextResponse.json({ ok: true, user }, { status: 201 });
  } catch (e) {
    console.error("register error:", e);
    return NextResponse.json({ error: "Внутренняя ошибка сервера" }, { status: 500 });
  }
}
