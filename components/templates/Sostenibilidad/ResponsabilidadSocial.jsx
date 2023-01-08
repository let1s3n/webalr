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
            <h1 className="text-center text-primary">
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

          <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eligendi enim dolore! Unde perspiciatis vero reprehenderit veniam praesentium neque quae itaque, eligendi at eum? Magni ad ea voluptas repellendus doloribus.</p>

          <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore eos iure in illum quaerat.</p>

          <CustomButton href="/politicas" className="mx-auto my-5" size={width >= 1200 ? "xxl" : "xl"} content={t('customButton.gotoPolicies', { ns: 'general' })} />
        </Container>

        <Container fluid className="g-0 mt-4 mb-10">
          <div className="bigContainer bg-primary w-100 w-custom1-75 position-relative pt-custom1-10 ps-custom1-15">
            <div className="w-65 pt-5 pt-custom1-0 mx-auto mx-custom1-0">
              <p className="text-white fs-5 lh-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolor velit necessitatibus ducimus repudiandae sapiente quos explicabo in illum veniam earum porro aliquid a modi, voluptatum, hic voluptatem quaerat quibusdam!
              </p>
              <p className="text-white fs-5 lh-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatum beatae et numquam, obcaecati accusantium cumque quasi sequi atque similique, necessitatibus soluta iste tempore dignissimos id? Enim impedit fugit a!
              </p>
            </div>
            <div className="smallContainer pb-5 pb-custom1-0 position-custom1-absolute top-50 start-100 mx-auto mx-custom1-0">
              <Image src={`${process.env.NEXT_CDN}images/mision.jpg`} />
            </div>
          </div>
        </Container>
      </Container>
    </>
  )
}

export default ResponsabilidadSocial