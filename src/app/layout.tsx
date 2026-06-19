import type { Metadata } from 'next'
import { Geist, Geist_Mono, Syne, Caveat } from 'next/font/google'
import localFont from 'next/font/local'
import { ThemeProvider } from '@/components/common/ThemeProvider'
import ScrollRevealInit from '@/components/common/ScrollRevealInit'
import { Toaster } from '@/components/ui/sonner'
import { Analytics } from '@vercel/analytics/react'
import { siteConfig } from '@/lib/metadata'
import '@/app/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
})

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const rifton = localFont({
  src: [
    { path: '../../rifton-font/rifton-regular.otf', weight: '400', style: 'normal' },
    { path: '../../rifton-font/rifton-italic.otf',  weight: '400', style: 'italic' },
  ],
  variable: '--font-rifton',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${caveat.variable} ${rifton.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <ScrollRevealInit />
          {children}
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
