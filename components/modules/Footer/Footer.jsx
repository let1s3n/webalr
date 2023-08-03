import React, { useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col, Image } from 'react-bootstrap';
import { IoLogoFacebook, IoLogoYoutube, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <Container fluid className="main-footer bg-primary text-white g-0 position-relative">

      <Container className="g-0 py-6 px-4 px-custom1-3 py-xxxxl-6 px-xxxxl-20">

        <Row className="upperRow g-0 border-bottom pb-5">

          <Col xl="auto" className="d-flex flex-column border-bottom pb-5 border-bottom-xl-0 pb-xl-0" style={{ rowGap: "2rem" }}>
            <Row className="g-0 border border-primary" style={{ columnGap: "2rem", rowGap: "2rem" }}>
              <Col xl="auto" className="d-flex flex-column" style={{ rowGap: "1.5rem" }}>
                <p className="m-0 lh-1 fw-600 mb-3">{t('footer.mainMenu', { ns: 'general' })}</p>

                <Link href="/">
                  <p className="m-0 fw-600 lh-1 " style={{ cursor: "pointer" }}>{t('sections.home', { ns: 'general' })}</p>
                </Link>

                <div className="d-flex flex-column" style={{ rowGap: ".5rem" }}>
                  <p className="m-0 lh-1 fw-600" style={{ cursor: "pointer" }}>{t('sections.about_alr', { ns: 'general' })}</p>
                  <div className="d-flex ps-3 flex-column" style={{ rowGap: ".5rem" }}>
                    <Link href="/nosotros">{t('sections.about_us', { ns: 'general' })}</Link>

                    <Link href="/nosotros/directorio-y-gerencia">{t('sections.board_of_directors_and_management', { ns: 'general' })}</Link>
                  </div>
                </div>

                <div className="d-flex flex-column" style={{ rowGap: ".5rem" }}>
                  <p className="m-0 lh-1 fw-600" style={{ cursor: "pointer" }}>{t('sections.sustainability', { ns: 'general' })}</p>
                  <div className="d-flex ps-3 flex-column" style={{ rowGap: ".5rem" }}>
                    <Link href="/sostenibilidad/responsabilidad-social">{t('sections.social_responsability', { ns: 'general' })}</Link>

                    <Link href="/sostenibilidad/monitoreo-ambiental">{t('sections.environmental_monitoring', { ns: 'general' })}</Link>

                    <Link href="/sostenibilidad/manejo-de-residuos-solidos">{t('sections.solid_waste_management', { ns: 'general' })}</Link>

                    <Link href="/sostenibilidad/seguridad-y-salud-ocupacional">{t('sections.occupational_health_and_safety', { ns: 'general' })}</Link>
                  </div>
                </div>
              </Col>

              <Col xl="auto" className="d-flex flex-column" style={{ rowGap: "1.5rem" }}>

                <p className="d-none d-xl-block m-0 lh-1 fw-600 mb-3 invisible">{t('footer.mainMenu', { ns: 'general' })}</p>

                <div className="d-flex flex-column" style={{ rowGap: ".5rem" }}>
                  <p className="m-0 lh-1 fw-600" style={{ cursor: "pointer" }}>{t('sections.operation', { ns: 'general' })}</p>
                  <div className="d-flex ps-3 flex-column" style={{ rowGap: ".5rem" }}>
                    <Link href="/operacion/acumulacion-los-rosales">{t('sections.alr_operation', { ns: 'general' })}</Link>
                  </div>
                </div>

                {/* <Link href="/prensa">
                  <p className="m-0 lh-1 fw-600" style={{ cursor: "pointer" }}>{t('sections.press', { ns: 'general' })}</p>
                </Link> */}
                <Link href="/politicas">
                  <p className="m-0 lh-1 fw-600" style={{ cursor: "pointer" }}>{t('sections.policies', { ns: 'general' })}</p>
                </Link>

                <Link href="/contacto">
                  <p className="m-0 lh-1 fw-600" style={{ cursor: "pointer" }}>{t('sections.contact_us', { ns: 'general' })}</p>
                </Link>
              </Col>
            </Row>

          </Col>

          <Col xl="auto" className="d-flex flex-column" style={{ rowGap: "2rem" }}>

            <div className="d-flex flex-column" style={{ rowGap: "1rem" }}>
              <p className="m-0 lh-1 fw-600 mb-3">{t('footer.contact', { ns: 'general' })}</p>
              <p className="m-0 lh-1">
                {t('footer.ALR', { ns: 'general' })}
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

          <Col xl="auto" className="socialColumn d-flex flex-column">


            {/* <Image className="logo" src={`${process.env.NEXT_CDN}images/logo-alr-blanco.png`} alt="ALR logo" /> */}
            <Image className="logo" src={`${process.env.NEXT_CDN}images/logoUltimo.png`} alt="ALR logo" />

            <p className="m-0 fw-600 lh-1  text-secondary mb-3">
              {t('footer.follow_us', { ns: 'general' })}
            </p>
            <div className="d-flex" style={{ columnGap: 1.25 + 'rem' }}>
              <a href="https://www.facebook.com/acumulacionlosrosales" target="_blank"><IoLogoFacebook className="facebook-icon fs-3 text-white" /></a>
              <a href="https://www.youtube.com/channel/UCAhc79crxjz1PDF-AP9-hLA/featured" target="_blank"><IoLogoYoutube className="youtube-icon fs-3 text-white" /></a>
              <a href="https://www.linkedin.com/company/mineralosrosales" target="_blank"><IoLogoLinkedin className="linkedin-icon fs-3 text-white" /></a>
              {/* <a href="#" target="_blank"><IoLogoTwitter className="twitter-icon fs-3 text-white" /></a> */}
            </div>


          </Col>

        </Row>


        <Row className="g-0 pt-5">

          <Col xs={12} className="d-flex flex-column flex-custom1-row justify-content-between align-items-center" style={{ zIndex: 2, rowGap: "1rem" }}>

            <p className="lh-1 m-0 text-basic1 text-center text-custom1-start">© 2023 – SMRL ALR. {t('footer.rights', { ns: 'general' })}</p>

            <Image alt="Marca Perú Logo" className="d-block" src={`${process.env.NEXT_CDN}images/marcaPais.svg`} style={{width:"150px"}}/>

            <p className="lh-1 m-0 text-basic1 text-end text-custom1-start">{t('footer.poweredBy', { ns: 'general' })} <a href="https://www.hexagonstudio.pe" target="_blank"><strong>Hexagon Studio</strong></a></p>


          </Col>


        </Row>

      </Container>


      <a className="goUpContainer border lh-1" href="#">
        <Image alt="arrow up image" className="d-block" src={`${process.env.NEXT_CDN}images/arrow-up.svg`} />
      </a>
    </Container>
  )
}

export default Footer
