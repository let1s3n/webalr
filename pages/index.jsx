import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Carousel, Row, Col, CardGroup, Card, Image } from 'react-bootstrap'
import useWindowDimensions from "../hooks/useWindowDimensions";
export default function Home() {
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    console.log(width)
  }, [width])

  return (
    <>
      <Head>
        <title>SMRL Acumulación Los Rosales</title>
      </Head>
      <section className="hero-section">
        <Carousel controls={width >= 1440 ? true : false} interval={null} className="h-100">
          <Carousel.Item className="h-100">
            <Image
              className="hero-image"
              src="/images/hero.jpg"
              alt="Foto de la planta de día"
            /* layout="fill"
            objectFit="cover"
            objectPosition="left top"
            priority */
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
              /* layout='fill'
              objectFit='cover'
              objectPosition="left top" */
              />
            </div>
          </Carousel.Item>
          <Carousel.Item className="h-100">
            <Image
              className="hero-image"
              src="/images/hero2.jpg"
              alt="Foto de la planta de noche"
            /* layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority */

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
          <h3 className="fw-bold text-blue1 mb-5 text-center">“Somos una empresa peruana productora de metales preciosos con más de 40 años de fundada que realiza actividad minera a 4,000 msnm en Vilque Puno PERÚ”</h3>

        </Container>
        <Container fluid className="bg-yellow2 bg-opacity-10 pt-5 pt-xl-17 px-5 px-xl-11 pb-5">
          <Row className="custom-row flex-column flex-sm-row">
            <Col>
              <h3 className="mb-5 fs-4 fs-xxl-3">
                <span className="text-blue2">Nuestra</span><span className="text-yellow2"> Historia</span>
              </h3>
              <p className="quienes-somos-text m-0 fs-6 fs-sm-5 fw-light lh-base">
                Somos una empresa peruana productora de metales preciosos con más de 40 años de fundada que realiza actividad minera a 4,000 msnm en Vilque Puno PERÚ.
              </p>
            </Col>
            <Col>
              <h3 className="mb-5 fs-4 fs-xxl-3">
                <span className="text-blue2">Somos una</span><span className="text-yellow2"> Empresa Peruana</span>
              </h3>
              <p className="quienes-somos-text m-0 fs-6 fs-sm-5 fw-light text-justify lh-base">
                Operamos en la Planta Metalúrgica Los Rosales de 340 TMD a través de un circuito de cianuración en tanques CIP obteniendo doré para el mercado internacional LBMA a través de la Swiss Better Gold (SBG).
              </p>
            </Col>
          </Row>

        </Container>
        <Container fluid className="g-0 mt-5 bg-blue2 bg-opacity-10">
          <div className="w-75 w-xxl-50 bg-blue3" style={{ padding: 32 + 'px', borderRadius: '0px 20px 20px 0px' }}>
            <h2 className="text-blue2 m-0 fw-bolder">NUESTRA MISIÓN, VISIÓN Y VALORES</h2>
          </div>
        </Container>
        <div className="py-4 px-xl-4">

          <CardGroup className="justify-content-xl-center align-items-center flex-column flex-xl-row">
            <Card className="text-white mx-auto mx-sm-0">
              <Card.Img src="/images/mision.jpg" alt="Misión de ALR" />
              <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                <Card.Title>
                  <Link href="/nosotros#mision-section">
                    <a>
                      <Row>
                        <Col xs="auto">
                          <h2 className="m-0 text-white">NUESTRA MISIÓN</h2>
                        </Col>
                        <Col xs="auto">
                          <Image
                            src="/images/arrow-right-white.svg"
                            className="arrow-right"
                          />
                        </Col>
                      </Row>
                    </a>
                  </Link>
                </Card.Title>
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
                <Card.Title className="fs-2 m-0">
                  <Link href="/nosotros#vision-section">
                    <a>
                      <Row>
                        <Col xs="auto">
                          <h2 className="m-0 text-white">NUESTRA VISIÓN</h2>
                        </Col>
                        <Col xs="auto">
                          <Image
                            src="/images/arrow-right-white.svg"
                            className="arrow-right"
                          />
                        </Col>
                      </Row>
                    </a>
                  </Link>
                </Card.Title>

              </Card.ImgOverlay>
            </Card>
            <Card className="text-white mx-auto mx-sm-0">
              <Card.Img src="/images/valores.jpg" alt="Valores de ALR" />
              <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                <Card.Title className="fs-2 m-0">
                  <Link href="/nosotros#valores-section">
                    <a>
                      <Row>
                        <Col xs="auto">
                          <h2 className="m-0 text-white">VALORES</h2>
                        </Col>
                        <Col xs="auto">
                          <Image
                            src="/images/arrow-right-white.svg"
                            className="arrow-right"
                          />
                        </Col>
                      </Row>
                    </a>
                  </Link>
                </Card.Title>

              </Card.ImgOverlay>
            </Card>
          </CardGroup>
        </div>
      </section>
      <section className="novedades">
        <Container fluid className="g-0 mt-5 bg-yellow2 bg-opacity-10 d-flex flex-row-reverse">
          <div className="w-75 w-xxl-50 bg-yellow3" style={{ padding: 32 + 'px', borderRadius: '20px 0px 0px 20px' }}>
            <h2 className="text-yellow2 m-0 fw-bolder">ÚLTIMAS NOTICIAS</h2>
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
                  />
                </Col>
                <Col xs={12} sm={6} md={4} lg={6} xxl={4}>
                  <h2 className="m-0 mb-3 text-yellow2">
                    Visita de Colorado School of Mines
                  </h2>
                  <p className="text-justify--mobile m-0">
                    Visita del 22 de septiembre del 2021 a SMRL ACUMULACIÓN LOS ROSALES en Puno - Perú de la delegación de Colorado School of Mines - USA.
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
                  />
                </Col>
                <Col xs={12} sm={6} md={4} lg={6} xxl={4}>
                  <h2 className="m-0 mb-3 text-yellow2">
                    Objetivos 2022
                  </h2>
                  <p className="text-justify--mobile m-0">
                    Seguimos firmes en nuestros objetivos y al año 2022 somos la mayor operación integral de reprocesamiento de PAMs de metales preciosos en Puno - Perú y una de las principales del país, logrando trazabilidad y sostenibilidad simultaneamente.
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
                  />
                </Col>
                <Col xs={12} sm={6} md={4} lg={6} xxl={4}>
                  <h2 className="m-0 mb-3 text-yellow2">
                    Aumento en nuestra capacidad
                  </h2>
                  <p className="text-justify--mobile m-0">
                    Hemos ampliado nuestra capacidad a 340 TMD en Planta Metalúrgica Los Rosales Puno en función a autorizaciones sectoriales otorgadas en marzo 2021. Reutilizando PAMs utilizando mecanismos ambientales que garantizan nulo impacto al entorno. Cumplimos con la normatividad y simultaneamente crecemos.
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
