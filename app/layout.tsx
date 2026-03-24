import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ask Sarah - AI Visibility & Strategy',
  description: 'AI visibility engine, strategic consulting, and visibility research for the search era.',
  openGraph: {
    title: 'Ask Sarah - AI Visibility & Strategy',
    description: 'AI visibility engine, strategic consulting, and visibility research for the search era.',
    type: 'website',
    url: 'https://asksarah.ai',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-brand-dark text-white">{children}</body>
    </html>
  )
}
