import React, { useState } from 'react'

/* import i18n from "i18next";
import { useTranslation } from "next-i18next"; */
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { Container, Carousel, Row, Col, CardGroup, Card, Image } from 'react-bootstrap'

import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Home = ({ locale }) => {

  const { height, width } = useWindowDimensions();
  /* const { t } = useTranslation(); */
  const { t } = useTranslation('general')

  return (

    <>
      <section className="hero-section">
        <Carousel controls={width >= 1280 ? true : false} interval={null} className="h-100">

          <Carousel.Item className="h-100">
            <Image
              className="hero-image"
              src="/images/hero.jpg"
              alt="Foto de la planta de día"
            />
            <h1 className="hero-text position-absolute text-white">
              <span className="d-block bg-yellow2 bg-opacity-60 fw-normal px-4 mb-2">{t('hero_text1')}</span>
              <span className="d-inline-block bg-basic1 bg-opacity-40 fw-600 px-4 mb-2">{t('hero_text2')}</span> <br />
              <span className="d-inline-block fw-bolder bg-blue2 bg-opacity-60 px-4">{t('hero_text3')}</span>
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
              src="/images/hero2.jpg"
              alt="Foto de la planta de noche"

            />
            <h1 className="hero-text position-absolute text-white">
              <span className="d-block bg-yellow2 bg-opacity-60 fw-normal px-4 mb-2">{t('hero_text4')}</span>
              <span className="d-inline-block bg-basic1 bg-opacity-40 fw-600 px-4 mb-2">{t('hero_text5')}</span> <br />
              <span className="d-inline-block fw-bolder bg-blue2 bg-opacity-60 px-4">{t('hero_text6')}</span>
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
      <section className="quienes-somos pt-6">
        <Container fluid="md">
          <h3 className="fw-bold text-blue1 mb-5 text-center">{t('who_we_are')}</h3>
          {/* Test multilenguaje */}
          {/* <h3>{t('welcome_to_react')}</h3> */}

        </Container>
        <Container fluid className="bg-yellow2 bg-opacity-10 pt-5 pt-xl-11 px-5 px-xl-11 pb-5">
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

        </Container>
        <Container fluid className="g-0 mt-5 bg-blue2 bg-opacity-10">
          <div className="w-75 w-xxl-50 bg-blue3" style={{ padding: 32 + 'px', borderRadius: '0px 20px 20px 0px' }}>
            <h2 className="text-blue2 m-0 fw-bolder">{t('our_mission_vision_values_title')}</h2>
          </div>
        </Container>
        <div className="py-4 px-xl-4">

          <CardGroup className="justify-content-xl-center align-items-center flex-column flex-xl-row">
            <Card className="text-white mx-auto mx-sm-0">
              <Card.Img src="/images/mision.jpg" alt="Misión de ALR" />
              <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                {/* <Card.Title>
                  <Link href="/nosotros#mision-section">

                    <Row>
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
                </Card.Title> */}

              </Card.ImgOverlay>
            </Card>
            <Card className="text-white mx-auto mx-sm-0">
              <Card.Img src="/images/vision.jpg" alt="Visión de ALR" />
              <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                {/* <Card.Title className="fs-2 m-0">
                  <Link href="/nosotros#vision-section">

                    <Row>
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
                </Card.Title> */}

              </Card.ImgOverlay>
            </Card>
            <Card className="text-white mx-auto mx-sm-0">
              <Card.Img src="/images/valores.jpg" alt="Valores de ALR" />
              <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                {/*  <Card.Title className="fs-2 m-0">
                  <Link href="/nosotros#valores-section">

                    <Row>
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
                </Card.Title> */}

              </Card.ImgOverlay>
            </Card>
          </CardGroup>
        </div>
      </section>

      <section className="novedades">
        <Container fluid className="g-0 mt-5 bg-yellow2 bg-opacity-10 d-flex flex-row-reverse">
          <div className="w-75 w-xxl-50 bg-yellow3" style={{ padding: 32 + 'px', borderRadius: '20px 0px 0px 20px' }}>
            <h2 className="text-yellow2 m-0 fw-bolder">{t('last_news')}</h2>
          </div>
        </Container>
        <Container className="my-6 my-md-10 my-xxl-17" fluid="xxl">
          <Carousel controls={width >= 1280 ? true : false} interval={null}>

            <Carousel.Item>
              <Row>
                <Col xs={12} sm={6} md={8} lg={6} xxl={8}>
                  <Image
                    src="/images/CSM.jpg"
                    className="novedades-img"
                    alt="novedades img"
                  />
                </Col>
                <Col xs={12} sm={6} md={4} lg={6} xxl={4}>
                  <h2 className="m-0 mb-3 text-yellow2">
                    {t('visit_CSM_title')}
                  </h2>
                  <p className="text-justify--mobile m-0">
                    {t('visit_CSM_text')}
                  </p>
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row>
                <Col xs={12} sm={6} md={8} lg={6} xxl={8}>
                  <Image
                    src="/images/planta-noticias.jpg"
                    className="novedades-img"
                    alt="novedades img"
                  />
                </Col>
                <Col xs={12} sm={6} md={4} lg={6} xxl={4}>
                  <h2 className="m-0 mb-3 text-yellow2">
                    {t('objetivos_2022_title')}
                  </h2>
                  <p className="text-justify--mobile m-0">
                    {t('objetivos_2022_text')}
                  </p>
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row>
                <Col xs={12} sm={6} md={8} lg={6} xxl={8}>
                  <Image
                    src="/images/hero2.jpg"
                    className="novedades-img"
                    alt="novedades img"
                  />
                </Col>
                <Col xs={12} sm={6} md={4} lg={6} xxl={4}>
                  <h2 className="m-0 mb-3 text-yellow2">
                    {t('aumento_capacidad_title')}
                  </h2>
                  <p className="text-justify--mobile m-0">
                    {t('aumento_capacidad_text')}
                  </p>
                </Col>
              </Row>
            </Carousel.Item>

          </Carousel>
        </Container>
      </section>
    </>

  )
}

export default Home