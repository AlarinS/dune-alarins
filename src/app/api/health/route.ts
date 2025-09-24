import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    await prisma.health.create({ data: {} });
    const items = await prisma.health.findMany({ orderBy: { id: 'desc' }, take: 5 });
    return NextResponse.json({ ok: true, service: 'dune-admin', items });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
