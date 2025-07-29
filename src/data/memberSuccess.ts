export interface MemberSuccess {
  id: string
  name: string
  category: 'note' | 'sns' | 'programming' | 'ai-creation' | 'kindle' | 'mixed'
  description: string
  url: string
  platform: 'twitter' | 'note' | 'amazon'
}

export const memberSuccessData: MemberSuccess[] = [
  // note投稿・執筆
  {
    id: 'erupapa-note',
    name: 'えるぱぱ',
    category: 'note',
    description: 'ロードマップ実践でnote投稿を開始',
    url: 'https://x.com/ranya_ja/status/1946556515504238650',
    platform: 'twitter'
  },
  {
    id: 'mako-note',
    name: 'マコ',
    category: 'note',
    description: 'noteリンク投稿',
    url: 'https://note.com/mako_bloger/n/nb322afb14f77',
    platform: 'note'
  },
  {
    id: 'tomozo-note',
    name: 'tomozo',
    category: 'note',
    description: 'note執筆活動',
    url: 'https://x.com/tomozo9/status/1948338832589357375',
    platform: 'twitter'
  },

  // SNS・コミュニティ活動
  {
    id: 'howari-sns',
    name: 'ほわり',
    category: 'sns',
    description: 'Xアカウント開設',
    url: 'https://x.com/chihuahua130/status/1949224213178712186?s=46',
    platform: 'twitter'
  },

  // プログラミング・技術系
  {
    id: 'chimitu-chrome',
    name: 'ちーみつ',
    category: 'programming',
    description: 'Chrome拡張機能作成',
    url: 'https://x.com/chi3_jp/status/1948574179864805531',
    platform: 'twitter'
  },
  {
    id: 'junchan-vibe',
    name: 'Junchan',
    category: 'programming',
    description: 'バイブコーディング実践',
    url: 'https://x.com/junchan614/status/1949195388717760644',
    platform: 'twitter'
  },

  // AI創作活動
  {
    id: 'tk-music',
    name: 'Tk',
    category: 'ai-creation',
    description: 'Sunoで楽曲制作',
    url: 'https://x.com/tkrock01/status/1947253293756891366?t=YoDwqLKf4OFrr5JuXj8U8A&s=19',
    platform: 'twitter'
  },
  {
    id: 'tk-novel',
    name: 'Tk',
    category: 'ai-creation',
    description: 'AI小説執筆',
    url: 'https://x.com/tkrock01/status/1945287992517484795?t=0iBYjkSEvmmDfc-rF6t42Q&s=19',
    platform: 'twitter'
  },
  {
    id: 'island-music',
    name: 'island',
    category: 'ai-creation',
    description: 'Sunoで楽曲制作',
    url: 'https://x.com/S1Sshikari/status/1944201196467892266?t=WDlBCxOqb-fmVxXjB_ipmQ&s=19',
    platform: 'twitter'
  },

  // Kindle出版
  {
    id: 'coco-kindle',
    name: 'ココ',
    category: 'kindle',
    description: 'Kindle出版デビュー',
    url: 'https://amzn.asia/d/9M8CJw8',
    platform: 'amazon'
  },
  {
    id: 'rikumama-mixed',
    name: 'りくママ',
    category: 'mixed',
    description: 'Kindle出版＆note執筆',
    url: 'https://x.com/rikunomom/status/1948763688783282613?s=46&t=izgleoHDhREtRKnS5dZAcA',
    platform: 'twitter'
  },
  {
    id: 'minakuru-kindle',
    name: 'みなくる',
    category: 'kindle',
    description: 'Kindle出版デビュー',
    url: 'https://x.com/minacle_design/status/1942528692259021249',
    platform: 'twitter'
  },
  {
    id: 'hisa-kindle',
    name: 'Hisa',
    category: 'kindle',
    description: 'Kindle出版達成',
    url: 'https://amzn.asia/d/el2dEQp',
    platform: 'amazon'
  },
  {
    id: 'satsuki-kindle',
    name: 'さつき',
    category: 'kindle',
    description: 'Kindle出版挑戦',
    url: 'https://x.com/SatsukiDesigner/status/1942342873787293849',
    platform: 'twitter'
  }
]

export const categoryLabels = {
  note: 'note活動',
  sns: 'SNS活動', 
  programming: 'プログラミング',
  'ai-creation': 'AI創作',
  kindle: 'Kindle出版',
  mixed: '複合活動'
}

export const getSuccessByCategory = (category: keyof typeof categoryLabels) => {
  return memberSuccessData.filter(item => item.category === category)
}

export const getSuccessStats = () => {
  const stats = {
    total: memberSuccessData.length,
    kindle: getSuccessByCategory('kindle').length + getSuccessByCategory('mixed').length,
    note: getSuccessByCategory('note').length + getSuccessByCategory('mixed').length,
    aiCreation: getSuccessByCategory('ai-creation').length,
    programming: getSuccessByCategory('programming').length,
    sns: getSuccessByCategory('sns').length
  }
  return stats
}