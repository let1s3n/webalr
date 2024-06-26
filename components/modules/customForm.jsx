import { useState, useEffect } from 'react';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

import Loader from '../elements/Loader/Loader'

import FormSuccess from "./formSuccess";

const CustomForm = () => {
  const [enviado, setEnviado] = useState(false);
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let transControl = t('transControl', { ns: 'general', returnObjects: true })

    if (typeof transControl !== 'string' && !(transControl instanceof String)) {
      setLoading(false);
    }

  }, [t])

  return (
    <>
      <Loader loading={loading} />
      <Container className="form-container text-center bg-basic1 pt-5 pb-6 px-3 px-md-11 px-xl-7" style={{ borderRadius: 47 + 'px' }}>
        {enviado ? <FormSuccess />
          :
          <>
            <h6 className="text-blue1 custom-font-6 fs-md-4 fs-xl-2 mb-5 text-start">{t('contactForm.contacto_title', { ns: 'general' })}</h6>
            <Form>
              <Row xs={1} xl={2} style={{ rowGap: 1.5 + 'rem' }}>
                <Col>
                  <Form.Control placeholder={t('contactForm.contacto_inputNombre', { ns: 'general' })} className="rounded-pill font-sm font-tertiary fw-500 custom-input text-black" />
                </Col>
                <Col>
                  <Form.Control placeholder="Email*" type="email" className="rounded-pill font-sm font-tertiary fw-500 custom-input text-black" />
                </Col>
                <Col>
                  <Form.Control placeholder={t('contactForm.contacto_inputCompany', { ns: 'general' })} className="rounded-pill font-sm font-tertiary fw-500 custom-input text-black" />
                </Col>
                <Col>
                  <Form.Control placeholder={t('contactForm.contacto_inputPhone', { ns: 'general' })} className="rounded-pill font-sm font-tertiary fw-500 custom-input text-black" />
                </Col>
                <Col xl={9}>
                  <Form.Control placeholder={t('contactForm.contacto_inputTellUs', { ns: 'general' })} as="textarea" className="font-sm font-tertiary fw-500 custom-input text-black" style={{ height: 128 + 'px', borderRadius: 25 + 'px', resize: 'none' }} />
                </Col>
                <Col className="mt-3 mt-xl-0 d-xl-flex align-items-center" xl={3}>
                  <Button variant="outline-blue1" className="rounded-pill d-block custom-font-xl-6 border-3 fw-600 mx-auto mx-xl-0 ms-xl-4" onClick={() => setEnviado(true, { ns: 'general' })} type="submit">{t('contactForm.contacto_submit', { ns: 'general' })}</Button>
                </Col>

              </Row>
            </Form>


          </>
        }

      </Container>
    </>

  )
}

export default CustomForm
