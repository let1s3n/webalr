import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Carousel } from 'react-bootstrap'
import useWindowDimensions from "../hooks/useWindowDimensions";
export default function Home() {
  const { height, width } = useWindowDimensions();
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <title>SMRL Acumulación Los Rosales</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <meta name="title" content="SMRL Acumulación Los Rosales" />
        <meta name="description" content="Peruanos en busca de la excelencia haciendo minería responsable." />
        <meta name="keywords" content="minera, minería, acumulación los rosales, minería responsable, minería peruana" />
      </Head>
      <section className="hero-section">
        <Carousel controls={width >= 1440 ? true : false} interval={null} className="h-100">
          <Carousel.Item className="h-100">
            <Image
              className="hero-image"
              src="/images/hero.jpg"
              alt="Foto de la planta"
              layout="fill"
              objectFit="cover"
              objectPosition="left top"

            />
            <h1 className="hero-text position-absolute text-white">
              <span className="d-block bg-yellow2 bg-opacity-60 fw-normal px-4 mb-2">PERUANOS EN BUSCA DE LA EXCELENCIA</span>
              <span className="d-inline-block bg-basic1 bg-opacity-40 fw-600 px-4 mb-2">HACIENDO</span> <br />
              <span className="d-inline-block fw-bolder bg-blue2 bg-opacity-60 px-4">MINERÍA RESPONSABLE</span>
            </h1>
            <div className="hero-illustration">
              <Image
                src="/images/hero-illustration.svg"
                alt='hero-illustration'
                layout='fill'
                objectFit='cover'
                objectPosition="left top"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item className="h-100">
            <Image
              className="hero-image"
              src="/images/hero.jpg"
              alt="Foto de la planta"
              layout="fill"
              objectFit="cover"
              objectPosition="left top"

            />
            <h1 className="hero-text position-absolute text-white">
              <span className="d-block bg-yellow2 bg-opacity-60 fw-normal px-4">PERUANOS EN BUSCA DE LA EXCELENCIA</span>
              <span className="d-inline-block bg-basic1 bg-opacity-40 fw-600 px-4">HACIENDO</span> <br />
              <span className="d-inline-block fw-bolder bg-blue2 bg-opacity-60 px-4">MINERÍA RESPONSABLE</span>
            </h1>
            <div className="hero-illustration">
              <Image
                src="/images/hero-illustration.svg"
                alt='hero-illustration'
                layout='fill'
                objectFit='cover'
                objectPosition="left top"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="quienes-somos">
        <h1>Hola mundo</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, fuga vero beatae qui ratione explicabo, quia nulla accusantium reprehenderit nisi rem earum dicta consequuntur culpa ipsam ab inventore asperiores quisquam.
          <Link href="/proyectos">
            <a>
              click aqui para ir a proyectos
            </a>
          </Link>
        </p>
      </section>
      <section className="mision"></section>
      <section className="novedades"></section>


    </>
  )
}
