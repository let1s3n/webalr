import React from 'react'
import Head from 'next/head'

import Home from '../components/templates/Home/Home'

const index = () => {

  return (
    <>
      <Head>
        <title>SMRL Acumulación Los Rosales</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=2"
        />
        <meta
          name="title"
          content="SMRL Acumulación Los Rosales"
        />
        <meta
          name="description"
          content="PERUANOS HACIENDO
          MINERÍA RESPONSABLE. Somos una empresa peruana productora de metales preciosos con más de 40 años de fundada que realiza actividad minera a 4,000 msnm en Vilque Puno PERÚ."
        />
        <meta
          name="keywords"
          content="home, minería, mineria, minería peruana, mineria peruana, exportación de oro, exportacion de oro"
        />
      </Head>
      <Home />
    </>
  )
}

export default index
