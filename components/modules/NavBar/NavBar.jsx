import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { Navbar, NavDropdown, Container, Nav, Row, Col, Button, Offcanvas } from 'react-bootstrap';
import cookieCutter from 'cookie-cutter'
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import CustomModal from "../customModal";
import CustomOffCanvas from "../customOffCanvas";
import usePathName from "../../../hooks/usePathName";

const NavBar = () => {
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [offCanvasShow, setOffCanvasShow] = useState(false);
  const [locale, setLocale] = useState('');
  const currentpath = usePathName();
  const { t } = useTranslation();

  useEffect(() => {
    let cookie = cookieCutter.get('i18next');
    setLocale(cookie);

  }, [])

  return (

    <Navbar bg="blue1" className={currentpath === '/' || currentpath === '/nosotros' || currentpath === '/politicas' ? "px-4 py-2 w-100 bg-opacity-70 position-absolute top-0" : "main-navbar px-4 py-2 w-100 bg-opacity-70"} expand={false} style={{ zIndex: 2 }}>
      <Container fluid className="g-0">
        <Row className="g-0 w-100" style={{ columnGap: 50 + 'px' }}>

          <Col xs="auto" className="d-flex">
            <Link href="/" passHref>
              <Image src="/images/logo-alr.png" alt="logo-alr" width={80} height={50} priority className="img-logo" />
            </Link>
            <Navbar.Toggle className="d-xl-none border-0" onClick={() => setOffCanvasShow(true)} />
            <CustomOffCanvas show={offCanvasShow} onHide={() => setOffCanvasShow(false)} />
          </Col>

          <Col className="d-flex align-items-center justify-content-center">
            <ul className="list-unstyled m-0 d-none d-xl-flex flex-row text-white" style={{ columnGap: 2 + 'rem' }}>
              <li>

                <Nav.Link href="/" className="text-white py-2 fw-400 text-uppercase">HOME</Nav.Link>

              </li>
              <li>

                <Nav.Link href="/nosotros" className="text-white py-2 fw-400 text-uppercase">{t('about_us', { ns: 'general' })}</Nav.Link>

              </li>
              <li>

                <Nav.Link href="/politicas" className="text-white py-2 fw-400 text-uppercase">{t('policies', { ns: 'general' })}</Nav.Link>

              </li>

              <li>

                <Nav.Link href="/responsabilidad" className="text-white py-2 fw-400 text-uppercase">{t('responsibility', { ns: 'general' })}</Nav.Link>

              </li>
              <li>

                <Nav.Link href="/contacto" className="text-white py-2 fw-400 text-uppercase">{t('contact_us', { ns: 'general' })}</Nav.Link>

              </li>

            </ul>
          </Col>

          <Col xs="auto" className="d-flex align-items-center">
            <Row className="justify-content-between g-0 align-items-center">

              <Col className="text-center">
                <Button className="rounded-circle p-0 border-0" variant="link" onClick={() => setModalShow(true)}>
                  {locale === 'en' ?
                    <>
                      <Image src="/images/es-icon.svg" className="d-inline-block" width={24} height={24} alt="es icon" />
                      <Image src="/images/fr-icon.svg" className="d-inline-block" width={24} height={24} alt="fr icon" />
                    </>
                    :
                    locale === 'fr' ?
                      <>
                        <Image src="/images/en-icon.svg" className="d-inline-block" width={24} height={24} alt="en icon" />
                        <Image src="/images/es-icon.svg" className="d-inline-block" width={24} height={24} alt="es icon" />
                      </>
                      :
                      <>
                        <Image src="/images/en-icon.svg" className="d-inline-block" width={24} height={24} alt="en icon" />
                        <Image src="/images/fr-icon.svg" className="d-inline-block" width={24} height={24} alt="fr icon" />
                      </>
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