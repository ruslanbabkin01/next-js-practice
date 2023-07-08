// import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // throw new Error('not today')
  return (
    <main className={styles.main}>
      <h1>Hello there</h1>
      <Link href='/about'>Go to About Page</Link>
    </main>
  )
}
