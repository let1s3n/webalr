import React, { useState } from 'react'

import i18n from "i18next";
import { useTranslation } from "react-i18next";

import Link from 'next/link'
import { Container, Carousel, Row, Col, CardGroup, Card, Image } from 'react-bootstrap'

import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Home = ({ locale }) => {

  const { height, width } = useWindowDimensions();
  const { t } = useTranslation();

  return (

    <>
      <section className="hero-section">
        <div className="h-100">
          <div className="h-100">
            <Image
              className="hero-image"
              src="/images/hero.jpg"
              alt="Foto de la planta de día"
            />
            <h1 className="hero-text position-absolute text-white w-100">
              <span className="d-block fw-bolder mb-2">{t('hero_text1')}</span>
              <span className="d-inline-block fw-bolder mb-2">{t('hero_text2')}</span> {" "}
              <span className="d-inline-block fw-bolder text-secondary">{t('hero_text3')}</span>
              {/* <span className="d-inline-block fw-bolder px-4 text-secondary">{t('hero_text4')}</span> */}
            </h1>
          </div>

        </div>

        <div className="hero-box-text position-absolute w-100 d-none d-lg-flex justify-content-center">
          <div className="text-white bg-primary rounded">
            <p className='mb-0'>
              <span className="lh-sm">{t('hero_text4')}</span>{" "}
              <span className="lh-sm text-secondary fw-bold">{t('hero_text5')}</span>{" "}
              <span className="lh-sm">{t('hero_text6')}</span>
            </p>
            <span className="lh-sm">{t('hero_text7')}</span>
            {/* <span className="d-inline-block px-4">{t('hero_text6')}</span> */}
          </div>
        </div>
      </section>
      <section className="quienes-somos pt-9">
        <Container fluid="md">
          <h3 className="fw-bold text-primary mb-5 text-center fs-5 fs-lg-4 fs-xl-3">{t('who_we_are')}</h3>
          {/* Test multilenguaje */}
          {/* <h3>{t('welcome_to_react')}</h3> */}

        </Container>
        {/* <Container fluid className="bg-yellow2 bg-opacity-10 pt-5 pt-xl-11 px-5 px-xl-11 pb-5">
          <Row className="custom-row flex-column flex-sm-row">
            <Col>
              <h3 className="mb-5 fs-4 fs-xxl-3">
                <span className="text-blue2">{t('our_history1')}</span><span className="text-yellow2"> {t('our_history2')}</span>
              </h3>
              <p className="quienes-somos-text m-0 fs-6 fs-sm-5 fw-light lh-base">
                {t('who_we_are')}
              </p>
            </Col>
            <Col>
              <h3 className="mb-5 fs-4 fs-xxl-3">
                <span className="text-blue2">{t('peruvian_enterprise1')}</span><span className="text-yellow2"> {t('peruvian_enterprise2')}</span>
              </h3>
              <p className="quienes-somos-text m-0 fs-6 fs-sm-5 fw-light text-justify lh-base">
                {t('peruvian_enterprise3')}
              </p>
            </Col>
          </Row>

        </Container> */}
        <Container fluid className="g-0 mt-7 mb-7 text-center">
          <div className='d-flex justify-content-center gap-2 gap-lg-3 division-title' style={{ padding: 32 + 'px', borderRadius: '0px 20px 20px 0px' }}>
            <h2 className="text-primary m-0 fw-bolder">{t('our')}</h2>
            <h2 className="m-0 fw-bolder text-secondary">{t('our_mission_vision_values_title')}</h2>
          </div>
        </Container>
        <div className="py-4 px-xl-4">

          <CardGroup className="justify-content-xl-center align-items-center flex-column flex-xl-row">
            <Card className="text-white mx-auto mx-sm-0">
              <Card.Img src="/images/mision.jpg" alt="Misión de ALR" />
              <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                <Card.Title>
                  <Link href="/nosotros#mision-section">

                    <Row style={{ cursor: "pointer" }}>
                      <Col xs="auto">
                        <h2 className="m-0 text-white">{t('our_mission')}</h2>
                      </Col>
                      <Col xs="auto">
                        <Image
                          src="/images/arrow-right-white.svg"
                          className="arrow-right"
                          alt="arrow right"
                        />
                      </Col>
                    </Row>

                  </Link>
                </Card.Title>

              </Card.ImgOverlay>
            </Card>
            <Card className="text-white mx-auto mx-sm-0">
              <Card.Img src="/images/vision.jpg" alt="Visión de ALR" />
              <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                <Card.Title className="fs-2 m-0">
                  <Link href="/nosotros#vision-section">

                    <Row style={{ cursor: "pointer" }}>
                      <Col xs="auto">
                        <h2 className="m-0 text-white">{t('our_vision')}</h2>
                      </Col>
                      <Col xs="auto">
                        <Image
                          src="/images/arrow-right-white.svg"
                          className="arrow-right"
                          alt="arrow right white"
                        />
                      </Col>
                    </Row>

                  </Link>
                </Card.Title>

              </Card.ImgOverlay>
            </Card>
            <Card className="text-white mx-auto mx-sm-0">
              <Card.Img src="/images/valores.jpg" alt="Valores de ALR" />
              <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                <Card.Title className="fs-2 m-0">
                  <Link href="/nosotros#valores-section">

                    <Row style={{ cursor: "pointer" }}>
                      <Col xs="auto">
                        <h2 className="m-0 text-white">{t('our_values')}</h2>
                      </Col>
                      <Col xs="auto">
                        <Image
                          src="/images/arrow-right-white.svg"
                          className="arrow-right"
                          alt="arrow right white"
                        />
                      </Col>
                    </Row>

                  </Link>
                </Card.Title>

              </Card.ImgOverlay>
            </Card>
          </CardGroup>
        </div>
      </section>

      <section className="novedades mb-5">
        <Container fluid className="g-0 mb-7 d-flex justify-content-center pt-5">
          <div className="d-flex gap-3 justify-content-center division-title" style={{ padding: 32 + 'px', borderRadius: '20px 0px 0px 20px' }}>
            <h2 className="m-0 fw-bolder text-primary">{t('news')}</h2>
            <h2 className="m-0 fw-bolder text-secondary">{t('featured')}</h2>
          </div>
        </Container>
        <div className='bg-primary w-100 px-3 px-lg-10 py-4'>
          <div className="my-6 my-md-10 my-xxl-8" >
            <Carousel controls={width >= 1280 ? true : false} interval={7000} indicators={false}>

              <Carousel.Item className='px-lg-5 carousel-item-box' >
                <Row>
                  <Col xs={12} sm={6} md={8} lg={6} xxl={8}>
                    <Image
                      src="/images/CSM.jpg"
                      className="novedades-img"
                      alt="novedades img"
                    />
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={6} xxl={4} className="px-4">
                    <h2 className="m-0 mb-3 text-secondary">
                      {t('visit_CSM_title')}
                    </h2>
                    <p className="text-justify--mobile text-white m-0">
                      {t('visit_CSM_text')}
                    </p>
                  </Col>
                </Row>
              </Carousel.Item>

              <Carousel.Item className='px-lg-5 carousel-item-box' >
                <Row>
                  <Col xs={12} sm={6} md={8} lg={6} xxl={8}>
                    <Image
                      src="/images/planta-noticias.jpg"
                      className="novedades-img"
                      alt="novedades img"
                    />
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={6} xxl={4} className="px-4">
                    <h2 className="m-0 mb-3 text-secondary">
                      {t('objetivos_2022_title')}
                    </h2>
                    <p className="text-justify--mobile text-white m-0">
                      {t('objetivos_2022_text')}
                    </p>
                  </Col>
                </Row>
              </Carousel.Item>

              <Carousel.Item className='px-lg-5 carousel-item-box' >
                <Row>
                  <Col xs={12} sm={6} md={8} lg={6} xxl={8}>
                    <Image
                      src="/images/hero2.jpg"
                      className="novedades-img"
                      alt="novedades img"
                    />
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={6} xxl={4} className="px-4">
                    <h2 className="m-0 mb-3 text-secondary">
                      {t('aumento_capacidad_title')}
                    </h2>
                    <p className="text-justify--mobile text-white m-0">
                      {t('aumento_capacidad_text')}
                    </p>
                  </Col>
                </Row>
              </Carousel.Item>

            </Carousel>
          </div>
        </div>
      </section>
    </>

  )
}

export default Home