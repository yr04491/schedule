import type { Metadata } from 'next'
import { Zen_Kaku_Gothic_New, DM_Mono } from 'next/font/google'
import './globals.css'

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-zen',
  display: 'swap',
})

const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Rintaro's Schedule",
  description: 'パーソナルスケジュール管理アプリ',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: "Rintaro's Schedule",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${zenKaku.variable} ${dmMono.variable} h-full`}>
      <head>
        <meta name="theme-color" content="#0f0f0f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className="min-h-full" style={{ fontFamily: 'var(--font-zen), sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
