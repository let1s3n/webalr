import React, { useState, useEffect } from 'react'
import { Row,Col,Container, Image, Breadcrumb, CardGroup, Card } from 'react-bootstrap'

import { useTranslation } from "react-i18next";
import Loader from '../../elements/Loader/Loader'
import useWindowDimensions from "../../../hooks/useWindowDimensions";
const Prensa = () => {

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
      <Container fluid className="prensaPage g-0">
        <div className="hero-container">
          <Image
            className="hero-image"
            src="/images/politica1.jpg"
            alt="Política 1"
          />
        </div>

        <Container className="py-4 px-3 g-0 text-center">
          <h1 className='text-primary'>PRENSA</h1>

          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

            <Breadcrumb.Item href="/prensa" active>Prensa</Breadcrumb.Item>
          </Breadcrumb>

        </Container>

        <Container className="g-0 mb-10">

          <Row xs={1} md={3} className="gy-4 gx-0 gx-md-4">
            {Array.from({ length: 9 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src="/images/mision.jpg" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

        </Container>
      </Container>
    </>
  )
}

export default Prensa