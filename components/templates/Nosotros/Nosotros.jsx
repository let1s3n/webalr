import React, { useState, useEffect } from 'react'

import { Container, Row, Col, Carousel, Image, Card, CardGroup } from 'react-bootstrap'
import { useTranslation } from "next-i18next";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Nosotros = () => {

  const { height, width } = useWindowDimensions();
  
  const { t } = useTranslation();


  return (
    <div className="nosotros-page">
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
      <section className="nuestra-historia py-11">
        <Container fluid="md">
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
      <Container fluid className="p-3 p-xl-5">

        <section id="vision-section" className="vision-section mb-4">
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
        <section id="mision-section" className="mision-section mb-4">
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
        <section id="valores-section" className="valores-section mb-4">
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
      <section className="perfiles d-flex flex-column justify-content-center align-items-center py-md-3">
        <div className="mb-5 align-self-start ps-2 ps-xxl-5">
          <h2 className="text-black">Dirección</h2>
        </div>
        <Container fluid>
          <CardGroup className="justify-content-xl-between justify-content-xxl-center align-items-center flex-column flex-xl-row" style={{ rowGap: 2 + 'rem' }}>
            <Card className="text-white mx-auto mx-sm-0 border-0">
              <Card.Img src="/images/Jose_Carneiro.jpg" alt="Gerente General" />
              <Card.ImgOverlay className="d-none d-xl-flex flex-column align-items-center pt-6">
                {/* <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('jose_carneiro_title1', { ns: 'general' })}
                    <span className="fs-4">{t('jose_carneiro_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4">
                  {t('jose_carneiro_text', { ns: 'general' })}
                </Card.Text>
              </Card.ImgOverlay>
              <Card.Body className="d-xl-none text-black">
                {/* <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('jose_carneiro_title1', { ns: 'general' })}
                    <span className="fs-4">{t('jose_carneiro_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4 text-justify--mobile">
                  {t('jose_carneiro_text', { ns: 'general' })}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-white mx-auto mx-sm-0 border-0">
              <Card.Img src="/images/Jhon_Quispe.jpg" alt="Jefe de Operaciones y Comercialización" />
              <Card.ImgOverlay className="d-none d-xl-flex flex-column align-items-center pt-6">
                {/* <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('jhon_quispe_title1', { ns: 'general' })}
                    <span className="fs-4">{t('jhon_quispe_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4">
                  {t('jhon_quispe_text', { ns: 'general' })}
                </Card.Text>

              </Card.ImgOverlay>
              <Card.Body className="d-xl-none text-black">
                {/* <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('jhon_quispe_title1', { ns: 'general' })}
                    <span className="fs-4"> {t('jhon_quispe_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4 text-justify--mobile">
                  {t('jhon_quispe_text', { ns: 'general' })}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-white mx-auto mx-sm-0 border-0">
              <Card.Img src="/images/Hector_Gomez.jpg" alt="Gerente Legal y de Finanzas" />
              <Card.ImgOverlay className="d-none d-xl-flex flex-column align-items-center pt-6">
                {/* <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('hector_gomez_title1', { ns: 'general' })}
                    <span className="fs-4"> {t('hector_gomez_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4">
                  {t('hector_gomez_text', { ns: 'general' })}
                </Card.Text>

              </Card.ImgOverlay>
              <Card.Body className="d-xl-none text-black">
                {/* <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('hector_gomez_title1', { ns: 'general' })}
                    <span className="fs-4"> {t('hector_gomez_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4 text-justify--mobile">
                  {t('hector_gomez_text', { ns: 'general' })}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-white mx-auto mx-sm-0 border-0">
              <Card.Img src="/images/Andre_Carneiro.jpg" alt="Jefe de Control" />
              <Card.ImgOverlay className="d-none d-xl-flex flex-column align-items-center pt-6">
                {/* <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('andre_carneiro_title1', { ns: 'general' })}
                    <span className="fs-4">{t('andre_carneiro_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4">
                  {t('andre_carneiro_text', { ns: 'general' })}
                </Card.Text>

              </Card.ImgOverlay>
              <Card.Body className="d-xl-none text-black">
               {/*  <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('andre_carneiro_title1', { ns: 'general' })}
                    <span className="fs-4"> {t('andre_carneiro_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4 text-justify--mobile">
                  {t('andre_carneiro_text', { ns: 'general' })}
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="text-white mx-auto mx-sm-0 border-0">
              <Card.Img src="/images/Darwin_Delgado.jpg" alt="Jefe de Control" />
              <Card.ImgOverlay className="d-none d-xl-flex flex-column align-items-center pt-6">
                {/* <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('darwin_delgado_title1', { ns: 'general' })}
                    <span className="fs-4">{t('darwin_delgado_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4">
                  {t('darwin_delgado_text', { ns: 'general' })}
                </Card.Text>

              </Card.ImgOverlay>
              <Card.Body className="d-xl-none text-black">
                {/* <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('darwin_delgado_title1', { ns: 'general' })}
                    <span className="fs-4"> {t('darwin_delgado_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4 text-justify--mobile">
                  {t('darwin_delgado_text', { ns: 'general' })}
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="text-white mx-auto mx-sm-0 border-0">
              <Card.Img src="/images/Rolando_Algarate.jpg" alt="Jefe de Control" />
              <Card.ImgOverlay className="d-none d-xl-flex flex-column align-items-center pt-6">
                {/* <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('rolando_algarate_title1', { ns: 'general' })}
                    <span className="fs-4">{t('rolando_algarate_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4">
                  {t('rolando_algarate_text', { ns: 'general' })}
                </Card.Text>

              </Card.ImgOverlay>
              <Card.Body className="d-xl-none text-black">
                {/* <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('rolando_algarate_title1', { ns: 'general' })}
                    <span className="fs-4"> {t('rolando_algarate_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4 text-justify--mobile">
                  {t('rolando_algarate_text', { ns: 'general' })}
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="text-white mx-auto mx-sm-0 border-0">
              <Card.Img src="/images/William_Medrano.jpg" alt="Jefe de Control" />
              <Card.ImgOverlay className="d-none d-xl-flex flex-column align-items-center pt-6">
                {/* <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('william_medrano_title1', { ns: 'general' })}
                    <span className="fs-4">{t('william_medrano_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4">
                  {t('william_medrano_text', { ns: 'general' })}
                </Card.Text>

              </Card.ImgOverlay>
              <Card.Body className="d-xl-none text-black">
               {/*  <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('william_medrano_title1', { ns: 'general' })}
                    <span className="fs-4"> {t('william_medrano_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4 text-justify--mobile">
                  {t('william_medrano_text', { ns: 'general' })}
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="text-white mx-auto mx-sm-0 border-0">
              <Card.Img src="/images/Oliver_Huaman.jpg" alt="Jefe de Permisos y Relaciones Comunitarias" />
              <Card.ImgOverlay className="d-none d-xl-flex flex-column align-items-center pt-6">
                {/* <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('oliver_huaman_title1', { ns: 'general' })}
                    <span className="fs-4">{t('oliver_huaman_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4">
                  {t('oliver_huaman_text', { ns: 'general' })}
                </Card.Text>

              </Card.ImgOverlay>
              <Card.Body className="d-xl-none text-black">
               {/*  <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('oliver_huaman_title1', { ns: 'general' })}
                    <span className="fs-4"> {t('oliver_huaman_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4 text-justify--mobile">
                  {t('oliver_huaman_text', { ns: 'general' })}
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="text-white mx-auto mx-sm-0 border-0">
              <Card.Img src="/images/Rafael_Farfan.jpg" alt="Jefe de Control" />
              <Card.ImgOverlay className="d-none d-xl-flex flex-column align-items-center pt-6">
               {/*  <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('rafael_farfan_title1', { ns: 'general' })}
                    <span className="fs-4">{t('rafael_farfan_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4">
                  {t('rafael_farfan_text', { ns: 'general' })}
                </Card.Text>

              </Card.ImgOverlay>
              <Card.Body className="d-xl-none text-black">
               {/*  <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('rafael_farfan_title1', { ns: 'general' })}
                    <span className="fs-4"> {t('rafael_farfan_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4 text-justify--mobile">
                  {t('rafael_farfan_text', { ns: 'general' })}
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </section>
    </div>
  )
}

export default Nosotros