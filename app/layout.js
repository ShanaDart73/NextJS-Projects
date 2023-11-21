//import { Inter } from 'next/font/google'
import './globals.css'

//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextJS Projects',
  description: 'My NextJS portfolio',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body>{children}</body>
      </html>
  )
}
