import NavBar from '../../modules/NavBar/NavBar'
import Footer from '../../modules/Footer/Footer'

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  )
}