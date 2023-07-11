import './globals.css'
import type { Metadata } from 'next'
import NavBar from './components/NavBar'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true} className='bg-slate-800'>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
