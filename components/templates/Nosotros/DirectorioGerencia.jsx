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
    <div className="perfilesPage">
      <section className="perfiles d-flex flex-column justify-content-center align-items-center p-3 py-xl-5 px-xl-11 px-xxxxl-15">

        <div className="mb-3 mb-custom1-5 align-self-start">
          <h2 className="futuraBold fw-bold">NUESTRO PRESIDENTE</h2>
        </div>

        <Container fluid className="g-0 mb-3 mb-custom1-10">

          <CardGroup className="justify-content-center align-items-center flex-column flex-xl-row" style={{ rowGap: 2 + 'rem' }}>

            <Card className="text-white mx-auto mx-sm-0 border-0">
              <Card.Img src="/images/Jose_Carneiro.jpg" alt="Gerente General" />
              <Card.ImgOverlay className="d-none d-xl-flex flex-column align-items-center pt-6">
                <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('jose_carneiro_title1', { ns: 'general' })}
                    <span className="fs-4">{t('jose_carneiro_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title>
                <Card.Text className="mt-4">
                  {t('jose_carneiro_text', { ns: 'general' })}
                </Card.Text>
              </Card.ImgOverlay>
              <Card.Body className="d-xl-none text-black">
                {/* <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('jose_carneiro_title1', { ns: 'general' })}
                    <span className="fs-4">{t('jose_carneiro_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4 text-justify--mobile">
                  {t('jose_carneiro_text', { ns: 'general' })}
                </Card.Text>
              </Card.Body>
            </Card>

          </CardGroup>

        </Container>

        <div className="mb-3 mb-custom1-5 align-self-start">
          <h2 className="futuraBold fw-bold">NUESTRO EQUIPO</h2>
        </div>

        <Container fluid className="g-0">

          <CardGroup className="justify-content-between align-items-center flex-column flex-xl-row" style={{ rowGap: 2 + 'rem' }}>


            <Card className="text-white mx-auto mx-sm-0 border-0">
              <Card.Img src="/images/Jhon_Quispe.jpg" alt="Jefe de Operaciones y Comercialización" />
              <Card.ImgOverlay className="d-none d-xl-flex flex-column align-items-center pt-6">
                <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('jhon_quispe_title1', { ns: 'general' })}
                    <span className="fs-4">{t('jhon_quispe_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title>
                <Card.Text className="mt-4">
                  {t('jhon_quispe_text', { ns: 'general' })}
                </Card.Text>

              </Card.ImgOverlay>
              <Card.Body className="d-xl-none text-black">
                {/* <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('jhon_quispe_title1', { ns: 'general' })}
                    <span className="fs-4"> {t('jhon_quispe_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4 text-justify--mobile">
                  {t('jhon_quispe_text', { ns: 'general' })}
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="text-white mx-auto mx-sm-0 border-0">
              <Card.Img src="/images/Hector_Gomez.jpg" alt="Gerente Legal y de Finanzas" />
              <Card.ImgOverlay className="d-none d-xl-flex flex-column align-items-center pt-6">
                <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('hector_gomez_title1', { ns: 'general' })}
                    <span className="fs-4"> {t('hector_gomez_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title>
                <Card.Text className="mt-4">
                  {t('hector_gomez_text', { ns: 'general' })}
                </Card.Text>

              </Card.ImgOverlay>
              <Card.Body className="d-xl-none text-black">
                {/* <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('hector_gomez_title1', { ns: 'general' })}
                    <span className="fs-4"> {t('hector_gomez_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4 text-justify--mobile">
                  {t('hector_gomez_text', { ns: 'general' })}
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="text-white mx-auto mx-sm-0 border-0">
              <Card.Img src="/images/Andre_Carneiro.jpg" alt="Jefe de Control" />
              <Card.ImgOverlay className="d-none d-xl-flex flex-column align-items-center pt-6">
                <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('andre_carneiro_title1', { ns: 'general' })}
                    <span className="fs-4">{t('andre_carneiro_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title>
                <Card.Text className="mt-4">
                  {t('andre_carneiro_text', { ns: 'general' })}
                </Card.Text>

              </Card.ImgOverlay>
              <Card.Body className="d-xl-none text-black">
                {/*  <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('andre_carneiro_title1', { ns: 'general' })}
                    <span className="fs-4"> {t('andre_carneiro_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4 text-justify--mobile">
                  {t('andre_carneiro_text', { ns: 'general' })}
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="text-white mx-auto mx-sm-0 border-0">
              <Card.Img src="/images/Rolando_Algarate.jpg" alt="Jefe de Control" />
              <Card.ImgOverlay className="d-none d-xl-flex flex-column align-items-center pt-6">
                <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('rolando_algarate_title1', { ns: 'general' })}
                    <span className="fs-4">{t('rolando_algarate_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title>
                <Card.Text className="mt-4">
                  {t('rolando_algarate_text', { ns: 'general' })}
                </Card.Text>

              </Card.ImgOverlay>
              <Card.Body className="d-xl-none text-black">
                {/* <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('rolando_algarate_title1', { ns: 'general' })}
                    <span className="fs-4"> {t('rolando_algarate_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4 text-justify--mobile">
                  {t('rolando_algarate_text', { ns: 'general' })}
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="text-white mx-auto mx-sm-0 border-0">
              <Card.Img src="/images/Oliver_Huaman.jpg" alt="Jefe de Permisos y Relaciones Comunitarias" />
              <Card.ImgOverlay className="d-none d-xl-flex flex-column align-items-center pt-6">
                <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('oliver_huaman_title1', { ns: 'general' })}
                    <span className="fs-4">{t('oliver_huaman_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title>
                <Card.Text className="mt-4">
                  {t('oliver_huaman_text', { ns: 'general' })}
                </Card.Text>

              </Card.ImgOverlay>
              <Card.Body className="d-xl-none text-black">
                {/* <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('oliver_huaman_title1', { ns: 'general' })}
                    <span className="fs-4"> {t('oliver_huaman_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4 text-justify--mobile">
                  {t('oliver_huaman_text', { ns: 'general' })}
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="text-white mx-auto mx-sm-0 border-0">
              <Card.Img src="/images/Darwin_Delgado.jpg" alt="Jefe de Control" />
              <Card.ImgOverlay className="d-none d-xl-flex flex-column align-items-center pt-6">
                <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('darwin_delgado_title1', { ns: 'general' })}
                    <span className="fs-4">{t('darwin_delgado_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title>
                <Card.Text className="mt-4">
                  {t('darwin_delgado_text', { ns: 'general' })}
                </Card.Text>

              </Card.ImgOverlay>
              <Card.Body className="d-xl-none text-black">
                {/* <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('darwin_delgado_title1', { ns: 'general' })}
                    <span className="fs-4"> {t('darwin_delgado_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4 text-justify--mobile">
                  {t('darwin_delgado_text', { ns: 'general' })}
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="text-white mx-auto mx-sm-0 border-0">
              <Card.Img src="/images/William_Medrano.jpg" alt="Jefe de Control" />
              <Card.ImgOverlay className="d-none d-xl-flex flex-column align-items-center pt-6">
                <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('william_medrano_title1', { ns: 'general' })}
                    <span className="fs-4">{t('william_medrano_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title>
                <Card.Text className="mt-4">
                  {t('william_medrano_text', { ns: 'general' })}
                </Card.Text>

              </Card.ImgOverlay>
              <Card.Body className="d-xl-none text-black">
                {/* <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('william_medrano_title1', { ns: 'general' })}
                    <span className="fs-4"> {t('william_medrano_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4 text-justify--mobile">
                  {t('william_medrano_text', { ns: 'general' })}
                </Card.Text>
              </Card.Body>
            </Card>



            <Card className="text-white mx-auto mx-sm-0 border-0">
              <Card.Img src="/images/Rafael_Farfan.jpg" alt="Jefe de Control" />
              <Card.ImgOverlay className="d-none d-xl-flex flex-column align-items-center pt-6">
                <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('rafael_farfan_title1', { ns: 'general' })}
                    <span className="fs-4">{t('rafael_farfan_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title>
                <Card.Text className="mt-4">
                  {t('rafael_farfan_text', { ns: 'general' })}
                </Card.Text>

              </Card.ImgOverlay>
              <Card.Body className="d-xl-none text-black">
                {/* <Card.Title className="fs-3 m-0 text-center">
                  <div className="d-flex flex-column">
                    {t('rafael_farfan_title1', { ns: 'general' })}
                    <span className="fs-4"> {t('rafael_farfan_title2', { ns: 'general' })}</span>
                  </div>
                </Card.Title> */}
                <Card.Text className="mt-4 text-justify--mobile">
                  {t('rafael_farfan_text', { ns: 'general' })}
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>

        </Container>

      </section>
    </div>
  )
}

export default DirectorioGerencia