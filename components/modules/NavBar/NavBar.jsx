import React, { useState, useEffect } from "react";
import Link from 'next/link'
/* import Image from 'next/image' */
import { Navbar, NavDropdown, Container, Nav, Row, Col, Button, Offcanvas, Image } from 'react-bootstrap';
import cookieCutter from 'cookie-cutter'
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import CustomModal from "../customModal";
import CustomOffCanvas from "../customOffCanvas";
import usePathName from "../../../hooks/usePathName";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const NavBar = () => {
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [offCanvasShow, setOffCanvasShow] = useState(false);
  const [locale, setLocale] = useState('');
  const currentpath = usePathName();
  const { t } = useTranslation();

  const [scrollY, setScrollY] = useState(0);
  const { height, width } = useWindowDimensions();
  const [control, setControl] = useState();

  const [paths, setPaths] = useState([
    "/",
    "/nosotros",
    "/nosotros/directorio-y-gerencia",
    "/politicas"
  ])

  useEffect(() => {
    let cookie = cookieCutter.get('i18next');
    setLocale(cookie);

  }, [])

  useEffect(() => {
    console.log("locale: ", locale)

  }, [locale])

  useEffect(() => {
    console.log("currentpath :", currentpath)
  }, [currentpath])


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (width > 576) {
      setControl(750);
    } else {
      setControl(550);
    }

  }, [width])


  useEffect(() => {
    console.log("scrollY: ", scrollY)
  }, [scrollY])

  useEffect(() => {
    console.log("control: ", control)
  }, [control])



  return (

    <Navbar className={"px-4 py-3 w-100 top-0 " + (scrollY <= control && paths.includes(currentpath) ? (scrollY <= 90 ? "position-absolute bg-transparent" : "position-sticky bg-transparent") : "position-sticky bg-primary")} expand={false} style={{ zIndex: 1000 }}>

      <Container fluid className="g-0">

        <Row className="g-0 w-100" style={{ columnGap: 50 + 'px' }}>

          <Col xs="auto" className="d-flex align-items-center">
            {/* <Link href="/">
              <div> */}
            <a href="/">
              <Image src="/images/logo-white.png" className="img-logo" alt="logo-alr" />
              {/* </div> */}

              {/* </Link> */}
            </a>
            <Navbar.Toggle className="d-xl-none border-0" onClick={() => setOffCanvasShow(true)} />
            <CustomOffCanvas show={offCanvasShow} onHide={() => setOffCanvasShow(false)} />
          </Col>

          <Col className="d-flex align-items-center justify-content-center">
            <ul className="list-unstyled m-0 d-none d-xl-flex flex-row text-white" style={{ columnGap: 2 + 'rem' }}>
              <li>
                <Nav.Link href="/" className="text-white py-2 fw-400">{t('nav_bar.home', { ns: 'general' })}</Nav.Link>
              </li>

              <li className="d-flex align-items-center">
                <NavDropdown title={t('nav_bar.about_alr', { ns: 'general' })} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/nosotros">
                    {t('nav_bar.about_us', { ns: 'general' })}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/nosotros/directorio-y-gerencia">
                    {t('nav_bar.board_of_directors_and_management', { ns: 'general' })}
                  </NavDropdown.Item>
                </NavDropdown>
              </li>

              <li className="d-flex align-items-center">
                <NavDropdown title={t('nav_bar.sustainability', { ns: 'general' })} id="basic-nav-dropdown2">
                  <NavDropdown.Item href="/sostenibilidad/responsabilidad-social">
                    {t('nav_bar.social_responsability', { ns: 'general' })}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/sostenibilidad/monitoreo-ambiental">
                    {t('nav_bar.environmental_monitoring', { ns: 'general' })}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/sostenibilidad/manejo-de-residuos-solidos">
                    {t('nav_bar.solid_waste_management', { ns: 'general' })}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/sostenibilidad/seguridad-y-salud-ocupacional">
                    {t('nav_bar.occupational_health_and_safety', { ns: 'general' })}
                  </NavDropdown.Item>
                </NavDropdown>
              </li>

              <li className="d-flex align-items-center">
                <NavDropdown title={t('nav_bar.operation', { ns: 'general' })} id="basic-nav-dropdown3">
                  <NavDropdown.Item href="/operacion/acumulacion-los-rosales">
                    {t('nav_bar.alr_operation', { ns: 'general' })}
                  </NavDropdown.Item>
                </NavDropdown>
              </li>

              <li>
                <Nav.Link href="/prensa" className="text-white py-2 fw-400">{t('nav_bar.press', { ns: 'general' })}</Nav.Link>
              </li>

              <li>
                <Nav.Link href="/politicas" className="text-white py-2 fw-400">{t('nav_bar.policies', { ns: 'general' })}</Nav.Link>
              </li>

              <li>
                <Nav.Link href="/contacto" className="text-white py-2 fw-400">{t('nav_bar.contact_us', { ns: 'general' })}</Nav.Link>
              </li>

            </ul>
          </Col>

          <Col xs="auto" className="d-flex align-items-center">
            <Row className="justify-content-between g-0 align-items-center">

              <Col className="text-center">
                <Button className="rounded-circle p-0 border-0" variant="link" onClick={() => setModalShow(true)}>
                  {locale === 'en' ?
                    <>
                      <Image src="/images/es-icon.svg" className="d-inline-block imgFlag" alt="es icon" />
                      <Image src="/images/fr-icon.svg" className="d-inline-block imgFlag" alt="fr icon" />
                    </>
                    :
                    locale === 'fr' ?
                      <>
                        <Image src="/images/en-icon.svg" className="d-inline-block imgFlag" alt="en icon" />
                        <Image src="/images/es-icon.svg" className="d-inline-block imgFlag" alt="es icon" />
                      </>
                      :
                      <>
                        <Image src="/images/en-icon.svg" className="d-inline-block imgFlag" alt="en icon" />
                        <Image src="/images/fr-icon.svg" className="d-inline-block imgFlag" alt="fr icon" />
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
