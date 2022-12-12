import React, { useEffect } from 'react'

import dynamic from 'next/dynamic';

import { Container, Row, Col, Carousel, Image, Button } from 'react-bootstrap'
import { useTranslation } from "next-i18next";
import useWindowDimensions from "../../../hooks/useWindowDimensions";


const PdfViewer = dynamic(
  () => import('../../modules/pdfViewer'),
  { ssr: false }
);

const Politicas = () => {

  const { height, width } = useWindowDimensions();
  
  const { t } = useTranslation();

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
              <span className="d-block bg-yellow2 bg-opacity-60 fw-normal px-4 mb-2">{t('hero_text1', { ns: 'general' })}</span>
              <span className="d-inline-block bg-basic1 bg-opacity-40 fw-600 px-4 mb-2">{t('hero_text2', { ns: 'general' })}</span> <br />
              <span className="d-inline-block fw-bolder bg-blue2 bg-opacity-60 px-4">{t('hero_text3', { ns: 'general' })}</span>
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
              <span className="d-block bg-yellow2 bg-opacity-60 fw-normal px-4 mb-2">{t('hero_text4', { ns: 'general' })}</span>
              <span className="d-inline-block bg-basic1 bg-opacity-40 fw-600 px-4 mb-2">{t('hero_text5', { ns: 'general' })}</span> <br />
              <span className="d-inline-block fw-bolder bg-blue2 bg-opacity-60 px-4">{t('hero_text6', { ns: 'general' })}</span>
            </h1>
            <div className="hero-illustration">
              <Image
                src="/images/hero-illustration.svg"
                alt='hero-illustration'
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
              <span className="d-block bg-yellow2 bg-opacity-60 fw-normal px-4 mb-2">{t('hero_text4', { ns: 'general' })}</span>
              <span className="d-inline-block bg-basic1 bg-opacity-40 fw-600 px-4 mb-2">{t('hero_text5', { ns: 'general' })}</span> <br />
              <span className="d-inline-block fw-bolder bg-blue2 bg-opacity-60 px-4">{t('hero_text6', { ns: 'general' })}</span>
            </h1>
            <div className="hero-illustration">
              <Image
                src="/images/hero-illustration.svg"
                alt='hero-illustration'
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
              <h5>{t('politicas_ssoma_title', { ns: 'general' })}</h5>
              <p className="m-0"><span>{t('politicas_fechaPub', { ns: 'general' })}: </span> 01 de Nov. 2021</p>
              <p className="m-0"><span>{t('politicas_tipo', { ns: 'general' })}: </span> PDF</p>
              <p className="m-0"><span>{t('politicas_peso', { ns: 'general' })}: </span> 437 KB</p>
              <Button variant="blue1" size="sm" className="download-btn text-white mt-3 w-md-50 mx-auto position-md-absolute start-50 translate-middle-md" href="/politicas/Politica_de_Seguridad_Salud_y_MA16.12.21.pdf" target="_blank" style={{ zIndex: 2 }}>
                {t('politicas_descargar', { ns: 'general' })}
              </Button>
            </div>
          </Col>
          <Col className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-xl-center">
            <PdfViewer url="/politicas/Politica_derechos_humanos_081221.pdf" pageNumber={1} />
            <div className="d-flex flex-column pt-3 text-center text-md-start h-100 position-relative" style={{ flex: 1 }}>
              <h5>{t('politicas_dh_title', { ns: 'general' })}</h5>
              <p className="m-0"><span>{t('politicas_fechaPub', { ns: 'general' })}: </span> 01 de Nov. 2021</p>
              <p className="m-0"><span>{t('politicas_tipo', { ns: 'general' })}: </span> PDF</p>
              <p className="m-0"><span>{t('politicas_peso', { ns: 'general' })}: </span> 352 KB</p>
              <Button variant="blue1" size="sm" className="download-btn text-white mt-3 w-md-50 mx-auto position-md-absolute start-50 translate-middle-md" href="/politicas/Politica_derechos_humanos_081221.pdf" target="_blank" style={{ zIndex: 2 }}>
                {t('politicas_descargar', { ns: 'general' })}
              </Button>
            </div>

          </Col>
          <Col className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-xl-center">
            <PdfViewer url="/politicas/Politica_inclusion_e_igualdad_laboral_13-12-2021.pdf" pageNumber={1} />
            <div className="d-flex flex-column pt-3 text-center text-md-start h-100 position-relative" style={{ flex: 1 }}>
              <h5>{t('politicas_inclusion_title', { ns: 'general' })}</h5>
              <p className="m-0"><span>{t('politicas_fechaPub', { ns: 'general' })}: </span> 01 de Nov. 2021</p>
              <p className="m-0"><span>{t('politicas_tipo', { ns: 'general' })}: </span> PDF</p>
              <p className="m-0"><span>{t('politicas_peso', { ns: 'general' })}: </span> 279 KB</p>
              <Button variant="blue1" size="sm" className="download-btn text-white mt-3 w-md-50 mx-auto position-md-absolute start-50 translate-middle-md" href="/politicas/Politica_inclusion_e_igualdad_laboral_13-12-2021.pdf" target="_blank" style={{ zIndex: 2 }}>
                {t('politicas_descargar', { ns: 'general' })}
              </Button>
            </div>
          </Col>
          <Col className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-xl-center">
            <PdfViewer url="/politicas/Politica_responsabilidad_social_y_rrcc101221.pdf" pageNumber={1} />
            <div className="d-flex flex-column pt-3 text-center text-md-start h-100 position-relative" style={{ flex: 1 }}>
              <h5>{t('politicas_RSyRC_title', { ns: 'general' })}</h5>
              <p className="m-0"><span>{t('politicas_fechaPub', { ns: 'general' })}: </span> 01 de Nov. 2021</p>
              <p className="m-0"><span>{t('politicas_tipo', { ns: 'general' })}: </span> PDF</p>
              <p className="m-0"><span>{t('politicas_peso', { ns: 'general' })}: </span> 344 KB</p>
              <Button variant="blue1" size="sm" className="download-btn text-white mt-3 w-md-50 mx-auto position-md-absolute start-50 translate-middle-md" href="/politicas/Politica_responsabilidad_social_y_rrcc101221.pdf" target="_blank" style={{ zIndex: 2 }}>
                {t('politicas_descargar', { ns: 'general' })}
              </Button>
            </div>
          </Col>
          <Col className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-xl-center">
            <PdfViewer url="/politicas/Politica_trabajo_forzoso_131221.pdf" pageNumber={1} />
            <div className="d-flex flex-column pt-3 text-center text-md-start h-100 position-relative" style={{ flex: 1 }}>
              <h5>{t('politicas_trabajoForzoso_title', { ns: 'general' })}</h5>
              <p className="m-0"><span>{t('politicas_fechaPub', { ns: 'general' })}: </span> 01 de Nov. 2021</p>
              <p className="m-0"><span>{t('politicas_tipo', { ns: 'general' })}: </span> PDF</p>
              <p className="m-0"><span>{t('politicas_peso', { ns: 'general' })}: </span> 269 KB</p>
              <Button variant="blue1" size="sm" className="download-btn text-white mt-3 w-md-50 mx-auto position-md-absolute start-50 translate-middle-md" href="/politicas/Politica_trabajo_forzoso_131221.pdf" target="_blank" style={{ zIndex: 2 }}>
                {t('politicas_descargar', { ns: 'general' })}
              </Button>
            </div>
          </Col>
          <Col className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-xl-center">
            <PdfViewer url="/politicas/Politica_trabajo_infantil_081221.pdf" pageNumber={1} />
            <div className="d-flex flex-column pt-3 text-center text-md-start h-100 position-relative" style={{ flex: 1 }}>
              <h5>{t('politicas_contraTrabajoInfantil_title', { ns: 'general' })}</h5>
              <p className="m-0"><span>{t('politicas_fechaPub', { ns: 'general' })}: </span> 01 de Nov. 2021</p>
              <p className="m-0"><span>{t('politicas_tipoe', { ns: 'general' })}: </span> PDF</p>
              <p className="m-0"><span>{t('politicas_peso', { ns: 'general' })}: </span> 270 KB</p>
              <Button variant="blue1" size="sm" className="download-btn text-white mt-3 w-md-50 mx-auto position-md-absolute start-50 translate-middle-md" href="/politicas/Politica_trabajo_infantil_081221.pdf" target="_blank" style={{ zIndex: 2 }}>
                {t('politicas_descargar', { ns: 'general' })}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Politicas