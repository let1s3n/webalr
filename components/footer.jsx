import React, { useEffect } from "react";
import Link from "next/link";
/* import Image from 'next/image' */
import { Container, Row, Col, Image } from 'react-bootstrap';
/* import { ImFacebook2,ImYoutube,ImLinkedin,ImTwitter } from "react-icons/im"; */
/* import { GrFacebook,GrYoutube,GrLinkedin,GrTwitter } from "react-icons/gr"; */
/* import { FaFacebookSquare,FaYoutubeSquare,FaLinkedin,FaTwitterSquare } from "react-icons/fa"; */
import { IoLogoFacebook, IoLogoYoutube, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

const Footer = () => {

  return (
    <Container fluid className="main-footer bg-blue1 text-white py-3 px-0 py-lg-5 position-relative overflow-hidden">
      <Row className="g-0 px-2 px-lg-5">
        <Col xs={12} lg={2} xxl={2} className="d-flex justify-content-center align-items-center" style={{ zIndex: 2 }}>

          <Image className="logo" src="/images/logo-alr-square.png" alt="ALR logo" style={{ width: 200 + 'px', height: 200 + 'px' }} />


        </Col>
        <Col xs={12} lg={4} xxl={6} className="d-flex pt-4 justify-content-center mb-4 mb-lg-0" style={{ zIndex: 2 }}>
          <Row className="w-100 justify-content-md-evenly justify-content-lg-start ps-xl-5 ps-xxl-6" style={{ rowGap: 1 + 'rem' }}>
            <Col xs="auto" className="ms-lg-3">
              <p className="m-0 custom-font-xxl-6">
                Planta Metalúrgica Los Rosales <br />
                VILQUE, PUNO, PERÚ
              </p>
            </Col>
            <Col xs="auto" className="ms-lg-3">
              <p className="m-0 custom-font-xxl-6">
                Av. Circunvalación Del Golf Los Inkas 134 <br />
                Oficina 707 Torre 1 - Santiago De Surco <br />
                LIMA - PERÚ
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs={6} lg={3} xxl={2} className="d-flex justify-content-center pt-4" style={{ zIndex: 2 }}>
          <Row xs={1} className="g-0">
            <Col>
              <p className="m-0 fw-600 custom-font-xxl-6 text-center">Síguenos</p>
            </Col>
            <Col className="text-center">
              <div className="d-flex justify-content-center" style={{ columnGap: .5 + 'rem' }}>
                <a href="#" target="_blank"><IoLogoFacebook className="facebook-icon fs-md-5 fs-xxl-4 text-white" /></a>
                <a href="https://www.youtube.com/channel/UCAhc79crxjz1PDF-AP9-hLA/featured" target="_blank"><IoLogoYoutube className="youtube-icon fs-md-5 fs-xxl-4 text-white" /></a>
                <a href="https://www.linkedin.com/company/mineralosrosales" target="_blank"><IoLogoLinkedin className="linkedin-icon fs-md-5 fs-xxl-4 text-white" /></a>
                <a href="#" target="_blank"><IoLogoTwitter className="twitter-icon fs-md-5 fs-xxl-4 text-white" /></a>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={6} lg={3} xxl={2} className="d-flex justify-content-center pt-4" style={{ zIndex: 2 }}>
          <Row xs={1} className="g-0">
            <Col className="text-center">
              <Link href="/politicas">
                <a>
                  <p className="m-0 custom-font-6">Políticas</p>
                </a>
              </Link>
            </Col>
            <Col className="text-center">
              <p className="m-0 custom-font-6">SUNAT</p>
            </Col>
            <Col className="text-center">
              <p className="m-0 custom-font-6">MINEM</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Image className="footer-illustration position-absolute" src="/images/footer-illustration.svg" style={{ zIndex: 1 }} />
    </Container>
  )
}

export default Footer
