import React from 'react'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import CustomForm from '../components/customForm'
const Contacto = () => {
  return (
    <>
      <Head>
        <title>SMRL Acumulación Los Rosales | Contacto</title>
      </Head>

      <section className="contacto-page py-10">
        <Container fluid="md">
          <CustomForm />
        </Container>
      </section>
    </>
  )
}

export default Contacto