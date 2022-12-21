import React, { useState, useEffect } from 'react'

import { Container, Row, Col, Carousel, Image, Card, CardGroup } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import Loader from '../../elements/Loader/Loader'

import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Nosotros = () => {

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
      <div className="nosotrosPage">

        <section className="hero-section">
          <Carousel controls={width >= 1280 ? true : false} interval={null} className="h-100">
            <Carousel.Item className="h-100">
              <Image
                className="hero-image hero-image--center"
                src="/images/nosotros1.jpg"
                alt="Charla de seguridad"
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
                />
              </div>
            </Carousel.Item>
            <Carousel.Item className="h-100">
              <Image
                className="hero-image hero-image--center"
                src="/images/nosotros2.jpg"
                alt="Equipo de laboratorio químico"
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

        <section className="nuestra-historia p-3 p-xl-11 p-xxxxl-15">
          <h1 className="mb-3 mb-custom1-5 futuraBold fw-bold">QUIENES SOMOS</h1>
          <Container fluid className="g-0">
            <Row className="flex-column flex-xl-row" style={{ rowGap: 2 + 'rem' }}>
              <Col className="d-flex justify-content-center">
                <Carousel controls={false}>
                  <Carousel.Item>
                    <Image
                      className="nuestraHistoria-image"
                      src="/images/tanque1.jpg"
                      alt="2 tanques"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className="nuestraHistoria-image"
                      src="/images/tanque2.jpg"
                      alt="3 tanques"
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col>
                <h2 className="mb-3 text-black">{t('us_our_history_title', { ns: 'general' })}</h2>
                <p className="m-0 text-justify--mobile">
                  {t('us_our_history_text_p1', { ns: 'general' })}
                  <br />
                  <br />
                  {t('us_our_history_text_p2', { ns: 'general' })}
                  <br />
                  <br />
                  {t('us_our_history_text_p3', { ns: 'general' })}
                  <br />
                  <br />
                  {t('us_our_history_text_p4', { ns: 'general' })}

                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <Container fluid className="p-3 py-xl-5 px-xl-11 px-xxxxl-15">
          <div id="vision-section" className="w-100" style={{ height: "100px" }}></div>
          <section className="vision-section mb-4">
            <Container fluid="xxl" className="bg-blue2 bg-opacity-10 g-0">
              <Row className="g-0" xs={1} md={2}>
                <Col>
                  <div className="bg-blue3 d-flex align-items-center justify-content-center">
                    <h2 className="fw-bolder m-0 text-blue2">{t('us_vision_title', { ns: 'general' })}</h2>
                  </div>
                  <p className="m-0 p-4 fs-xxl-5">
                    {t('us_vision_text', { ns: 'general' })}
                  </p>
                </Col>
                <Col>
                  <Image
                    src="/images/vision-col.jpg"
                    alt="Imagen visión"
                    className="nosotros-img"
                  />
                </Col>
              </Row>
            </Container>
          </section>
          <div id="mision-section" className="w-100" style={{ height: "100px" }}></div>
          <section className="mision-section mb-4">
            <Container fluid="xxl" className="bg-yellow2 bg-opacity-10 g-0">
              <Row className="g-0" xs={1} md={2}>
                <Col>
                  <div className="bg-yellow3 d-flex align-items-center justify-content-center">
                    <h2 className="fw-bolder m-0 text-yellow2">{t('us_mission_title', { ns: 'general' })}</h2>
                  </div>
                  <p className="m-0 p-4 fs-xxl-5">
                    {t('us_mission_text', { ns: 'general' })}
                  </p>
                </Col>
                <Col>

                  <Image
                    src="/images/mision-col.jpg"
                    alt="Imagen visión"
                    className="nosotros-img"
                  />
                </Col>
              </Row>
            </Container>
          </section>
          <div id="valores-section" className="w-100" style={{ height: "100px" }}></div>
          <section className="valores-section mb-4">
            <Container fluid="xxl" className="bg-white g-0">
              <Row className="g-0" xs={1} md={2}>
                <Col>
                  <div className="bg-white d-flex align-items-center justify-content-center">
                    <h2 className="fw-bolder m-0">{t('us_values_title', { ns: 'general' })}</h2>
                  </div>

                  <p className="m-0 p-4 fs-xxl-5">
                    {t('us_values_text', { ns: 'general' })}
                  </p>
                </Col>
                <Col>
                  <Image
                    src="/images/valores.jpg"
                    alt="Imagen visión"
                    className="nosotros-img"
                  />
                </Col>
              </Row>
            </Container>
          </section>

        </Container>

      </div>
    </>
  )
}

export default Nosotros