import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/common/nav-bar'
import Footer from '@/components/common/footer'
import RecoilProvider from './recoi-provider'

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
        <RecoilProvider>
          <Navbar>
            {children}
          </Navbar>
          <Footer />
        </RecoilProvider>
      </body>
    </html>
  )
}
