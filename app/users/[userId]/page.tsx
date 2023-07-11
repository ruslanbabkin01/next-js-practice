import getUser from '@/lib/getUser'
import getUserPosts from '@/lib/getUserPosts'
import { Suspense } from 'react'
import UserPosts from './components/UserPosts'
import { Metadata } from 'next'
import getAllUsers from '@/lib/getAllUsers'
import { notFound } from 'next/navigation'

type Params = {
  params: {
    userId: string
  }
}

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId)
  const user: User = await userData

  if (!user) {
    return {
      title: 'User Not Found',
    }
  }
  return {
    title: user.name,
    description: `This is a page of ${user.name}`,
  }
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId)
  const userPostData: Promise<Post[]> = getUserPosts(userId)

  // If not progressively rendering with Suspense, use Promise.all
  // const [user, userPost] = await Promise.all([userData, userPostData])

  const user = await userData

  if (!user) return notFound()

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostData} />
      </Suspense>
    </>
  )
}

// робимо сторінку SSG

export async function generateStaticParams() {
  const userData: Promise<User[]> = getAllUsers()
  const users = await userData

  return users.map(user => ({ usersId: user.id.toString() }))
}
