import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // 必須項目のバリデーション
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      )
    }

    // メールアドレスの簡単なバリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください' },
        { status: 400 }
      )
    }

    // 実際のメール送信処理（Nodemailerなどを使用する場合）
    // 今回は簡単な実装として、ログ出力のみ行う
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    })

    // 本来であれば、ここでNodemailerなどを使用してinfo@nft-orchestra.comにメールを送信
    // const transporter = nodemailer.createTransporter({...})
    // await transporter.sendMail({
    //   from: email,
    //   to: 'info@nft-orchestra.com',
    //   subject: `[AI Contents Labo お問い合わせ] ${subject}`,
    //   text: `お名前: ${name}\nメールアドレス: ${email}\n件名: ${subject}\n\nメッセージ:\n${message}\n\n送信日時: ${new Date().toLocaleString('ja-JP')}`
    // })

    return NextResponse.json(
      { 
        success: true, 
        message: 'お問い合わせを受け付けました。内容を確認後、ご連絡いたします。' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました。しばらく時間をおいて再度お試しください。' },
      { status: 500 }
    )
  }
}