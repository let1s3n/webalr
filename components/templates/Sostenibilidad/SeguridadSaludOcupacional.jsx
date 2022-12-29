import React, { useState, useEffect } from 'react'
import { Container, Image, Breadcrumb } from 'react-bootstrap'

import { useTranslation } from "react-i18next";
import Loader from '../../elements/Loader/Loader'
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import CustomButton from '../../elements/CustomButton'
const SeguridadSaludOcupacional = () => {

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
      <Container fluid className="seguridadSaludOcupacionalPage g-0">

        <div className="hero-container">
          <Image
            className="hero-image"
            src="/images/politica1.jpg"
            alt="Política 1"
          />
        </div>

        <Container className="g-0 py-4">
          <div className="mb-4 text-center">
            <h2 className="m-0 mb-3">Seguridad y Salud Ocupacional</h2>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="#">
                Sostenibilidad
              </Breadcrumb.Item>
              <Breadcrumb.Item href="/sostenibilidad/responsabilidad-social" active>Seguridad y salud ocupacional</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eligendi enim dolore! Unde perspiciatis vero reprehenderit veniam praesentium neque quae itaque, eligendi at eum? Magni ad ea voluptas repellendus doloribus.</p>

          <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore eos iure in illum quaerat.</p>

          <CustomButton className="mx-auto" size="xxl" content="Ir a políticas" />
        </Container>
      </Container>
    </>
  )
}

export default SeguridadSaludOcupacional