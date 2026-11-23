import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rajat Kumar Rout — Backend Engineer',
  description:
    'Backend engineer building AI agents and distributed systems — multi-LLM chatbots with MCP tool calling, NestJS microservices, Kafka and AWS. Founding Product Engineer at FlyWl.',
  keywords: ['Rajat Kumar Rout', 'Backend Engineer', 'Node.js', 'NestJS', 'AWS', 'Kafka', 'Microservices', 'FlyWl', 'AI Agents', 'LLM', 'MCP', 'RAG', 'Claude', 'OpenAI'],
  authors: [{ name: 'Rajat Kumar Rout' }],
  openGraph: {
    title: 'Rajat Kumar Rout — Backend Engineer',
    description: 'Backend engineer building AI agents and distributed systems. Founding Product Engineer at FlyWl.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Rajat Kumar Rout',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajat Kumar Rout — Backend Engineer',
    description: 'Backend engineer building AI agents and distributed systems.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Dark by default; light only if the visitor chose it. Runs before paint to avoid a flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.remove('dark')}catch(e){}})()`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
