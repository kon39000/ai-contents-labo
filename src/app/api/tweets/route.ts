import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const tweets = await prisma.tweet.findMany({
      orderBy: {
        postedAt: 'desc'
      }
    })
    
    return NextResponse.json(tweets)
  } catch (error) {
    console.error('Error fetching tweets:', error)
    return NextResponse.json({ error: 'Failed to fetch tweets' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { url, authorName, authorHandle, content, postedAt, imageUrl } = body

    if (!url || !authorName || !authorHandle || !content || !postedAt) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const tweet = await prisma.tweet.create({
      data: {
        url,
        authorName,
        authorHandle,
        content,
        postedAt: new Date(postedAt),
        imageUrl: imageUrl || null
      }
    })

    return NextResponse.json(tweet)
  } catch (error) {
    console.error('Error creating tweet:', error)
    return NextResponse.json({ error: 'Failed to create tweet' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Tweet ID is required' }, { status: 400 })
    }

    await prisma.tweet.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'Tweet deleted successfully' })
  } catch (error) {
    console.error('Error deleting tweet:', error)
    return NextResponse.json({ error: 'Failed to delete tweet' }, { status: 500 })
  }
}