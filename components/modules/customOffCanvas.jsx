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

      </Offcanvas.Header>
      <Offcanvas.Body>
        <Container fluid className="d-flex flex-column align-items-center g-0" style={{ rowGap: "2.5rem" }}>
          <Image className="idiomas-logo" src={`${process.env.NEXT_CDN}images/logo-alr.png`} alt="idiomas logo" />
          <div className="d-flex align-items-center" style={{ columnGap: 2 + 'rem' }}>
            {locale === 'en' ?
              <div className="d-flex" style={{ columnGap: 2 + 'rem' }}>
                <div className="d-flex align-items-center languageOption">
                  <Image src="/images/es-icon.svg" style={{ width: 28 + 'px' }} alt="es icon" />
                  {/* <p className="m-0 fw-600 lh-1">Spanish</p> */}
                </div>
                <div className="d-flex align-items-center languageOption languageOption--next">
                  <Image src={`${process.env.NEXT_CDN}images/fr-icon.svg`} style={{ width: 28 + 'px', height: 27 + 'px' }} alt="fr icon" />
                  {/* <p className="m-0 fw-600 lh-1">French</p> */}
                </div>
              </div>
              :
              locale === 'fr' ?
                <div className="d-flex" style={{ columnGap: 2 + 'rem' }}>
                  <div className="d-flex align-items-center languageOption">
                    <Image src={`${process.env.NEXT_CDN}images/en-icon.svg`} style={{ width: 28 + 'px' }} alt="en icon" />
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
                    <Image src={`${process.env.NEXT_CDN}images/fr-icon.svg`} style={{ width: 28 + 'px', height: 27 + 'px' }} alt="fr icon" />
                    {/* <p className="m-0 fw-600 lh-1">French</p> */}
                  </div>
                  <div className="d-flex align-items-center languageOption languageOption--next">
                    <Image src={`${process.env.NEXT_CDN}images/en-icon.svg`} style={{ width: 28 + 'px' }} alt="en icon" />
                    {/*  <p className="m-0 fw-600 lh-1">English</p> */}
                  </div>
                </div>
            }

            <Image src={`${process.env.NEXT_CDN}images/swap-icon.svg`} onClick={handleLocaleSwap} alt="swap icon" />
          </div>

          <ul className="list-unstyled m-0 fs-6 fw-light text-secondary">

            <li className="mb-3 lh-1" onClick={props.onHide}>
              <Link className="text-secondary lh-1" href="/">
                {t('sections.home', { ns: 'general' })}
              </Link>
            </li>
            <li className="mb-3 lh-1" onClick={props.onHide}>
              <div>
                <p className="text-secondary lh-1">

                  {t('sections.about_alr', { ns: 'general' })}

                </p>
                <ul className="list-unstyled m-0 ps-4">
                  <li className="mb-2">
                    <Link className="text-secondary lh-1" href="/nosotros">

                      {t('sections.about_us', { ns: 'general' })}

                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link className="text-secondary lh-1" href="/nosotros/directorio-y-gerencia">

                      {t('sections.board_of_directors_and_management', { ns: 'general' })}

                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mb-3 lh-1" onClick={props.onHide}>
              <div>
                <p className="text-secondary lh-1">

                  {t('sections.sustainability', { ns: 'general' })}

                </p>
                <ul className="list-unstyled m-0 ps-4">
                  <li className="mb-2">
                    <Link className="text-secondary lh-1" href="/sostenibilidad/responsabilidad-social">

                      {t('sections.social_responsability', { ns: 'general' })}

                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link className="text-secondary lh-1" href="/sostenibilidad/relacionamiento-comunitario">

                      {t('sections.community_relations', { ns: 'general' })}

                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link className="text-secondary lh-1" href="/sostenibilidad/monitoreo-ambiental">

                      {t('sections.environmental_monitoring', { ns: 'general' })}

                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link className="text-secondary lh-1" href="/sostenibilidad/manejo-de-residuos-solidos">

                      {t('sections.solid_waste_management', { ns: 'general' })}

                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link className="text-secondary lh-1" href="/sostenibilidad/seguridad-y-salud-ocupacional">

                      {t('sections.occupational_health_and_safety', { ns: 'general' })}

                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mb-3 lh-1" onClick={props.onHide}>

              <div>
                <p className="text-secondary lh-1">

                  {t('sections.operation', { ns: 'general' })}

                </p>
                <ul className="list-unstyled m-0 ps-4">
                  <li className="mb-2">
                    <Link className="text-secondary lh-1" href="/operacion/acumulacion-los-rosales">

                      {t('sections.alr_operation', { ns: 'general' })}

                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            {/* <li className="mb-3 lh-1" onClick={props.onHide}>
              <Link className="text-secondary lh-1" href="/prensa">

                {t('sections.press', { ns: 'general' })}

              </Link>
            </li> */}
            <li className="mb-3 lh-1" onClick={props.onHide}>
              <Link className="text-secondary lh-1" href="/politicas">

                {t('sections.policies', { ns: 'general' })}

              </Link>
            </li>

            <li className="lh-1" onClick={props.onHide}>
              <Link className="text-secondary lh-1" href="/contacto">

                {t('sections.contact_us', { ns: 'general' })}

              </Link>
            </li>

          </ul>

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

