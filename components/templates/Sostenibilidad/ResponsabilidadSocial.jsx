import React, { useState, useEffect } from 'react'
import { Container, Image, Breadcrumb } from 'react-bootstrap'

import { useTranslation } from "react-i18next";
import Loader from '../../elements/Loader/Loader'
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import CustomButton from '../../elements/CustomButton'
const ResponsabilidadSocial = () => {

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
      <Container fluid className="responsabilidadSocialPage g-0">

        <div className="hero-container">
          <Image
            className="hero-image"
            src={`${process.env.NEXT_CDN}images/politica1.jpg`}
            alt="Política 1"
          />
        </div>

        <Container className="g-0 py-4 px-3">
          <div className="mb-4 text-center">
            <h1 className="fs-2 text-center text-primary">
              {t('dictionary.responsability', { ns: 'general' })} <span className='text-secondary'>{t('dictionary.social', { ns: 'general' })}</span>
            </h1>
            <Breadcrumb>
              <Breadcrumb.Item href="/">{t('sections.home', { ns: 'general' })}</Breadcrumb.Item>
              <Breadcrumb.Item href="#">
                {t('sections.sustainability', { ns: 'general' })}
              </Breadcrumb.Item>
              <Breadcrumb.Item href="/sostenibilidad/responsabilidad-social" active>{t('sections.social_responsability', { ns: 'general' })}</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <p className="text-center">{t('sustainability_social_responsability_text_p1', { ns: 'general' })}</p>
          <CustomButton href="/politicas" className="mx-auto my-5" size={width >= 1200 ? "xxl" : "xl"} content={t('customButton.gotoPolicies', { ns: 'general' })} />
        </Container>

        <Container fluid className="g-0 mt-4 mb-10">
          <div className="bigContainer bg-primary w-100 w-custom1-75 position-relative px-3 px-custom1-0 py-5 py-custom1-0 pt-custom1-10 pt-vl-5 ps-custom1-15">
            <div className="h-100 w-custom1-65 d-custom1-flex align-items-center mb-4 mb-custom1-0 mx-auto mx-custom1-0">
              <p className="text-white fs-5 lh-lg mb-0 text-center text-custom1-start">
                {t('sustainability_social_responsability_text_p2', { ns: 'general' })}
              </p>
            </div>
            <div className="smallContainer position-custom1-absolute top-50 start-100 mx-auto mx-custom1-0">
              <Image src={`${process.env.NEXT_CDN}images/responsabilidadSocial2.jpg`} />
            </div>
          </div>
        </Container>
      </Container>
    </>
  )
}

export default ResponsabilidadSocial