import React, { useEffect } from "react";
import Link from "next/link";

import { Container, Row, Col,Image} from 'react-bootstrap';
import { ImLinkedin } from "react-icons/im";
const Footer = () => {

  return (
    <Container fluid className="main-footer position-fixed bottom-0 text-white py-3 px-2 py-lg-5 px-lg-5">
      <Row>
        <Col xs={12} lg={2} xxl={2} className="d-flex justify-content-center align-items-center">
          
            <Image className="logo" src="/images/logo-alr.png" alt="ALR logo" />

          
        </Col>
        <Col xs={12} lg={4} xxl={6} className="d-flex align-items-center justify-content-center mb-4 mb-lg-0">
          <Row className="w-100 justify-content-md-evenly justify-content-lg-start justify-content-xxl-around" style={{rowGap:1+'rem'}}>
            <Col xs="auto" className="ms-lg-3">
              <p className="m-0">
                Planta Metalúrgica Los Rosales <br />
                VILQUE, PUNO, PERÚ
              </p>
            </Col>
            <Col xs="auto" className="ms-lg-3">
              <p className="m-0">
                Av. Circunvalación Del Golf Los Inkas 134 <br />
                Oficina 707 Torre 1 - Santiago De Surco <br />
                LIMA - PERÚ
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs={6} lg={3} xxl={2} className="d-flex justify-content-center align-items-center">
          <Row xs={1}>
            <Col>
              <p className="m-0 fs-4 fw-600 text-center">Síguenos</p>
            </Col>
            <Col className="text-center">
              <a href="https://www.linkedin.com/company/mineralosrosales" target="_blank"><ImLinkedin /></a>
            </Col>
          </Row>
        </Col>
        <Col xs={6} lg={3} xxl={2} className="d-flex justify-content-center align-items-center">
          <Row xs={1}>
            <Col className="text-center">
              <p className="m-0 fs-5">Políticas</p>
            </Col>
            <Col className="text-center">
              <p className="m-0 fs-5">SUNAT</p>
            </Col>
            <Col className="text-center">
              <p className="m-0 fs-5">MINEM</p>
            </Col>
          </Row>
        </Col>
      </Row>

    </Container>
  )
}

export default Footer
