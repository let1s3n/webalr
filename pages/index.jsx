import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Carousel, Row, Col, CardGroup, Card } from 'react-bootstrap'
import useWindowDimensions from "../hooks/useWindowDimensions";
export default function Home() {
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    console.log(width)
  }, [width])
  
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <title>SMRL Acumulación Los Rosales</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <meta name="title" content="SMRL Acumulación Los Rosales" />
        <meta name="description" content="Peruanos en busca de la excelencia haciendo minería responsable." />
        <meta name="keywords" content="minera, minería, acumulación los rosales, minería responsable, minería peruana" />
      </Head>
      <section className="hero-section">
        <Carousel controls={width >= 1440 ? true : false} interval={null} className="h-100">
          <Carousel.Item className="h-100">
            <Image
              className="hero-image"
              src="/images/hero.jpg"
              alt="Foto de la planta de día"
              layout="fill"
              objectFit="cover"
              /* objectPosition={width >= 1200 ? "left top" : "center"} */
              objectPosition="left top"
              priority
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
              className="hero-image"
              src="/images/hero2.jpg"
              alt="Foto de la planta de noche"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority

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
      <section className="quienes-somos pt-6">
        <Container fluid="md">
          <h3 className="fw-bold text-blue1 mb-5">“Somos una empresa peruana productora de metales preciosos con más de 40 años de fundada que realiza actividad minera a 4,000 msnm en Vilque Puno PERÚ”</h3>

        </Container>
        <Container fluid className="bg-yellow2 bg-opacity-10 pt-5 pt-xl-17 px-5 px-xl-11 pb-5">
          <Row style={{ columnGap: 103 + 'px', rowGap: 50 + 'px' }}>
            <Col>
              <h3 className="mb-5 fs-4 fs-sm-3">
                <span className="text-blue2">Nuestra</span><span className="text-yellow2"> Historia</span>
              </h3>
              <p className="quienes-somos-text m-0 fs-6 fs-sm-5 fw-light lh-base">
                Somos una empresa peruana productora de metales preciosos con más de 40 años de fundada que realiza actividad minera a 4,000 msnm en Vilque Puno PERÚ.
              </p>
            </Col>
            <Col>
              <h3 className="mb-5 fs-4 fs-sm-3">
                <span className="text-blue2">Somos una</span><span className="text-yellow2"> Empresa Peruana</span>
              </h3>
              <p className="quienes-somos-text m-0 fs-6 fs-sm-5 fw-light text-justify lh-base">
                Operamos en la Planta Metalúrgica Los Rosales de 340 TMD a través de un circuito de cianuración en tanques CIP obteniendo doré para el mercado internacional LBMA a través de la Swiss Better Gold (SBG).
              </p>
            </Col>
          </Row>

        </Container>
        <Container fluid className="g-0">
          <div className="w-50 bg-blue2 bg-opacity-10" style={{ padding: 32 + 'px', borderRadius: '0px 20px 20px 0px' }}>
            <h2 className="text-blue2">NUESTRA MISIÓN, VISIÓN Y VALORES</h2>
          </div>
        </Container>
        <div className="py-4 px-xl-7">

          <CardGroup className="justify-content-center" style={{ columnGap: 67 + 'px' }}>
            <Card className="text-white mx-auto mx-sm-0">
              <Card.Img src="/images/mision.jpg" alt="Misión de ALR" />
              <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                <Card.Title className="fs-2 m-0">NUESTRA MISIÓN</Card.Title>
                {/* <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text> */}
              </Card.ImgOverlay>
            </Card>
            <Card className="text-white mx-auto mx-sm-0">
              <Card.Img src="/images/vision.jpg" alt="Visión de ALR" />
              <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                <Card.Title className="fs-2 m-0">NUESTRA VISIÓN</Card.Title>

              </Card.ImgOverlay>
            </Card>
            <Card className="text-white mx-auto mx-sm-0">
              <Card.Img src="/images/valores.jpg" alt="Valores de ALR" />
              <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                <Card.Title className="fs-2 m-0">VALORES</Card.Title>

              </Card.ImgOverlay>
            </Card>
          </CardGroup>
        </div>
      </section>
      <section className="mision"></section>
      <section className="novedades"></section>


    </>
  )
}
