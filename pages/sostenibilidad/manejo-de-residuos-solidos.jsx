import React from 'react'
import Head from 'next/head'
import ManejoResiduosSolidos from '../../components/templates/Sostenibilidad/ManejoResiduosSolidos'
const manejoDeResiduosSolidos = () => {
  return (
    <>
      <Head>
        <title>SMRL Acumulación Los Rosales | Sostenibilidad - Manejo de Residuos</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=2"
        />
        <meta
          name="title"
          content="SMRL Acumulación Los Rosales | Sostenibilidad - Manejo de Residuos"
        />
        <meta
          name="description"
          content="PERUANOS HACIENDO
          MINERÍA RESPONSABLE. Somos una empresa peruana productora de metales preciosos con más de 40 años de fundada que realiza actividad minera a 4,000 msnm en Vilque Puno PERÚ."
        />
      </Head>
      <ManejoResiduosSolidos />
    </>

  )
}

export default manejoDeResiduosSolidos