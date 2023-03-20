import React from 'react'
import Head from 'next/head'
import MonitoreoAmbiental from '../../components/templates/Sostenibilidad/MonitoreoAmbiental'

const monitoreoAmbiental = () => {
  return (
    <>
      <Head>
        <title>SMRL Acumulación Los Rosales | Sostenibilidad - Monitoreo Ambiental</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=2"
        />
        <meta
          name="title"
          content="SMRL Acumulación Los Rosales | Sostenibilidad - Monitoreo Ambiental"
        />
        <meta
          name="description"
          content="PERUANOS HACIENDO
          MINERÍA RESPONSABLE. Somos una empresa peruana productora de metales preciosos con más de 40 años de fundada que realiza actividad minera a 4,000 msnm en Vilque Puno PERÚ."
        />
      </Head>
      <MonitoreoAmbiental />
    </>
  )
}

export default monitoreoAmbiental