import './globals.css'
import { Inter, Play } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const headings = Play({
  subsets: ['latin'], 
  weight: '400',
  variable: '--font-headings'
})

export const metadata = {
  title: 'Strasse Gym',
  description: 'Best gym in Sheffield',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${headings.variable}`}>
        {children}
      </body>
    </html>
  )
}
