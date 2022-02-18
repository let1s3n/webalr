import React from 'react';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
const nosotros = () => {
  return (
    <div className="nosotros-page p-5">
      <Container fluid>
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
                  width={720}
                  height={400}
                  priority
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
                  width={720}
                  height={400}
                  priority
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
                  width={720}
                  height={400}
                  priority
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
