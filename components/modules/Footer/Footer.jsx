import React, { useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col, Image } from 'react-bootstrap';
import { IoLogoFacebook, IoLogoYoutube, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <Container fluid className="main-footer bg-primary text-white g-0">

      <Container className="g-0 py-6 px-4 px-custom1-3 py-xxxxl-6 px-xxxxl-20">

        <Row className="upperRow g-0 border-bottom pb-5">

          <Col custom1="auto" className="d-flex flex-column" style={{ rowGap: "1rem" }}>
            <p className="m-0 lh-1 fw-bold futuraBold mb-3">MENÚ PRINCIPAL</p>

            <Link href="/">
              <p className="m-0 lh-1" style={{ cursor: "pointer" }}>Home</p>
            </Link>

            <Link href="/nosotros">
              <p className="m-0 lh-1" style={{ cursor: "pointer" }}>Nosotros</p>
            </Link>
            <Link href="/politicas">
              <p className="m-0 lh-1" style={{ cursor: "pointer" }}>Políticas</p>
            </Link>
            <Link href="/responsabilidad">
              <p className="m-0 lh-1" style={{ cursor: "pointer" }}>Responsabilidad</p>
            </Link>
            <Link href="/contacto">
              <p className="m-0 lh-1" style={{ cursor: "pointer" }}>Contáctanos</p>
            </Link>


          </Col>

          <Col custom1="auto" className="d-flex flex-column" style={{ rowGap: "2rem" }}>

            <div className="d-flex flex-column" style={{ rowGap: "1rem" }}>
              <p className="m-0 lh-1 fw-bold futuraBold mb-3">CONTACTO</p>
              <p className="m-0 lh-1">
                {t('footer_ALR', { ns: 'general' })}
              </p>
              <p className="m-0 lh-1">Vilque, Puno, Perú</p>
            </div>

            <div className="d-flex flex-column" style={{ rowGap: "1rem" }}>

              <p className="m-0 lh-1">
                Av. Circunvalación Del Golf Los Inkas 134
              </p>
              <p className="m-0 lh-1">
                Panorama Centro Empresarial, Oficina 707 Torre 1
              </p>
              <p className="m-0 lh-1">
                Santiago de Surco
              </p>
              <p className="m-0 lh-1 text-yellow2">
                <a href="mailto:contacto@acumulacionlosrosales.com">contacto@acumulacionlosrosales.com</a>
              </p>
            </div>

          </Col>

          <Col custom1="auto" className="socialColumn d-flex flex-column">


            <Image className="logo" src="/images/logo-alr-blanco.png" alt="ALR logo" />

            <p className="m-0 fw-600 lh-1 futuraMedium text-secondary mb-3">
              {t('footer_follow_us', { ns: 'general' })}
            </p>
            <div className="d-flex" style={{ columnGap: 1.25 + 'rem' }}>
              <a href="#" target="_blank"><IoLogoFacebook className="facebook-icon fs-3 text-white" /></a>
              <a href="https://www.youtube.com/channel/UCAhc79crxjz1PDF-AP9-hLA/featured" target="_blank"><IoLogoYoutube className="youtube-icon fs-3 text-white" /></a>
              <a href="https://www.linkedin.com/company/mineralosrosales" target="_blank"><IoLogoLinkedin className="linkedin-icon fs-3 text-white" /></a>
              <a href="#" target="_blank"><IoLogoTwitter className="twitter-icon fs-3 text-white" /></a>
            </div>


          </Col>

        </Row>


        <Row className="g-0 pt-5">

          <Col xs={12} className="d-flex flex-column flex-custom1-row justify-content-between align-items-center" style={{ zIndex: 2, rowGap: "1rem" }}>

            <p className="lh-1 m-0 text-basic1">© 2022 – SMRL ALR. Todos los derechos reservados.</p>

            <p className="lh-1 m-0 text-basic1 text-end text-custom1-start">Powered by <strong>DGS</strong></p>


          </Col>


        </Row>

      </Container>
    </Container>
  )
}

export default Footer
