import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    // Verify secret token
    const authHeader = request.headers.get('authorization')
    const secret = process.env.REVALIDATE_SECRET
    
    if (!secret || authHeader !== `Bearer ${secret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Revalidate the members page
    revalidatePath('/members')
    
    console.log('Successfully revalidated /members page')

    return NextResponse.json({
      success: true,
      message: 'Members page revalidated',
      timestamp: new Date().toISOString(),
    })

  } catch (error) {
    console.error('Revalidation failed:', error)
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Revalidation failed',
    }, { status: 500 })
  }
}