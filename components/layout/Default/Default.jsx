import NavBar from '../../modules/NavBar'
import Footer from '../../modules/Footer'

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  )
}