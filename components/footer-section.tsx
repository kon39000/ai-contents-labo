"use client"

const socialLinks = [
  { name: "X (Twitter)", href: "https://twitter.com/kon39000" },
  { name: "YouTube", href: "https://www.youtube.com/@nsc-nmo" },
  {
    name: "Spotify",
    href: "https://open.spotify.com/show/1gmafRuqa5m2pvlBEVRgc8?si=d16b90fc8f13442c",
  },
  {
    name: "stand.fm",
    href: "https://stand.fm/channels/5fd9a8143147b7f1382167e2",
  },
  { name: "Voicy", href: "https://voicy.jp/channel/821951" },
  { name: "Udemy", href: "https://www.udemy.com/user/kon-101/" },
  { name: "Peatix", href: "https://nmo-event.peatix.com?type=owner" },
]

export function FooterSection() {
  return (
    <footer className="relative py-20 px-4 bg-[#0F172A] border-t border-[#334155]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <p className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-4 text-balance">
            学び、創り、発信し続ける人が
            <br />
            <span className="text-[#4FD1C5]">未来を作る。</span>
          </p>
          <p className="text-xl text-[#F8FAFC]/80 text-balance">AIと共に、"わたしにしかできない表現"を育てよう。</p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-12 text-[#F8FAFC]/70">
          {socialLinks.map((link, index) => (
            <span key={link.name} className="flex items-center gap-x-6">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4FD1C5] transition-colors duration-300 underline decoration-[#334155] hover:decoration-[#4FD1C5] underline-offset-4"
              >
                {link.name}
              </a>
              {index < socialLinks.length - 1 && <span className="text-[#334155]">|</span>}
            </span>
          ))}
        </div>

        <div className="text-[#F8FAFC]/40 text-sm">
          <p>© 2025 AIコンテンツラボ. All rights reserved.</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4FD1C5] via-[#F472B6] to-[#FACC15]" />
    </footer>
  )
}
