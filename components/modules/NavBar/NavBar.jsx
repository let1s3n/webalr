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
    "/sostenibilidad/responsabilidad-social",
    "/sostenibilidad/relacionamiento-comunitario",
    "/sostenibilidad/monitoreo-ambiental",
    "/sostenibilidad/manejo-de-residuos-solidos",
    "/sostenibilidad/seguridad-y-salud-ocupacional",
    "/politicas",
    "/operacion/acumulacion-los-rosales",
    "/prensa"
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
      if (currentpath === '/') {
        setControl(531);
      } else {
        setControl(342);
      }

    } else {
      /* setControl(550); */
      setControl(375);
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
            <a href="/">
              <Image src={`${process.env.NEXT_CDN}images/logo-white.png`} className="img-logo" alt="logo-alr" />
            </a>
            <Navbar.Toggle className="d-xl-none border-0" onClick={() => setOffCanvasShow(true)} />
            <CustomOffCanvas show={offCanvasShow} onHide={() => setOffCanvasShow(false)} />
          </Col>

          <Col className="d-flex align-items-center justify-content-center">
            <ul className="list-unstyled m-0 d-none d-xl-flex flex-row text-white" style={{ columnGap: 2 + 'rem' }}>
              <li>
                <Nav.Link href="/" className="text-white py-2 fw-400">{t('sections.home', { ns: 'general' })}</Nav.Link>
              </li>

              <li className="d-flex align-items-center">
                <NavDropdown title={t('sections.about_alr', { ns: 'general' })} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/nosotros">
                    {t('sections.about_us', { ns: 'general' })}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/nosotros/directorio-y-gerencia">
                    {t('sections.board_of_directors_and_management', { ns: 'general' })}
                  </NavDropdown.Item>
                </NavDropdown>
              </li>

              <li className="d-flex align-items-center">
                <NavDropdown title={t('sections.sustainability', { ns: 'general' })} id="basic-nav-dropdown2">
                  <NavDropdown.Item href="/sostenibilidad/responsabilidad-social">
                    {t('sections.social_responsability', { ns: 'general' })}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/sostenibilidad/relacionamiento-comunitario">
                    {t('sections.community_relations', { ns: 'general' })}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/sostenibilidad/monitoreo-ambiental">
                    {t('sections.environmental_monitoring', { ns: 'general' })}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/sostenibilidad/manejo-de-residuos-solidos">
                    {t('sections.solid_waste_management', { ns: 'general' })}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/sostenibilidad/seguridad-y-salud-ocupacional">
                    {t('sections.occupational_health_and_safety', { ns: 'general' })}
                  </NavDropdown.Item>
                </NavDropdown>
              </li>

              <li className="d-flex align-items-center">
                <NavDropdown title={t('sections.operation', { ns: 'general' })} id="basic-nav-dropdown3">
                  <NavDropdown.Item href="/operacion/acumulacion-los-rosales">
                    {t('sections.alr_operation', { ns: 'general' })}
                  </NavDropdown.Item>
                </NavDropdown>
              </li>

              <li>
                <Nav.Link href="/prensa" className="text-white py-2 fw-400">{t('sections.press', { ns: 'general' })}</Nav.Link>
              </li>

              <li>
                <Nav.Link href="/politicas" className="text-white py-2 fw-400">{t('sections.policies', { ns: 'general' })}</Nav.Link>
              </li>

              <li>
                <Nav.Link href="/contacto" className="text-white py-2 fw-400">{t('sections.contact_us', { ns: 'general' })}</Nav.Link>
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
                      <Image src={`${process.env.NEXT_CDN}images/fr-icon.svg`} className="d-inline-block imgFlag" alt="fr icon" />
                    </>
                    :
                    locale === 'fr' ?
                      <>
                        <Image src={`${process.env.NEXT_CDN}images/en-icon.svg`} className="d-inline-block imgFlag" alt="en icon" />
                        <Image src="/images/es-icon.svg" className="d-inline-block imgFlag" alt="es icon" />
                      </>
                      :
                      <>
                        <Image src={`${process.env.NEXT_CDN}images/en-icon.svg`} className="d-inline-block imgFlag" alt="en icon" />
                        <Image src={`${process.env.NEXT_CDN}images/fr-icon.svg`} className="d-inline-block imgFlag" alt="fr icon" />
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
