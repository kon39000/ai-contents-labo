import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient()
  }
  prisma = (global as any).prisma
}

export async function GET() {
  try {
    const announcements = await prisma.announcement.findMany({
      orderBy: {
        publishedAt: 'desc'
      }
    })
    
    return NextResponse.json(announcements)
  } catch (error) {
    console.error('Error fetching announcements:', error)
    return NextResponse.json({ error: 'Failed to fetch announcements' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, body: content, publishedAt, linkUrl } = body

    if (!title || !content || !publishedAt) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const announcement = await prisma.announcement.create({
      data: {
        title,
        body: content,
        publishedAt: new Date(publishedAt),
        linkUrl: linkUrl || null
      }
    })

    return NextResponse.json(announcement)
  } catch (error) {
    console.error('Error creating announcement:', error)
    return NextResponse.json({ error: 'Failed to create announcement' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Announcement ID is required' }, { status: 400 })
    }

    await prisma.announcement.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'Announcement deleted successfully' })
  } catch (error) {
    console.error('Error deleting announcement:', error)
    return NextResponse.json({ error: 'Failed to delete announcement' }, { status: 500 })
  }
}