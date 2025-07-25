import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create announcements
  const announcement1 = await prisma.announcement.create({
    data: {
      title: 'AIコンテンツラボ新機能リリースのお知らせ',
      body: '新しい学習機能とコミュニティ機能をリリースしました。メンバーの皆様にはより充実した学習体験をお届けできるよう、継続的に改善を行っています。詳細はこちらからご確認ください。',
      linkUrl: 'https://ai-contents-labo.com/news/new-features',
      publishedAt: new Date('2025-01-20T10:00:00Z'),
    },
  })

  const announcement2 = await prisma.announcement.create({
    data: {
      title: 'Voicy開設のお知らせ',
      body: 'AIコンテンツラボの公式Voicyチャンネルを開設しました！音声で学習できる新しいコンテンツを定期的にお届けします。通勤時間や家事の合間に、ながら学習をお楽しみください。',
      linkUrl: 'https://voicy.jp/channel/ai-contents-labo',
      publishedAt: new Date('2025-01-18T14:30:00Z'),
    },
  })

  const announcement3 = await prisma.announcement.create({
    data: {
      title: '無料ウェビナー「AI活用の基本3ステップ」開催決定',
      body: 'AI初心者の方向けの無料ウェビナーを開催いたします。基本的なAI活用方法から実践的なテクニックまで、わかりやすく解説します。参加費無料、事前登録制となっております。',
      publishedAt: new Date('2025-01-15T09:00:00Z'),
    },
  })

  // Create tweets
  const tweet1 = await prisma.tweet.create({
    data: {
      url: 'https://twitter.com/user1/status/1234567890',
      authorName: '田中太郎',
      authorHandle: 'tanaka_ai',
      content: 'AIコンテンツラボで学んだテクニックを使って、初めてのnoteを公開しました！🎉 最初は不安でしたが、コミュニティのサポートのおかげで完成できました。小さな一歩ですが、とても嬉しいです。 #ACL成果 #AI学習',
      postedAt: new Date('2025-01-22T15:30:00Z'),
    },
  })

  const tweet2 = await prisma.tweet.create({
    data: {
      url: 'https://twitter.com/user2/status/1234567891',
      authorName: '佐藤花子',
      authorHandle: 'sato_contents',
      content: '子育ての合間に学習を続けて3ヶ月。ついにAIを使った副業で初収益が出ました！💰 月1000円という小さな金額ですが、自分の力で稼げたことが本当に嬉しいです。AIコンテンツラボに出会えて良かった✨ #ACL成果',
      postedAt: new Date('2025-01-20T11:15:00Z'),
    },
  })

  const tweet3 = await prisma.tweet.create({
    data: {
      url: 'https://twitter.com/user3/status/1234567892',
      authorName: '山田次郎',
      authorHandle: 'yamada_writer',
      content: 'AIライティングのスキルを身につけてから、仕事の効率が格段に上がりました📈 今では同僚からもアドバイスを求められるように。学んだことを人に教える機会も増えて、「今日の生徒が明日の講師」を実感しています🎓 #ACL成果',
      postedAt: new Date('2025-01-18T13:45:00Z'),
    },
  })

  // Create testimonials
  const testimonial1 = await prisma.testimonial.create({
    data: {
      name: 'K.Tさん',
      content: 'AIコンテンツラボに参加してから、学習に対する考え方が変わりました。単に知識を身につけるだけでなく、それを実際に使って価値を生み出し、さらには他の人に教えることで自分自身も成長できるという環境が素晴らしいです。',
    },
  })

  const testimonial2 = await prisma.testimonial.create({
    data: {
      name: 'M.Sさん',
      content: 'コミュニティの雰囲気がとても良く、初心者でも質問しやすい環境です。メンバー同士で励まし合いながら学習を続けられるので、モチベーションを維持しやすいです。運営者の「こん」さんの人柄も素晴らしく、安心して参加できました。',
    },
  })

  const testimonial3 = await prisma.testimonial.create({
    data: {
      name: 'H.Yさん',
      content: '実践重視のカリキュラムが魅力的です。学んだことをすぐに実際のプロジェクトで活用できるため、スキルが定着しやすいです。また、成果を共有する文化があるので、自分の成長を実感しやすく、継続的な学習意欲につながっています。',
    },
  })

  console.log('Seed data created successfully!')
  console.log('Announcements:', { announcement1, announcement2, announcement3 })
  console.log('Tweets:', { tweet1, tweet2, tweet3 })
  console.log('Testimonials:', { testimonial1, testimonial2, testimonial3 })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })