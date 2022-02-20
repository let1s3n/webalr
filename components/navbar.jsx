import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { Navbar, NavDropdown, Container, Nav, Row, Col, Button, Offcanvas } from 'react-bootstrap';
import cookieCutter from 'cookie-cutter'
import CustomModal from "./customModal";
import CustomOffCanvas from "./customOffCanvas";
import usePathName from "../hooks/usePathName";

const NavBar = () => {
  const [modalShow, setModalShow] = useState(false);
  const [offCanvasShow, setOffCanvasShow] = useState(false);
  const [locale, setLocale] = useState('');
  const currentpath = usePathName();

  useEffect(() => {
    let cookie = cookieCutter.get('i18next');
    setLocale(cookie);

  }, [])


  useEffect(() => {
    console.log(currentpath)
  }, [currentpath])

  return (
    <Navbar bg="blue1" className={currentpath === '/' || currentpath === '/nosotros' ? "px-4 py-2 w-100 bg-opacity-70 position-absolute top-0" : "main-navbar px-4 py-2 w-100 bg-opacity-70"} expand={false} style={{ zIndex: 2 }}>
      <Container fluid className="g-0">
        <Row className="g-0 w-100" style={{ columnGap: 50 + 'px' }}>
          <Col xs="auto" className="d-flex">
            <Link href="/" passHref>
              <Image src="/images/logo-alr.png" alt="logo-alr" width={80} height={50} priority />
            </Link>
            <Navbar.Toggle className="d-xl-none border-0" onClick={() => setOffCanvasShow(true)} />
            <CustomOffCanvas show={offCanvasShow} onHide={() => setOffCanvasShow(false)} />
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <ul className="list-unstyled m-0 d-none d-xl-flex flex-row text-white" style={{ columnGap: 2 + 'rem' }}>
              <li>
                <Link href="/" passHref>
                  <Nav.Link className="text-white py-2 fw-400 text-uppercase">HOME</Nav.Link>
                </Link>
              </li>
              <li>
                <Link href="/nosotros" passHref>
                  <Nav.Link className="text-white py-2 fw-400 text-uppercase">SOBRE NOSOTROS</Nav.Link>
                </Link>
              </li>
              <li>
                <Link href="/politicas" passHref>
                  <Nav.Link className="text-white py-2 fw-400 text-uppercase">POLÍTICAS</Nav.Link>
                </Link>
              </li>

              <li>
                <Link href="/responsabilidad" passHref>
                  <Nav.Link className="text-white py-2 fw-400 text-uppercase">RESPONSABILIDAD</Nav.Link>
                </Link>
              </li>
              <li>
                <Link href="/contacto" passHref>
                  <Nav.Link className="text-white py-2 fw-400 text-uppercase">CONTÁCTENOS</Nav.Link>
                </Link>
              </li>

            </ul>
          </Col>
          <Col xs="auto" className="d-flex align-items-center">
            <Row className="justify-content-between g-0 align-items-center">

              <Col className="text-center">
                <Button className="rounded-circle p-0 border-0" variant="link" onClick={() => setModalShow(true)}>
                  {locale === 'en' ?
                    <Image src="/images/es-icon.svg" className="d-inline-block" width={24} height={24} />
                    :
                    <Image src="/images/en-icon.svg" className="d-inline-block" width={24} height={24} />
                  }

                </Button>
              </Col>
            </Row>
          </Col>
        </Row>

      </Container>
      <CustomModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Navbar>
  )
}

export default NavBar
