import React from 'react'
import Head from 'next/head'

import Home from '../components/templates/Home/Home'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
const index = ({ locale }) => {

  return (
    <>
      <Head>
        <title>SMRL Acumulación Los Rosales</title>
      </Head>
      <Home locale={locale} />
    </>
  )
}

export default index

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'general'
      ])),
      // Will be passed to the page component as props
    },
  }
}
