import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  // throw new Error('not today')
  return (
    <main>
      <h1>Hello there</h1>
      <p>
        <Link href='/about'>Go to About Page</Link>
      </p>
      <p>
        <Link href='/users'>Go to Users Page</Link>
      </p>
    </main>
  )
}
