import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rajat Kumar Rout — Backend Engineer',
  description:
    'Backend engineer specializing in microservices, event-driven systems, and AWS. Founding Product Engineer at FlyWl.',
  keywords: ['Rajat Kumar Rout', 'Backend Engineer', 'Node.js', 'NestJS', 'AWS', 'Kafka', 'Microservices', 'FlyWl'],
  authors: [{ name: 'Rajat Kumar Rout' }],
  openGraph: {
    title: 'Rajat Kumar Rout — Backend Engineer',
    description: 'Backend engineer specializing in microservices, event-driven systems, and AWS. Founding Product Engineer at FlyWl.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Rajat Kumar Rout',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajat Kumar Rout — Backend Engineer',
    description: 'Backend engineer specializing in microservices, event-driven systems, and AWS.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;700&family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
