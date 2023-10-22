import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/Navbar'

const inter = Inter({ subsets: ['latin'] })
const title = 'My Anime List - clone'

export const metadata = {
  title: title,
  description: title,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-main-dark text-main-primary`}>
        <Navbar/>
          {children}
      </body>
    </html>
  )
}
