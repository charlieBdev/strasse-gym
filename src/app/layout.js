'use client'

import { AuthContextProvider } from '../context/AuthContext'
import './globals.css'
import { Inter, Play } from 'next/font/google'
import { Toaster } from 'sonner'

// const inter = Inter({ subsets: ['latin'] })
const headings = Play({
  subsets: ['latin'], 
  weight: '400',
  variable: '--font-headings'
})

// export const metadata = {
//   title: 'Strasse Gym',
//   description: 'Best gym in Sheffield',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${headings.className} ${headings.variable}`}>
        <AuthContextProvider>
          {children}
          <Toaster richColors />
        </AuthContextProvider>
      </body>
    </html>
  )
}
