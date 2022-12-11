import React from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic';
import Politicas from '../components/templates/Politicas/Politicas'

const PdfViewer = dynamic(
  () => import('../components/modules/pdfViewer'),
  { ssr: false }
);
const politicas = () => {

  return (
    <>
      <Head>
        <title>SMRL Acumulación Los Rosales | Políticas</title>
      </Head>

      <Politicas />
    </>
  );
};

export default politicas;
