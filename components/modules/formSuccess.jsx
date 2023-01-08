import { useEffect, useState } from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';

const FormSuccess = () => {
  const [control, setControl] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setControl(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [control]);
  return (
    control ?
      <>
        <h6 className="text-blue1 custom-font-6 fs-md-4 fs-xl-2  mb-5 text-start">{t('contactForm.contacto_title', { ns: 'general' })}</h6>
        <Form>
          <Row xs={1} xl={2} style={{ rowGap: 1.5 + 'rem' }}>
            <Col>
              <Form.Control placeholder={t('contactForm.contacto_inputNombre', { ns: 'general' })} className="rounded-pill font-sm font-tertiary fw-500 custom-input" />
            </Col>
            <Col>
              <Form.Control placeholder="Email*" type="email" className="rounded-pill font-sm font-tertiary fw-500 custom-input" />
            </Col>
            <Col>
              <Form.Control placeholder={t('contactForm.contacto_inputCompany', { ns: 'general' })} className="rounded-pill font-sm font-tertiary fw-500 custom-input" />
            </Col>
            <Col>
              <Form.Control placeholder={t('contactForm.contacto_inputPhone', { ns: 'general' })} className="rounded-pill font-sm font-tertiary fw-500 custom-input" />
            </Col>
            <Col xl={9}>
              <Form.Control placeholder={t('contactForm.contacto_inputTellUs', { ns: 'general' })} as="textarea" className="font-sm font-tertiary fw-500 custom-input" style={{ height: 128 + 'px', borderRadius: 25 + 'px', resize: 'none' }} />
            </Col>
            <Col className="mt-3 mt-xl-0 d-xl-flex align-items-center" xl={3}>
              <Button variant="outline-blue1" className="rounded-pill d-block custom-font-xl-6 border-3 fw-600 mx-auto mx-xl-0 ms-xl-4" onClick={() => setControl(false)} type="submit">{t('contactForm.contacto_submit', { ns: 'general' })}</Button>
            </Col>

          </Row>
        </Form>
      </>
      :
      <Container fluid className="py-11 py-md-17 d-md-flex flex-column justify-content-center g-0">
        <Row className="mb-4">
          <Col>
            <Image src={`${process.env.NEXT_CDN}images/logo-alr.png`} style={{ width: 200 + 'px' }} alt="logo alr" />
          </Col>
        </Row>
        <Row className="mb-2">
          <p className="m-0 text-azul-texto custom-font-6 fw-600 fs-md-5 fs-xxl-2 fw-md-bolder">{t('contactForm.thanks', { ns: 'general' })}</p>
        </Row>
        <Row>
          <p className="m-0 text-primary3 custom-font-md-6 fs-xxl-4">{t('contactForm.successMessage', { ns: 'general' })}</p>
        </Row>
      </Container>
  )
}

export default FormSuccess
