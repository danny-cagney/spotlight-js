import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Daniel Cagney',
    default:
      'Daniel Cagney - Software engineer, student, and amateur roboticist',
  },
  description:
    'I’m Daniel, a software engineer and student based in Cork City. \
    I’m the founder of Spork, where we develop technologies that empower real people, "Elevating Micro-SaaS: Swift, Superlative, Sustainable - Your Vision, Our Mission"',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
