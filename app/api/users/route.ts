import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
  } catch (error: unknown) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Error fetching users' 
    }, { status: 500 })
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
    console.error('Error creating user:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Error creating user' 
    }, { status: 500 })
  }
}

// PUT
export async function PUT(request: Request) {
  try {
    const json = await request.json()
    const user = await prisma.user.update({
      where: { id: json.id },
      data: json,
    })
    return NextResponse.json(user)
  } catch (error: unknown) {
    console.error('Error updating user:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Error updating user' 
    }, { status: 500 })
  }
}