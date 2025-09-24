import { NextResponse } from 'next/server';
export async function GET(){ return NextResponse.json({ ok:true, service:'admin-ui' }, { status:200 }); }
