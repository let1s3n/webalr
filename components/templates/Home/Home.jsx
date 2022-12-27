import React, { useState, useEffect } from 'react'

import i18n from "i18next";
import { useTranslation } from "react-i18next";

import Link from 'next/link'
import { Container, Carousel, Row, Col, CardGroup, Card, Image, Button } from 'react-bootstrap'

import Loader from '../../elements/Loader/Loader'

import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Home = ({ locale }) => {

  const { height, width } = useWindowDimensions();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let transControl = t('transControl', { ns: 'general', returnObjects: true })

    console.log("transControl: ", transControl)

    if (typeof transControl !== 'string' && !(transControl instanceof String)) {
      setLoading(false);
    }

  }, [t])


  return (
    <>
      <Loader loading={loading} />
      <>
        <section className="hero-section">

          {/* <div className="h-100"> */}

          <div className="h-100">

            {/* <Image
              className="hero-image"
              src="/images/hero.jpg"
              alt="Foto de la planta de día"
            /> */}

            <video autoPlay={true} muted={true} loop={true} className="hero-video">
              <source src={`${process.env.BUCKET}video/video_home.mp4`} type="video/mp4" />
              <p> Your browser does not support the video tag.</p>
            </video>

            <h1 className="hero-text position-absolute text-white w-100">
              <span className="d-block fw-bolder mb-2">{t('hero_text1', { ns: 'general' })}</span>
              <span className="d-inline-block fw-bolder mb-2">{t('hero_text2', { ns: 'general' })}</span> {" "}
              <span className="d-inline-block fw-bolder text-secondary">{t('hero_text3', { ns: 'general' })}</span>
            </h1>
          </div>

          {/* </div> */}

          <div className="hero-box-text position-absolute w-100 d-none d-lg-flex justify-content-center">
            <div className="text-white bg-primary rounded">
              <p className='mb-0'>
                <span className="lh-sm">{t('hero_text4', { ns: 'general' })}</span>{" "}
                <span className="lh-sm text-secondary fw-bold">{t('hero_text5', { ns: 'general' })}</span>{" "}
                <span className="lh-sm">{t('hero_text6', { ns: 'general' })}</span>
              </p>
              <span className="lh-sm">{t('hero_text7', { ns: 'general' })}</span>

            </div>
          </div>

        </section>

        <section className="quienes-somos pt-6 pt-custom1-9">
          <Container fluid="md">
            <h3 className="fw-bold text-primary mb-3 mb-custom1-5 text-center fs-5 fs-lg-4 fs-xl-3">{t('who_we_are', { ns: 'general' })}</h3>


          </Container>

          <Container fluid className="g-0 my-3 my-custom1-7 text-center">
            <div className='d-flex justify-content-center gap-2 gap-lg-3 division-title' style={{ padding: 32 + 'px', borderRadius: '0px 20px 20px 0px' }}>

              <p className="m-0 fw-bolder text-primary fs-5 fs-custom1-2">{t('our', { ns: 'general' })} <span className="text-secondary">{t('our_mission_vision_values_title', { ns: 'general' })}</span></p>

              {/* <h2 className="text-primary m-0 fw-bolder">{t('our', { ns: 'general' })}</h2>
              <h2 className="m-0 fw-bolder text-secondary">{t('our_mission_vision_values_title', { ns: 'general' })}</h2> */}
            </div>
          </Container>
          <div className="py-custom1-4 px-xl-4">

            <CardGroup className="justify-content-xl-center align-items-center flex-column flex-xl-row">

              <Card className="text-white mx-auto mx-sm-0">

                <Card.Img src="/images/mision.jpg" alt="Misión de ALR" />

                <Card.ImgOverlay className="d-flex align-items-center justify-content-center">

                  <Card.Title>
                    <Link href="/nosotros#estamentosContainer">

                      <Row style={{ cursor: "pointer" }}>
                        <Col xs="auto">
                          <h2 className="m-0 text-white">{t('our_mission', { ns: 'general' })}</h2>
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
                    <Link href="/nosotros#estamentosContainer">

                      <Row style={{ cursor: "pointer" }}>
                        <Col xs="auto">
                          <h2 className="m-0 text-white">{t('our_vision', { ns: 'general' })}</h2>
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
                    <Link href="/nosotros#estamentosContainer">

                      <Row style={{ cursor: "pointer" }}>
                        <Col xs="auto">
                          <h2 className="m-0 text-white">{t('our_values', { ns: 'general' })}</h2>
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
          <Container fluid className="g-0 mb-3 mb-custom1-7 d-flex justify-content-center pt-custom1-5">
            <div className="d-flex gap-3 justify-content-center division-title" style={{ padding: 32 + 'px', borderRadius: '20px 0px 0px 20px' }}>

              <p className="m-0 fw-bolder text-primary fs-5 fs-custom1-2">{t('news', { ns: 'general' })} <span className="text-secondary">{t('featured', { ns: 'general' })}</span></p>
              {/* <h2 className="m-0 fw-bolder text-primary">{t('news', { ns: 'general' })}</h2>
              <h2 className="m-0 fw-bolder text-secondary">{t('featured', { ns: 'general' })}</h2> */}
            </div>
          </Container>
          <div className='bg-primary w-100 px-3 px-lg-10 py-4'>
            <div className="my-md-10 my-xxl-8" >
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
                        {t('visit_CSM_title', { ns: 'general' })}
                      </h2>
                      <p className="text-justify--mobile text-white m-0">
                        {t('visit_CSM_text', { ns: 'general' })}
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
                        {t('objetivos_2022_title', { ns: 'general' })}
                      </h2>
                      <p className="text-justify--mobile text-white m-0">
                        {t('objetivos_2022_text', { ns: 'general' })}
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
                        {t('aumento_capacidad_title', { ns: 'general' })}
                      </h2>
                      <p className="text-justify--mobile text-white m-0">
                        {t('aumento_capacidad_text', { ns: 'general' })}
                      </p>
                    </Col>
                  </Row>
                </Carousel.Item>

              </Carousel>
            </div>
          </div>
        </section>

        <section className='mb-5'>
          <Container fluid>
            <Row style={{ background: "#f5f5f5", height: "250px" }}>
              <Col lg={6} className="border-end border-white d-flex justify-content-center align-items-center text-center">
                <div className='home__links-section'>
                  <p className='item-text'>Conoce nuestras Políticas</p>
                  <div className='item-button'>
                    <Link href="/politicas">
                      <p className='mb-0'>{t('buttons.policies', { ns: 'general' })}</p>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={6} className="border-end border-white d-flex justify-content-center align-items-center text-center">
                <div className='home__links-section'>
                  <p className='item-text'>Revisa las notas de prensa</p>
                  <div className='item-button'>
                    <Link href="/prensa">
                      <p className='mb-0'>{t('buttons.press_note', { ns: 'general' })}</p>
                    </Link>
                  </div>
                </div>
              </Col>

            </Row>
          </Container>
        </section>

        <section className='home__contact-us position-relative'>
          <div>
            <Image
              className="image-cover"
              src="/images/home-cover1.jpg"
              alt="Charla de seguridad"
            />
          </div>
          <div className='button-contact position-absolute top-50 start-50 translate-middle'>
            <Link href="/contacto">
              <p className='mb-0'>{t('buttons.contact_us', { ns: 'general' })}</p>
            </Link>
          </div>

        </section>
      </>
    </>

  )
}

export default Home