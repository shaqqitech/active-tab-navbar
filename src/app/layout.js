import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/app/navbar/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Active Tab',
  description: 'Active Tab Description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth  m-0 p-0'>
      <body className={inter.className} >
        {children}
        <Navbar />
      </body>
    </html>
  )
}
