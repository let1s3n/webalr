import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { Container, Pagination, Row, Col, Carousel, Image, Button } from 'react-bootstrap'
import dynamic from 'next/dynamic';
import useWindowDimensions from "../hooks/useWindowDimensions";
const PdfViewer = dynamic(
  () => import('../components/pdfViewer'),
  { ssr: false }
);
const Politicas = () => {
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    console.log(width)
  }, [width])
  return (
    <section className="politicas-page">
      <section className="hero-section">
        <Carousel controls={width >= 1280 ? true : false} interval={null} className="h-100">
          <Carousel.Item className="h-100">
            <Image
              className="hero-image"
              src="/images/politica1.jpg"
              alt="Política 1"
            />
            <h1 className="hero-text position-absolute text-white">
              <span className="d-block bg-yellow2 bg-opacity-60 fw-normal px-4 mb-2">PERUANOS EN BUSCA DE LA EXCELENCIA</span>
              <span className="d-inline-block bg-basic1 bg-opacity-40 fw-600 px-4 mb-2">HACIENDO</span> <br />
              <span className="d-inline-block fw-bolder bg-blue2 bg-opacity-60 px-4">MINERÍA RESPONSABLE</span>
            </h1>
            <div className="hero-illustration">
              <Image
                src="/images/hero-illustration.svg"
                alt='hero-illustration'
                fluid
              />
            </div>
          </Carousel.Item>
          <Carousel.Item className="h-100">
            <Image
              className="hero-image"
              src="/images/nosotros2.jpg"
              alt="Nosotros 2"
            />
            <h1 className="hero-text position-absolute text-white">
              <span className="d-block bg-yellow2 bg-opacity-60 fw-normal px-4 mb-2">PROCESAMOS MÁS DE 120,000 TM/AÑO</span>
              <span className="d-inline-block bg-basic1 bg-opacity-40 fw-600 px-4 mb-2">DE MINERAL AURÍFERO PROPIO</span> <br />
              <span className="d-inline-block fw-bolder bg-blue2 bg-opacity-60 px-4">Y PAMs</span>
            </h1>
            <div className="hero-illustration">
              <Image
                src="/images/hero-illustration.svg"
                alt='hero-illustration'
                layout='fill'
                objectFit='cover'
                objectPosition="left top"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item className="h-100">
            <Image
              className="hero-image"
              src="/images/politica2.jpg"
              alt="Política 2"
            />
            <h1 className="hero-text position-absolute text-white">
              <span className="d-block bg-yellow2 bg-opacity-60 fw-normal px-4 mb-2">PROCESAMOS MÁS DE 120,000 TM/AÑO</span>
              <span className="d-inline-block bg-basic1 bg-opacity-40 fw-600 px-4 mb-2">DE MINERAL AURÍFERO PROPIO</span> <br />
              <span className="d-inline-block fw-bolder bg-blue2 bg-opacity-60 px-4">Y PAMs</span>
            </h1>
            <div className="hero-illustration">
              <Image
                src="/images/hero-illustration.svg"
                alt='hero-illustration'
                layout='fill'
                objectFit='cover'
                objectPosition="left top"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
      <Container fluid="md" className="py-10">
        <Row xs={1} xl={2} xxl={3} className="politicas-grid overflow-hidden">
          <Col className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-xl-center">
            <PdfViewer url="/politicas/Politica_de_Seguridad_Salud_y_MA16.12.21.pdf" pageNumber={1} />
            <div className="d-flex flex-column pt-3 text-center text-md-start h-100 position-relative" style={{ flex: 1 }}>
              <h5>Política de Seguridad, Salud y Medio Ambiente</h5>
              <p className="m-0"><span>Publicación: </span> 01 de Nov. 2021</p>
              <p className="m-0"><span>Tipo: </span> PDF</p>
              <p className="m-0"><span>Peso: </span> 437 KB</p>
              <Button variant="blue1" size="sm" className="download-btn text-white mt-3 w-md-50 mx-auto position-md-absolute start-50 translate-middle-md" href="/politicas/Politica_de_Seguridad_Salud_y_MA16.12.21.pdf" target="_blank" style={{ zIndex: 2 }}>
                Descargar
              </Button>
            </div>
          </Col>
          <Col className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-xl-center">
            <PdfViewer url="/politicas/Politica_derechos_humanos_081221.pdf" pageNumber={1} />
            <div className="d-flex flex-column pt-3 text-center text-md-start h-100 position-relative" style={{ flex: 1 }}>
              <h5>Política de Derechos Humanos</h5>
              <p className="m-0"><span>Publicación: </span> 01 de Nov. 2021</p>
              <p className="m-0"><span>Tipo: </span> PDF</p>
              <p className="m-0"><span>Peso: </span> 352 KB</p>
              <Button variant="blue1" size="sm" className="download-btn text-white mt-3 w-md-50 mx-auto position-md-absolute start-50 translate-middle-md" href="/politicas/Politica_derechos_humanos_081221.pdf" target="_blank" style={{ zIndex: 2 }}>
                Descargar
              </Button>
            </div>

          </Col>
          <Col className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-xl-center">
            <PdfViewer url="/politicas/Politica_inclusion_e_igualdad_laboral_13-12-2021.pdf" pageNumber={1} />
            <div className="d-flex flex-column pt-3 text-center text-md-start h-100 position-relative" style={{ flex: 1 }}>
              <h5>Política de Inclusión e Igualdad Laboral</h5>
              <p className="m-0"><span>Publicación: </span> 01 de Nov. 2021</p>
              <p className="m-0"><span>Tipo: </span> PDF</p>
              <p className="m-0"><span>Peso: </span> 279 KB</p>
              <Button variant="blue1" size="sm" className="download-btn text-white mt-3 w-md-50 mx-auto position-md-absolute start-50 translate-middle-md" href="/politicas/Politica_inclusion_e_igualdad_laboral_13-12-2021.pdf" target="_blank" style={{ zIndex: 2 }}>
                Descargar
              </Button>
            </div>
          </Col>
          <Col className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-xl-center">
            <PdfViewer url="/politicas/Politica_responsabilidad_social_y_rrcc101221.pdf" pageNumber={1} />
            <div className="d-flex flex-column pt-3 text-center text-md-start h-100 position-relative" style={{ flex: 1 }}>
              <h5>Política de Responsabilidad Social y RR.CC.</h5>
              <p className="m-0"><span>Publicación: </span> 01 de Nov. 2021</p>
              <p className="m-0"><span>Tipo: </span> PDF</p>
              <p className="m-0"><span>Peso: </span> 344 KB</p>
              <Button variant="blue1" size="sm" className="download-btn text-white mt-3 w-md-50 mx-auto position-md-absolute start-50 translate-middle-md" href="/politicas/Politica_responsabilidad_social_y_rrcc101221.pdf" target="_blank" style={{ zIndex: 2 }}>
                Descargar
              </Button>
            </div>
          </Col>
          <Col className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-xl-center">
            <PdfViewer url="/politicas/Politica_trabajo_forzoso_131221.pdf" pageNumber={1} />
            <div className="d-flex flex-column pt-3 text-center text-md-start h-100 position-relative" style={{ flex: 1 }}>
              <h5>Política Contra el Trabajo Forzoso</h5>
              <p className="m-0"><span>Publicación: </span> 01 de Nov. 2021</p>
              <p className="m-0"><span>Tipo: </span> PDF</p>
              <p className="m-0"><span>Peso: </span> 269 KB</p>
              <Button variant="blue1" size="sm" className="download-btn text-white mt-3 w-md-50 mx-auto position-md-absolute start-50 translate-middle-md" href="/politicas/Politica_trabajo_forzoso_131221.pdf" target="_blank" style={{ zIndex: 2 }}>
                Descargar
              </Button>
            </div>
          </Col>
          <Col className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-xl-center">
            <PdfViewer url="/politicas/Politica_trabajo_infantil_081221.pdf" pageNumber={1} />
            <div className="d-flex flex-column pt-3 text-center text-md-start h-100 position-relative" style={{ flex: 1 }}>
              <h5>Política Contra el Trabajo Infantil</h5>
              <p className="m-0"><span>Publicación: </span> 01 de Nov. 2021</p>
              <p className="m-0"><span>Tipo: </span> PDF</p>
              <p className="m-0"><span>Peso: </span> 270 KB</p>
              <Button variant="blue1" size="sm" className="download-btn text-white mt-3 w-md-50 mx-auto position-md-absolute start-50 translate-middle-md" href="/politicas/Politica_trabajo_infantil_081221.pdf" target="_blank" style={{ zIndex: 2 }}>
                Descargar
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Politicas;
