import React, { useState, useEffect } from 'react'

import { Container, Row, Col, Carousel, Image, Card, CardGroup } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import Loader from '../../elements/Loader/Loader'

import useWindowDimensions from "../../../hooks/useWindowDimensions";

const DirectorioGerencia = () => {

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

      <div className="perfilesPage">
        <section className="hero-section directors-management__hero-image">
          <div className='h-100'>
            <Image
              className="hero-image hero-image--center"
              src="/images/hero2.jpg"
              alt="Charla de seguridad"
            />
          </div>
        </section>
        <section className="directors-management__content mx-auto perfiles d-flex flex-column justify-content-center align-items-center mt-4 p-3 py-xl-5">
          <h1 className="mb-5 mt-5 mt-xl-0 mb-custom1-8  text-center  text-primary">
            DIRECTORIO Y <span className='text-secondary'>GERENCIA</span>
          </h1>

          <Container fluid className="g-0">
            <div className='bg-primary text-white mx-lg-5 text-center px-3 px-lg-5 py-4 py-xl-5 mb-5'>
              <div>
                <h2 className=''>{t('jose_carneiro_title1', { ns: 'general' })}</h2>
                <div className='border border-secondary w-25 mx-auto mb-3'></div>
                <h3>{t('jose_carneiro_title2', { ns: 'general' })}</h3>
              </div>
              <div className="pt-4 px-3 px-md-5 px-xl-6">
                <p>{t('jose_carneiro_text', { ns: 'general' })}</p>
              </div>
            </div>

            <div className='px-md-3 px-lg-5'>
              <Row className='mb-3'>
                <Col xs={12} lg={6}>
                  <div className='p-5 directors-management__card mb-4 mb-xl-0'>
                    <div>
                      <h3 className=' text-primary'>{t('jhon_quispe_title1', { ns: 'general' })}</h3>
                      <div className='border border-secondary w-25 mb-3'></div>
                      <h6 className='text-primary'>{t('jhon_quispe_title2', { ns: 'general' })}</h6>
                    </div>
                    <div className="pt-3">
                      <p className='mb-0 text-primary'>{t('jhon_quispe_text', { ns: 'general' })}</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} lg={6}>
                  <div className='p-5 directors-management__card mb-4 mb-xl-0'>
                    <div>
                      <h3 className=' text-primary'>{t('hector_gomez_title1', { ns: 'general' })}</h3>
                      <div className='border border-secondary w-25 mb-3'></div>
                      <h6 className='text-primary'>{t('hector_gomez_title2', { ns: 'general' })}</h6>
                    </div>
                    <div className="pt-3">
                      <p className='mb-0 text-primary'>{t('hector_gomez_text', { ns: 'general' })}</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col xs={12} lg={6}>
                  <div className='p-5 directors-management__card mb-4 mb-xl-0'>
                    <div>
                      <h3 className=' text-primary'>{t('andre_carneiro_title1', { ns: 'general' })}</h3>
                      <div className='border border-secondary w-25 mb-3'></div>
                      <h6 className='text-primary'>{t('andre_carneiro_title2', { ns: 'general' })}</h6>
                    </div>
                    <div className="pt-3">
                      <p className='mb-0 text-primary'>{t('andre_carneiro_text', { ns: 'general' })}</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} lg={6}>
                  <div className='p-5 directors-management__card mb-4 mb-xl-0'>
                    <div>
                      <h3 className=' text-primary'>{t('rolando_algarate_title1', { ns: 'general' })}</h3>
                      <div className='border border-secondary w-25 mb-3'></div>
                      <h6 className='text-primary'>{t('rolando_algarate_title2', { ns: 'general' })}</h6>
                    </div>
                    <div className="pt-3">
                      <p className='mb-0 text-primary'>{t('rolando_algarate_text', { ns: 'general' })}</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col xs={12} lg={6}>
                  <div className='p-5 directors-management__card mb-4 mb-xl-0'>
                    <div>
                      <h3 className=' text-primary'>{t('oliver_huaman_title1', { ns: 'general' })}</h3>
                      <div className='border border-secondary w-25 mb-3'></div>
                      <h6 className='text-primary'>{t('oliver_huaman_title2', { ns: 'general' })}</h6>
                    </div>
                    <div className="pt-3">
                      <p className='mb-0 text-primary'>{t('oliver_huaman_text', { ns: 'general' })}</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} lg={6}>
                  <div className='p-5 directors-management__card mb-4 mb-xl-0'>
                    <div>
                      <h3 className=' text-primary'>{t('darwin_delgado_title1', { ns: 'general' })}</h3>
                      <div className='border border-secondary w-25 mb-3'></div>
                      <h6 className='text-primary'>{t('darwin_delgado_title2', { ns: 'general' })}</h6>
                    </div>
                    <div className="pt-3">
                      <p className='mb-0 text-primary'>{t('darwin_delgado_text', { ns: 'general' })}</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col xs={12} lg={6}>
                  <div className='p-5 directors-management__card mb-4 mb-xl-0'>
                    <div>
                      <h3 className=' text-primary'>{t('william_medrano_title1', { ns: 'general' })}</h3>
                      <div className='border border-secondary w-25 mb-3'></div>
                      <h6 className='text-primary'>{t('william_medrano_title2', { ns: 'general' })}</h6>
                    </div>
                    <div className="pt-3">
                      <p className='mb-0 text-primary'>{t('william_medrano_text', { ns: 'general' })}</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} lg={6}>
                  <div className='p-5 directors-management__card mb-4 mb-xl-0'>
                    <div>
                      <h3 className=' text-primary'>{t('rafael_farfan_title1', { ns: 'general' })}</h3>
                      <div className='border border-secondary w-25 mb-3'></div>
                      <h6 className='text-primary'>{t('rafael_farfan_title2', { ns: 'general' })}</h6>
                    </div>
                    <div className="pt-3">
                      <p className='mb-0 text-primary'>{t('rafael_farfan_text', { ns: 'general' })}</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </div>
    </>
  )
}

export default DirectorioGerencia