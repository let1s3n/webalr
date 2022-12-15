import React, { useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col, Image } from 'react-bootstrap';
import { IoLogoFacebook, IoLogoYoutube, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <Container fluid className="main-footer bg-primary text-white g-0">
      <Container className="g-0 p-6">
        <Row className="g-0 justify-content-between border-bottom pb-5">

          <Col xs={12} lg={2} xxl="auto" className="d-flex" style={{ zIndex: 2 }}>

            <Image className="logo" src="/images/logo-alr-blanco.png" alt="ALR logo" style={{ width: 200 + 'px', height: 200 + 'px' }} />


          </Col>
          <Col xs={12} lg={4} xxl="auto" className="d-flex justify-content-center" style={{ zIndex: 2 }}>
            <Row className="g-0" style={{ rowGap: 1 + 'rem' }}>
              <Col className="d-flex align-items-center ps-4" xs={12}>
                <p className="m-0 custom-font-xxl-6">
                  {t('footer_ALR', { ns: 'general' })} <br />
                  VILQUE, PUNO, PERÚ
                </p>
              </Col>
              <Col className="d-flex align-items-center ps-4" xs={12}>
                <p className="m-0 custom-font-xxl-6">
                  Av. Circunvalación Del Golf Los Inkas 134 <br />
                  Oficina 707 Torre 1 - Santiago De Surco <br />
                  LIMA - PERÚ
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={6} lg={3} xxl="auto" className="d-flex flex-column" style={{ zIndex: 2 }}>
            {/* <Row xs={1} className="g-0"> */}
            <Row className="mb-3">
              <p className="m-0 fw-600 custom-font-xxl-6 text-center text-secondary">{t('footer_follow_us', { ns: 'general' })}</p>
            </Row>
            <Row className="text-center">
              <div className="d-flex justify-content-center" style={{ columnGap: 1.25 + 'rem' }}>
                <a href="#" target="_blank"><IoLogoFacebook className="facebook-icon fs-md-5 fs-xxl-4 text-white" /></a>
                <a href="https://www.youtube.com/channel/UCAhc79crxjz1PDF-AP9-hLA/featured" target="_blank"><IoLogoYoutube className="youtube-icon fs-md-5 fs-xxl-4 text-white" /></a>
                <a href="https://www.linkedin.com/company/mineralosrosales" target="_blank"><IoLogoLinkedin className="linkedin-icon fs-md-5 fs-xxl-4 text-white" /></a>
                <a href="#" target="_blank"><IoLogoTwitter className="twitter-icon fs-md-5 fs-xxl-4 text-white" /></a>
              </div>
            </Row>
            {/* </Row> */}
          </Col>
          {/* <Col xs={6} lg={3} xxl={2} className="d-flex justify-content-center pt-4" style={{ zIndex: 2 }}>
          <Row xs={1} className="g-0">
            <Col className="text-center">
              <Link href="/politicas" className="m-0 custom-font-6">

                {t('footer_policies', { ns: 'general' })}

              </Link>
            </Col>
            <Col className="text-center">
              <p className="m-0 custom-font-6">SUNAT</p>
            </Col>
            <Col className="text-center">
              <p className="m-0 custom-font-6">MINEM</p>
            </Col>
          </Row>
        </Col> */}

        </Row>


        <Row className="g-0 pt-5">

          <Col xs={12} className="d-flex justify-content-between align-items-center" style={{ zIndex: 2 }}>

            <p>© 2022 – SMRL ALR. Todos los derechos reservados.</p>

            <p>Powered by DGS</p>


          </Col>


        </Row>
      </Container>
    </Container>
  )
}

export default Footer
