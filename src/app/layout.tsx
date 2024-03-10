import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { RoomStoreProvider } from '@/providers/room-store-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Veg',
  description: 'The new way to share stuff between devices',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RoomStoreProvider>
          {children}
        </RoomStoreProvider>
      </body>
    </html>
  )
}
