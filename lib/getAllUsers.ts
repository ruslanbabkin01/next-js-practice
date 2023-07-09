export default async function getAllUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: {
      // період запиту на сервер
      revalidate: 60,
    },
  })

  if (!res.ok) throw new Error('failed to fetch data')

  return res.json()
}
