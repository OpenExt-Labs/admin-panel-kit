import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/common/nav-bar'
import Footer from '@/components/common/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin panel kit - Powered by OpenExt',
  description: 'Admin panel kit - Powered by OpenExt inspired by Tailwind, shadcn and Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar>
          {children}
        </Navbar>
        <Footer />
      </body>
    </html>
  )
}
