import React, { useState, useEffect } from 'react'
import { useTranslation } from "react-i18next";
import NavBar from '../../modules/NavBar/NavBar'
import Footer from '../../modules/Footer/Footer'

import Loader from '../../elements/Loader/Loader'
import useWindowDimensions from "../../../hooks/useWindowDimensions";

export default function Layout({ children }) {

  const { height, width } = useWindowDimensions();

  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let transControl = t('transControl', { ns: 'general', returnObjects: true })

    console.log("transControl: ", transControl)

    if (typeof transControl !== 'string' && !(transControl instanceof String)) {
      setLoading(false);
    }

  }, [t])

  return (
    <>
      <Loader loading={loading} />
      <>
        <NavBar />
        <main className="main-container">{children}</main>
        <Footer />
      </>
    </>
  )
}