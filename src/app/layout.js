import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({weight: ['400', '700', '800'],style:['normal', 'italic'], subsets: ['latin'] })

export const metadata = {
  title: 'Age calculator App | Next.js',
  description: 'Age calculator App Frontend Mentor Challenge',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gris-100`}>{children}</body>
    </html>
  )
}
