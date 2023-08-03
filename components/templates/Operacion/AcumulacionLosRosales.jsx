import React, { useState, useEffect } from 'react'
import { Container, Image, Breadcrumb } from 'react-bootstrap'

import { useTranslation } from "react-i18next";


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import Loader from '../../elements/Loader/Loader'
import useWindowDimensions from "../../../hooks/useWindowDimensions";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const AcumulacionLosRosales = () => {

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
      <Container fluid className="operacionAcumulacionPage g-0">

        <div className="hero-container">
          {/* <Image
            className="hero-image"
            src={`${process.env.NEXT_CDN}images/politica1.jpg`}
            alt="Política 1"
          /> */}
          <Image
            className="hero-image"
            src={`${process.env.NEXT_CDN}images/fotoNoche1.jpg`}
            alt="Hero 2"
          />
        </div>
        <Container className="py-4 px-3 g-0">
          {/* <h1>Acumulación Los Rosales</h1> */}

          <div className="mb-4  d-flex flex-column align-items-center">
            <h1 className="fs-2 text-center text-primary">
              {/* {t('dictionary.weAre2', { ns: 'general' })} */}
              ACUMULACIÓN LOS ROSALES
            </h1>
            <Breadcrumb>
              <Breadcrumb.Item href="/">{t('sections.home', { ns: 'general' })}</Breadcrumb.Item>
              <Breadcrumb.Item href="#">
                {t('sections.operation', { ns: 'general' })}
              </Breadcrumb.Item>
              <Breadcrumb.Item href="/operacion/acumulacion-los-rosales" active>{t('sections.alr_operation', { ns: 'general' })}</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eius incidunt</p> */}
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
              1200: {
                spaceBetween: 50,
                slidesPerView: 3
              }
            }}

          >
            <SwiperSlide>
              <Image
                className="hero-image"
                src={`${process.env.NEXT_CDN}images/fotoNoche1.jpg`}
                alt="Foto noche 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="hero-image"
                src={`${process.env.NEXT_CDN}images/fotoOperacion1.jpg`}
                alt="Foto operacion 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="hero-image"
                src={`${process.env.NEXT_CDN}images/fotoOperacion2.jpg`}
                alt="Foto operacion 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="hero-image"
                src={`${process.env.NEXT_CDN}images/fotoOperacion3.jpg`}
                alt="Foto operacion 3"
              />
            </SwiperSlide>
            {/* <SwiperSlide>
              <Image
                className="hero-image"
                src={`${process.env.NEXT_CDN}images/politica1.jpg`}
                alt="Política 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="hero-image"
                src={`${process.env.NEXT_CDN}images/politica2.jpg`}
                alt="Política 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="hero-image"
                src={`${process.env.NEXT_CDN}images/politica1.jpg`}
                alt="Política 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="hero-image"
                src={`${process.env.NEXT_CDN}images/politica2.jpg`}
                alt="Política 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="hero-image"
                src={`${process.env.NEXT_CDN}images/politica1.jpg`}
                alt="Política 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="hero-image"
                src={`${process.env.NEXT_CDN}images/politica2.jpg`}
                alt="Política 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="hero-image"
                src={`${process.env.NEXT_CDN}images/politica1.jpg`}
                alt="Política 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="hero-image"
                src={`${process.env.NEXT_CDN}images/politica2.jpg`}
                alt="Política 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="hero-image"
                src={`${process.env.NEXT_CDN}images/politica1.jpg`}
                alt="Política 1"
              />
            </SwiperSlide> */}
          </Swiper>
        </Container>
      </Container>
    </>
  )
}

export default AcumulacionLosRosales