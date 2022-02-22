import { useEffect, useState } from 'react'
import { Container, Row, Col, Image,Form,Button } from 'react-bootstrap';

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
        <h6 className="text-blue1 custom-font-6 fs-md-4 fs-xl-2 fw-bold mb-5 text-start">Datos de Contacto</h6>
        <Form>
          <Row xs={1} xl={2} style={{ rowGap: 1.5 + 'rem' }}>
            <Col>
              <Form.Control placeholder="Nombre Completo*" className="rounded-pill font-sm font-tertiary fw-500 custom-input" />
            </Col>
            <Col>
              <Form.Control placeholder="Email*" type="email" className="rounded-pill font-sm font-tertiary fw-500 custom-input" />
            </Col>
            <Col>
              <Form.Control placeholder="Empresa" className="rounded-pill font-sm font-tertiary fw-500 custom-input" />
            </Col>
            <Col>
              <Form.Control placeholder="Teléfono*" className="rounded-pill font-sm font-tertiary fw-500 custom-input" />
            </Col>
            <Col xl={9}>
              <Form.Control placeholder="Cuéntanos..." as="textarea" className="font-sm font-tertiary fw-500 custom-input" style={{ height: 128 + 'px', borderRadius: 25 + 'px', resize: 'none' }} />
            </Col>
            <Col className="mt-3 mt-xl-0 d-xl-flex align-items-center" xl={3}>
              <Button variant="outline-blue1" className="rounded-pill d-block custom-font-xl-6 border-3 fw-600 mx-auto mx-xl-0 ms-xl-4" onClick={() => setControl(false)} type="submit">Enviar</Button>
            </Col>

          </Row>
        </Form>
      </>
      :
      <Container fluid className="py-11 py-md-17 d-md-flex flex-column justify-content-center g-0">
        <Row className="mb-4">
          <Col>
            <Image src="/images/logo-alr.png" style={{width:200+'px'}}/>
          </Col>
        </Row>
        <Row className="mb-2">
          <p className="m-0 text-azul-texto custom-font-6 fw-600 fs-md-5 fs-xxl-2 fw-md-bolder">¡Gracias!</p>
        </Row>
        <Row>
          <p className="m-0 text-primary3 custom-font-md-6 fs-xxl-4">Te contactaremos tan pronto como sea posible</p>
        </Row>
      </Container>
  )
}

export default FormSuccess
