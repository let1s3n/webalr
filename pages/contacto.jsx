import React from 'react'
import { Container } from 'react-bootstrap'
import CustomForm from '../components/customForm'
const Contacto = () => {
  return (
    <section className="contacto-page py-10">
    <Container fluid="md">
      <CustomForm/>
    </Container>
    </section>
  )
}

export default Contacto