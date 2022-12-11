import Navbar from '../../modules/NavBar'
import Footer from '../../modules/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  )
}