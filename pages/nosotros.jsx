import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Container, Row, Col, Carousel, Image, Card, CardGroup } from 'react-bootstrap'
import useWindowDimensions from "../hooks/useWindowDimensions";
const nosotros = () => {
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    console.log(width)
  }, [width])
  return (
    <>
      <Head>
        <title>SMRL Acumulación Los Rosales | Nosotros</title>
      </Head>
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
                <span className="d-block bg-yellow2 bg-opacity-60 fw-normal px-4 mb-2">PERUANOS EN BUSCA DE LA EXCELENCIA</span>
                <span className="d-inline-block bg-basic1 bg-opacity-40 fw-600 px-4 mb-2">HACIENDO</span> <br />
                <span className="d-inline-block fw-bolder bg-blue2 bg-opacity-60 px-4">MINERÍA RESPONSABLE</span>
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
                <span className="d-block bg-yellow2 bg-opacity-60 fw-normal px-4 mb-2">PROCESAMOS MÁS DE 120,000 TM/AÑO</span>
                <span className="d-inline-block bg-basic1 bg-opacity-40 fw-600 px-4 mb-2">DE MINERAL AURÍFERO PROPIO</span> <br />
                <span className="d-inline-block fw-bolder bg-blue2 bg-opacity-60 px-4">Y PAMs</span>
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
                <h2 className="mb-3 text-black">Nuestra Historia</h2>
                <p className="m-0 text-justify--mobile">
                  Sociedad Minera de Responsabilidad Limitada Acumulación Los Rosales es consecuencia de diversos esfuerzos de pioneros emprendedores que actuaron en minería en el altiplano de Puno Perú desde hace 40 años atrás.
                  <br />
                  <br />
                  Inicialmente Minas Los Rosales SRL a través de la Resolución Directoral Nº 192-79-EM/DCFM de 12 de Octubre de 1979 (MINEM) es autorizada a operar planta de beneficio de minerales Los Rosales de 100 TMD siendo que el 26 de Julio del año 2010 a través de Resolución de Presidencia Nº 2224-2010-INGEMMET/PCD/PM e inscrita en SUNARP en la PE Nº 11179265 con fecha 13 de Enero del 2011 es reconocida como la actual empresa SMRL Acumulación Los Rosales estando entonces por esos años orientada a la producción de concentrados de oro, plata y cobre.
                  <br />
                  <br />
                  En Noviembre 2019 es asumida por los actuales propietarios peruanos quienes bajo el liderazgo de un equipo humano selecto y profesional, en donde confluyen positivamente con el aporte local, inician un ambicioso plan de modernizaciones y reingenierías de procesos metalúrgicos y de minería subterránea en las 3 concesiones mineras de la empresa así como en el eficaz reaprovechamiento de 1.5 millones de TM de relaves de flotación históricos existentes con valores auríferos como parte de los 19 PAMs autorizados para su reutilización por el Estado Peruano.
                  <br />
                  <br />
                  Así y desde Marzo del año 2021 la capacidad de Planta Metalúrgica Los Rosales es de 340 TMD por procesos combinados de flotación y de lixiviación (CIP) y obtenemos barras doré que son exportadas a cliente LBMA buscando la excelencia en el destino final del producto obtenido.

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
                    <h2 className="fw-bolder m-0 text-blue2">Visión</h2>
                  </div>
                  <p className="m-0 p-4 fs-xxl-5">
                    Lograr ser reconocidos como empresa lider en el Perú en minería y metalurgia de metales preciosos obteniendo la valoración de nuestros colaboradores, grupos de interés y accionistas.
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
                    <h2 className="fw-bolder m-0 text-yellow2">Misión</h2>
                  </div>
                  <p className="m-0 p-4 fs-xxl-5">
                    Realizar minería responsable preservando y respetando nuestro entorno y a nuestras comunidades, haciendo la diferencia en el aprovechamiento racional de nuestros activos comprometidos con la responsabilidad social y ambiental.
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
                    <h2 className="fw-bolder m-0">Valores</h2>
                  </div>

                  <p className="m-0 p-4 fs-xxl-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam optio ipsam ab, id, delectus autem reprehenderit voluptatem iusto quos esse. Impedit hic earum quos repellat beatae explicabo, magni molestias.
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
        <section className="perfiles d-flex flex-column justify-content-center align-items-center">
          <div className="mb-5 align-self-start ps-5">
            <h2 className="text-black">Dirección</h2>
          </div>
          <Container fluid>
            <CardGroup className="justify-content-xl-center align-items-center flex-column flex-xl-row" style={{ rowGap: 2 + 'rem' }}>
              <Card className="text-white mx-auto mx-sm-0 border-0">
                <Card.Img src="/images/Jose_Carneiro.jpg" alt="Gerente General" />
                <Card.ImgOverlay className="d-none d-xl-flex flex-column align-items-center pt-6">
                  <Card.Title className="fs-3 m-0">
                    Gerente General CEO
                  </Card.Title>
                  <Card.Text className="mt-4">
                    Empresario minero que desde 1986 en Minero Perú SA, se involucró desde diversas posiciones en múltiples instituciones y corporaciones públicas y privadas en indistintos sectores. A la fecha es Gerente General CEO de SMRL Acumulación Los Rosales y Presidente del Directorio CEO en Minera Mirasol SA y Minera Rocafuerte SA así como de otras empresas vinculadas en las que en el altiplano de los andes y costa norte peruana opera en minería de metales preciosos.
                  </Card.Text>
                </Card.ImgOverlay>
                <Card.Body className="d-xl-none text-black">
                  <Card.Title className="fs-3 m-0">
                    Gerente General CEO
                  </Card.Title>
                  <Card.Text className="mt-4 text-justify--mobile">
                    Empresario minero que desde 1986 en Minero Perú SA, se involucró desde diversas posiciones en múltiples instituciones y corporaciones públicas y privadas en indistintos sectores. A la fecha es Gerente General CEO de SMRL Acumulación Los Rosales y Presidente del Directorio CEO en Minera Mirasol SA y Minera Rocafuerte SA así como de otras empresas vinculadas en las que en el altiplano de los andes y costa norte peruana opera en minería de metales preciosos.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="text-white mx-auto mx-sm-0 border-0">
                <Card.Img src="/images/Hector_Gomez.jpg" alt="Gerente Legal y de Finanzas" />
                <Card.ImgOverlay className="d-none d-xl-flex flex-column align-items-center pt-6">
                  <Card.Title className="fs-3 m-0">
                    Gerente Legal y Financiero
                  </Card.Title>
                  <Card.Text className="mt-4">
                    Abogado por la Universidad San Martin de Porres. Maestro en Finanzas y Derecho Corporativo, con mención en tributación por ESAN. Estudios de Maestría en Derecho Civil por la Universidad San Martin de Porres, y especialización en Derecho Financiero a través del Programa de Educación Ejecutiva (PEE) por ESAN. Más de diez años de experiencia en derecho corporativo, temas patrimoniales, tributarios y mineros.
                  </Card.Text>

                </Card.ImgOverlay>
                <Card.Body className="d-xl-none text-black">
                  <Card.Title className="fs-3 m-0">
                    Gerente Legal y Financiero
                  </Card.Title>
                  <Card.Text className="mt-4 text-justify--mobile">
                    Abogado por la Universidad San Martin de Porres. Maestro en Finanzas y Derecho Corporativo, con mención en tributación por ESAN. Estudios de Maestría en Derecho Civil por la Universidad San Martin de Porres, y especialización en Derecho Financiero a través del Programa de Educación Ejecutiva (PEE) por ESAN. Más de diez años de experiencia en derecho corporativo, temas patrimoniales, tributarios y mineros.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="text-white mx-auto mx-sm-0 border-0">
                <Card.Img src="/images/Andre_Carneiro.jpg" alt="Jefe de Control" />
                <Card.ImgOverlay className="d-none d-xl-flex flex-column align-items-center pt-6">
                  <Card.Title className="fs-3 m-0">
                    Jefe de Control de Gestión
                  </Card.Title>
                  <Card.Text className="mt-4">
                    Ingeniero Industrial de la Universidad de Lima con experiencia en empresas multinacionales del rubro alimentos y consumo masivo (ALICORP SAA), retail (TOTTUS SAA) y minería (Compañía Minera Antamina SA).
                  </Card.Text>

                </Card.ImgOverlay>
                <Card.Body className="d-xl-none text-black">
                  <Card.Title className="fs-3 m-0">
                    Jefe de Control de Gestión
                  </Card.Title>
                  <Card.Text className="mt-4 text-justify--mobile">
                    Ingeniero Industrial de la Universidad de Lima con experiencia en empresas multinacionales del rubro alimentos y consumo masivo (ALICORP SAA), retail (TOTTUS SAA) y minería (Compañía Minera Antamina SA).
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Container>
        </section>
      </div>
    </>
  );
};

export default nosotros;
