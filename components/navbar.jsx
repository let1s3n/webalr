import Link from 'next/link'

import { Navbar, NavDropdown, Container, Nav, Row, Col, Image, Button, Offcanvas } from 'react-bootstrap';


const NavBar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Row>
          <Col>
            <Link href="/" passHref><Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </Col>
          <Col>
            <ul className="list-unstyled m-0 d-none d-xl-flex flex-row me-auto text-white" style={{ columnGap: 2 + 'rem' }}>
            <li>
                <Link href="/proyectos" passHref>
                  <Nav.Link>Proyectos</Nav.Link>
                </Link>
              </li>
              <li>
                <Link href="/socios" passHref>
                  <Nav.Link>Socios</Nav.Link>
                </Link>
              </li>
              <li>
                <Link href="/nosotros" passHref>
                  <Nav.Link>Nosotros</Nav.Link>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}

export default NavBar
