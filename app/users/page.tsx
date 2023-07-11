import getAllUsers from '@/lib/getAllUsers'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Users',
}

// ISR, ревалідація на рівні сторінки
// - оновлення тільки при додаванні нових даних
export const revalidate = 60 // revalidate this page every 60 seconds

export default async function UsersPage() {
  const userData: Promise<User[]> = getAllUsers()

  const users = await userData

  const content = (
    <section>
      <h2>
        <Link href='/'>Back to HomePage</Link>
      </h2>
      <br />
      {users.map(user => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        )
      })}
    </section>
  )

  return content
}
