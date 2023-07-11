import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // throw new Error('not today')
  return <main className={inter.className}></main>
}
