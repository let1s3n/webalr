import React, { useState, useEffect } from 'react'
import { Row, Col, Container, Image, Breadcrumb, CardGroup, Card } from 'react-bootstrap'

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
            src={`${process.env.NEXT_CDN}images/politica1.jpg`}
            alt="Política 1"
          />
        </div>

        <Container className="py-4 px-3 g-0 text-center">
          <h1 className='text-primary text-uppercase'>{t('sections.press', { ns: 'general' })}</h1>

          <Breadcrumb>
            <Breadcrumb.Item href="/">{t('sections.home', { ns: 'general' })}</Breadcrumb.Item>

            <Breadcrumb.Item href="/prensa" active>{t('sections.press', { ns: 'general' })}</Breadcrumb.Item>
          </Breadcrumb>

        </Container>

        <Container className="g-0 mb-10">

          <Row xs={1} md={3} className="gy-4 gx-0 gx-md-4">
            {Array.from({ length: 9 }).map((_, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src={`${process.env.NEXT_CDN}images/mision.jpg`} />
                  <Card.Body>
                    <Card.Title>{t('dictionary.cardTitle', { ns: 'general' })}</Card.Title>
                    <Card.Text>
                      {t('dictionary.cardText', { ns: 'general' })}
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