import React, { useState, useEffect } from 'react'
/* import Image from 'next/image' */
import { Container, Row, Col, Carousel,Image } from 'react-bootstrap'
import useWindowDimensions from "../hooks/useWindowDimensions";
const nosotros = () => {
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    console.log(width)
  }, [width])
  return (
    <div className="nosotros-page">
      <section className="hero-section">
        <Carousel controls={width >= 1440 ? true : false} interval={null} className="h-100">
          <Carousel.Item className="h-100">
            <Image
              className="hero-image hero-image--center"
              src="/images/nosotros1.jpg"
              alt="Charla de seguridad"
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
                layout='fill'
                objectFit='cover'
                objectPosition="left top"
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
      <Container fluid className="p-5">

        <section id="vision-section" className="vision-section mb-4">
          <Container fluid="xxl" className="bg-blue2 bg-opacity-10 g-0">
            <Row className="g-0">
              <Col>
                <div className="bg-blue3 d-flex align-items-center justify-content-center">
                  <h2 className="fw-bolder m-0 text-blue2">Visión</h2>
                </div>
                <p className="m-0 p-4 fs-xxl-5">
                  Lograr ser reconocidos como empresa lider en el Perú en minería y metalurgia de metales preciosos obteniendo la valoración de nuestros colaboradores, grupos de interés y accionistas.
                </p>
              </Col>
              <Col xs="auto">
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
            <Row className="g-0">
              <Col>
                <div className="bg-yellow3 d-flex align-items-center justify-content-center">
                  <h2 className="fw-bolder m-0 text-yellow2">Misión</h2>
                </div>
                <p className="m-0 p-4 fs-xxl-5">
                  Realizar minería responsable preservando y respetando nuestro entorno y a nuestras comunidades, haciendo la diferencia en el aprovechamiento racional de nuestros activos comprometidos con la responsabilidad social y ambiental.
                </p>
              </Col>
              <Col xs="auto">

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
            <Row className="g-0">
              <Col>
                <div className="bg-white d-flex align-items-center justify-content-center">
                  <h2 className="fw-bolder m-0">Valores</h2>
                </div>

                <p className="m-0 p-4 fs-xxl-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam optio ipsam ab, id, delectus autem reprehenderit voluptatem iusto quos esse. Impedit hic earum quos repellat beatae explicabo, magni molestias.
                </p>
              </Col>
              <Col xs="auto">
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
  );
};

export default nosotros;
