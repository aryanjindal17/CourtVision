import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'VolleyFilm - Elite Volleyball Film Analysis & Coaching',
  description: 'Get personalized volleyball coaching through professional film analysis. Submit your game footage and receive expert feedback in live Zoom sessions.',
  keywords: 'volleyball coaching, film analysis, volleyball training, personalized coaching',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5LDBGEBZX5" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5LDBGEBZX5');
        `}</Script>
      </head>
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
