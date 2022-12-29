import React, { useState, useEffect } from 'react'
import { Container, Image } from 'react-bootstrap'

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
        <Container className="py-4 g-0">
          <h1>Acumulación Los Rosales</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eius incidunt</p>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <Image
                className="hero-image"
                src="/images/politica2.jpg"
                alt="Política 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="hero-image"
                src="/images/politica1.jpg"
                alt="Política 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="hero-image"
                src="/images/politica2.jpg"
                alt="Política 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="hero-image"
                src="/images/politica1.jpg"
                alt="Política 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="hero-image"
                src="/images/politica2.jpg"
                alt="Política 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="hero-image"
                src="/images/politica1.jpg"
                alt="Política 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="hero-image"
                src="/images/politica2.jpg"
                alt="Política 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="hero-image"
                src="/images/politica1.jpg"
                alt="Política 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="hero-image"
                src="/images/politica2.jpg"
                alt="Política 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="hero-image"
                src="/images/politica1.jpg"
                alt="Política 1"
              />
            </SwiperSlide>
          </Swiper>
        </Container>
      </Container>
    </>
  )
}

export default AcumulacionLosRosales