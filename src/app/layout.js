'use client'

import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import { AuthContextProvider } from '../context/AuthContext'
import './globals.css'
import { Inter, Play } from 'next/font/google'
import { Toaster } from 'sonner'

// const inter = Inter({ subsets: ['latin'] })
const play = Play({
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
    {/* <html lang="en" className='!scroll-smooth'> */}
      <body className={play.className}>
      <NextUIProvider>
        <AuthContextProvider>
          {children}
          <Toaster richColors />
        </AuthContextProvider>
      </NextUIProvider>
      </body>
    </html>
  )
}
