import React, { useState, useEffect } from 'react'
import { Container, Image, Button, Offcanvas } from 'react-bootstrap';
import Link from 'next/link'

import cookieCutter from 'cookie-cutter'
import { useRouter } from 'next/router';
import { useTranslation } from "react-i18next";

function CustomOffCanvas(props) {
  const router = useRouter();
  const [locale, setLocale] = useState('');
  useEffect(() => {
    let cookie = cookieCutter.get('i18next');
    setLocale(cookie);

  }, [])


  const handleLocaleSwap = () => {
    document.cookie = `i18next=${locale === 'es' ? 'en' : locale === 'en' ? 'fr' : 'es'}`;
    router.reload(window.location.pathname);
  }
  const { t } = useTranslation();
  return (
    <Offcanvas {...props}>
      <div className="position-absolute top-0 start-0 border border-primary2 border-1 rounded-circle translate-middle" style={{ width: 150 + 'px', height: 150 + 'px' }}></div>
      <div className="position-absolute top-100 start-100 border border-primary2 border-1 rounded-circle translate-middle" style={{ width: 150 + 'px', height: 150 + 'px' }}></div>
      <Offcanvas.Header>
        <Button variant="link" className="btn-close p-0" aria-label="Close" onClick={props.onHide} style={{ zIndex: 2 }}>
          <Image src="/images/btn-close.svg" alt="btn close" ></Image>
        </Button>
        {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Container fluid className="d-flex flex-column align-items-center g-0">
          <Image className="idiomas-logo mb-4" src="/images/logo-alr.png" alt="idiomas logo" />
          <div className="d-flex align-items-center mb-5" style={{ columnGap: 2 + 'rem' }}>
            {locale === 'en' ?
              <div className="d-flex" style={{ columnGap: 2 + 'rem' }}>
                <div className="d-flex align-items-center languageOption">
                  <Image src="/images/es-icon.svg" style={{ width: 28 + 'px' }} alt="es icon" />
                  {/* <p className="m-0 fw-600 lh-1">Spanish</p> */}
                </div>
                <div className="d-flex align-items-center languageOption languageOption--next">
                  <Image src="/images/fr-icon.svg" style={{ width: 28 + 'px', height: 27 + 'px' }} alt="fr icon" />
                  {/* <p className="m-0 fw-600 lh-1">French</p> */}
                </div>
              </div>
              :
              locale === 'fr' ?
                <div className="d-flex" style={{ columnGap: 2 + 'rem' }}>
                  <div className="d-flex align-items-center languageOption">
                    <Image src="/images/en-icon.svg" style={{ width: 28 + 'px' }} alt="en icon" />
                    {/* <p className="m-0 fw-600 lh-1">English</p> */}
                  </div>
                  <div className="d-flex align-items-center languageOption languageOption--next">
                    <Image src="/images/es-icon.svg" style={{ width: 28 + 'px' }} alt="es icon" />
                    {/* <p className="m-0 fw-600 lh-1">Spanish</p> */}
                  </div>
                </div>
                :
                <div className="d-flex" style={{ columnGap: 2 + 'rem' }}>
                  <div className="d-flex align-items-center languageOption">
                    <Image src="/images/fr-icon.svg" style={{ width: 28 + 'px', height: 27 + 'px' }} alt="fr icon" />
                    {/* <p className="m-0 fw-600 lh-1">French</p> */}
                  </div>
                  <div className="d-flex align-items-center languageOption languageOption--next">
                    <Image src="/images/en-icon.svg" style={{ width: 28 + 'px' }} alt="en icon" />
                    {/*  <p className="m-0 fw-600 lh-1">English</p> */}
                  </div>
                </div>
            }

            <Image src="/images/swap-icon.svg" onClick={handleLocaleSwap} alt="swap icon" />
          </div>

          <ul className="list-unstyled m-0 mb-6 fs-6 fw-light text-secondary">

            <li className="mb-3 lh-1" onClick={props.onHide}>
              <Link className="text-secondary lh-1" href="/">
                {t('nav_bar.home', { ns: 'general' })}
              </Link>
            </li>
            <li className="mb-3 lh-1" onClick={props.onHide}>
              <div>
                <p className="text-secondary lh-1">

                  {t('offCanvas_about_us', { ns: 'general' })}

                </p>
                <ul className="list-unstyled m-0 ps-4">
                  <li className="mb-2">
                    <Link className="text-secondary lh-1" href="/nosotros">

                      Quienes Somos

                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link className="text-secondary lh-1" href="/nosotros/directorio-y-gerencia">

                      Directorio y Gerencia

                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mb-3 lh-1" onClick={props.onHide}>
              <div>
                <p className="text-secondary lh-1">

                  Sostenibilidad

                </p>
                <ul className="list-unstyled m-0 ps-4">
                  <li className="mb-2">
                    <Link className="text-secondary lh-1" href="/sostenibilidad/responsabilidad-social">

                      Responsabilidad

                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link className="text-secondary lh-1" href="/sostenibilidad/monitoreo-ambiental">

                      Monitoreo Ambiental

                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link className="text-secondary lh-1" href="/sostenibilidad/manejo-de-residuos-solidos">

                      Manejo de residuos sólidos

                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link className="text-secondary lh-1" href="/sostenibilidad/seguridad-y-salud-ocupacional">

                      Seguridad y Salud Ocupacional

                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mb-3 lh-1" onClick={props.onHide}>

              <div>
                <p className="text-secondary lh-1">

                  Operación

                </p>
                <ul className="list-unstyled m-0 ps-4">
                  <li className="mb-2">
                    <Link className="text-secondary lh-1" href="/operacion/acumulacion-los-rosales">

                      Acumulación Los Rosales

                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mb-3 lh-1" onClick={props.onHide}>
              <Link className="text-secondary lh-1" href="/prensa">

                Prensa

              </Link>
            </li>
            <li className="mb-3 lh-1" onClick={props.onHide}>
              <Link className="text-secondary lh-1" href="/politicas">

                {t('offCanvas_policies', { ns: 'general' })}

              </Link>
            </li>

            <li className="lh-1" onClick={props.onHide}>
              <Link className="text-secondary lh-1" href="/contacto">

                {t('offCanvas_contact_us', { ns: 'general' })}

              </Link>
            </li>

          </ul>

          {/* <div className="d-flex flex-column" style={{ rowGap: ".5rem" }}>
            <p className="m-0 fs-5 fw-600 lh-1 text-center">{t('offCanvas_followUs', { ns: 'general' })}</p>
            <div className="d-flex">
              <Image src="/images/linkedin-icon.svg" alt="linkedin icon" />
              <Image src="/images/facebook-icon.svg" alt="facebook icon" />
            </div>
          </div> */}
        </Container>
      </Offcanvas.Body>
      <style global jsx>{`
      .offcanvas-start{
        background-image:url(/images/modal-fondo.png);
        width:100%;
        overflow:hidden;
      }
      
      `}</style>
    </Offcanvas>
  );
}

export default CustomOffCanvas;

