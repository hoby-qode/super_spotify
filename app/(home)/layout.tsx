import Footer from '@/src/features/structures/footer'
import Header from '@/src/features/structures/header'
import SideBar from '@/src/features/structures/sideBar'
import ThemeToggle from '@/components/ui/themeToggle'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body className="dark-theme">
      <Header />
      <SideBar />
      <main className="container">{children}</main>
      <Footer />
      <ThemeToggle />
    </body>
  )
}
