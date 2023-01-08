import React, { useState, useEffect } from 'react'

import { Container, Row, Col, Carousel, Image, Card, CardGroup, Button, Breadcrumb } from 'react-bootstrap'
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

        <section className="">
          <Carousel controls={width >= 1280 ? true : false} interval={6000} className="h-100 nostros-carousel">
            <Carousel.Item className="hero-container">
              <Image
                className="hero-image"
                src={`${process.env.NEXT_CDN}images/nosotros1.jpg`}
                alt="Charla de seguridad"
              />
            </Carousel.Item>
            <Carousel.Item className="hero-container">
              <Image
                className="hero-image"
                src={`${process.env.NEXT_CDN}images/nosotros2.jpg`}
                alt="Equipo de laboratorio químico"
              />
            </Carousel.Item>
          </Carousel>
        </section>

        <section className="nuestra-historia p-3 p-xl-9 p-xxxxl-15">

          <div className="mb-5 mt-5 mt-xl-0 mb-custom1-8 d-flex flex-column align-items-center">
            <h1 className="text-center text-primary">
              {t('dictionary.weAre1', { ns: 'general' })} <span className='text-secondary'>{t('dictionary.weAre2', { ns: 'general' })}</span>
            </h1>
            <Breadcrumb>
              <Breadcrumb.Item href="/">{t('sections.home', { ns: 'general' })}</Breadcrumb.Item>
              <Breadcrumb.Item href="/nosotros" active>{t('sections.about_alr', { ns: 'general' })}</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <Container fluid className="g-0">
            <Row className="flex-column flex-xl-row" style={{ rowGap: 2 + 'rem' }}>
              <Col className="d-flex justify-content-center">
                <Carousel controls={false}>
                  <Carousel.Item>
                    <Image
                      className="nuestraHistoria-image"
                      src={`${process.env.NEXT_CDN}images/tanque1.jpg`}
                      alt="2 tanques"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className="nuestraHistoria-image"
                      src={`${process.env.NEXT_CDN}images/tanque2.jpg`}
                      alt="3 tanques"
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col>
                <h2 className="mb-5 text-secondary  pt-5">{t('us_our_history_title', { ns: 'general' })}</h2>
                <p className="m-0 text-justify--mobile text-primary">
                  <strong>{t('us_our_history_text_p1', { ns: 'general' })}</strong>
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

        <section>
          <Row className="g-0">
            <div className='mb-3 mt-5 mt-lg-0'>
              <h3 className=' text-center  mx-5'>{t('dictionary.philosophy', { ns: 'general' })}</h3>
            </div>
          </Row>
          <div id="estamentosContainer" className="estamentosContainer"></div>
          <Row className='mb-7 mt-5 px-4 g-0'>
            <Col xs={12} lg={4}>
              <div className='position-relative mb-4 mb-xl-0 mx-1'>
                <Image
                  src={`${process.env.NEXT_CDN}images/vision-col.jpg`}
                  alt="Imagen visión"
                  className="nosotros-img"
                />
                <div className='bg-secondary py-5 py-xl-7 position-absolute bg-opacity-80 nosotros-img me-1' style={{ top: 0 }}>
                  <div className="d-flex align-items-center justify-content-center">
                    <h2 className=" mb-3 text-white">{t('us_vision_title', { ns: 'general' })}</h2>
                  </div>
                  <p className="m-0 px-4 p-xl-4 fs-xxl-5 px-xl-5  text-primary text-center">
                    {t('us_vision_text', { ns: 'general' })}
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <div className='position-relative mb-4 mb-xl-0 mx-1'>
                <Image
                  src={`${process.env.NEXT_CDN}images/mision-col.jpg`}
                  alt="Imagen visión"
                  className="nosotros-img"
                />
                <div className='bg-secondary py-5 py-xl-7 position-absolute bg-opacity-80 nosotros-img me-1' style={{ top: 0 }}>
                  <div className="d-flex align-items-center justify-content-center">
                    <h2 className=" mb-3 text-white">{t('us_mission_title', { ns: 'general' })}</h2>
                  </div>
                  <p className="m-0 px-4 p-xl-4 fs-xxl-5 px-xl-5  text-primary text-center">
                    {t('us_mission_text', { ns: 'general' })}
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <div className='position-relative mx-1'>
                <Image
                  src={`${process.env.NEXT_CDN}images/valores.jpg`}
                  alt="Imagen visión"
                  className="nosotros-img"
                />
                <div className='bg-secondary py-5 py-xl-7 position-absolute bg-opacity-80 nosotros-img me-1' style={{ top: 0 }}>
                  <div className="d-flex align-items-center justify-content-center">
                    <h2 className=" mb-3 text-white">{t('us_values_title', { ns: 'general' })}</h2>
                  </div>
                  <p className="m-0 px-4 p-xl-4 fs-xxl-5 px-xl-5  text-primary text-center">
                    {t('us_values_text', { ns: 'general' })}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <section className='mb-7'>
          <div className='bg-primary'>
            <Row className='px-3 px-xl-10 nosotrosPage__lemme-container g-0'>
              <Col xs={12} lg={6}>
                <div className='my-5 my-lg-0 py-4 py-xl-5 px-4 px-xl-5 d-flex align-items-center justify-content-center nosotrosPage__lemme-box' style={{ background: "#ffffff" }}>
                  <h4 className='lh-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing. <br />
                    numquam optio itaque repellat consequatur, <br />
                    aliquid eligendi unde saepe, <br />
                    <span className='text-secondary'>dolorum labore aspernatur!</span>
                  </h4>
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <div className='pt-0 pt-lg-13 text-center'>
                  <h2 className='text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                  <div className='pt-7'>
                    <Button className='px-5'>{t('dictionary.buttonPolicies', { ns: 'general' })}</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className='bg-secondary nosotrosPage__lemme-decoration'></div>
        </section>
      </div>
    </>
  )
}

export default Nosotros