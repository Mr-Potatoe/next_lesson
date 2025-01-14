import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search') || '';
  
  try {
    const posts = await prisma.post.findMany({
      where: {
        AND: [
          { published: true },
          { title: { contains: search } }
        ]
      },
      include: {
        author: {
          select: {
            name: true,
            email: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return NextResponse.json(posts);
  } catch (error: unknown) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}