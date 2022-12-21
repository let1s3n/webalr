import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import CustomForm from '../../modules/customForm'
const Contacto = () => {
  return (
    <section className="contacto-page py-5 py-custom1-10">
      <Container fluid="md">
        <CustomForm />
      </Container>
    </section>
  )
}

export default Contacto