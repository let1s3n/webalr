import Navbar from '../../navbar'
import Footer from '../../modules/footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  )
}