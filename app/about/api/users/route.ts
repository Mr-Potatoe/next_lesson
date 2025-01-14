import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
  } catch (error: unknown) {
    const errorMessage = error instanceof Error 
      ? error.message 
      : 'An unexpected error occurred';
    console.error('Error fetching users:', errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const user = await prisma.user.create({
      data: json,
    })
    return NextResponse.json(user)
  } catch (error: unknown) {
    const errorMessage = error instanceof Error 
      ? error.message 
      : 'An unexpected error occurred';
    console.error('Error creating user:', errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}