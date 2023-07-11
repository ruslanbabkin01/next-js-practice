export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav>About NAvBar</nav>
      <main>{children}</main>
    </>
  )
}
