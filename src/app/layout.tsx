import '@/styles/globals.css'

import { GoogleAnalytics } from '@next/third-parties/google'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'teach',
  description: 'teach - Teach students worldwide',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} min-h-screen w-full bg-background-primary font-[family-name:var(--font-roboto)] text-content-body antialiased`}
      >
        {children}
      </body>

      <GoogleAnalytics gaId={process.env.ANALYTICS_GOOGLE_ID || ''} />
    </html>
  )
}
