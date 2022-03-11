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
        <Button variant="link" className="btn-close" aria-label="Close" onClick={props.onHide} style={{ zIndex: 2 }}>
          <Image src="/images/btn-close.svg"></Image>
        </Button>
        {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Container fluid className="d-flex flex-column align-items-center">
          <Image className="idiomas-logo mb-5" src="/images/logo-alr.png" />
          <div className="d-flex align-items-center mb-6" style={{ columnGap: 1 + 'rem' }}>
            {locale === 'en' ?
              <>
                <Image src="/images/es-icon.svg" style={{ width: 28 + 'px' }} />
                <p className="m-0 fw-600">Spanish</p>
                <Image src="/images/fr-icon.svg" style={{ width: 28 + 'px', height: 27 + 'px' }} />
                <p className="m-0 fw-600">French</p>
              </>
              :
              locale === 'fr' ?
                <>
                  <Image src="/images/en-icon.svg" style={{ width: 28 + 'px' }} />
                  <p className="m-0 fw-600">English</p>
                  <Image src="/images/es-icon.svg" style={{ width: 28 + 'px' }} />
                  <p className="m-0 fw-600">Spanish</p>
                </>
                :
                <>
                  <Image src="/images/fr-icon.svg" style={{ width: 28 + 'px', height: 27 + 'px' }} />
                  <p className="m-0 fw-600">French</p>
                  <Image src="/images/en-icon.svg" style={{ width: 28 + 'px' }} />
                  <p className="m-0 fw-600">English</p>

                </>
            }

            <Image src="/images/swap-icon.svg" onClick={handleLocaleSwap} />
          </div>
          <ul className="list-unstyled m-0 text-center mb-8 fs-2 fw-light text-secondary">
            <li className="mb-4" onClick={props.onHide}>
              <Link href="/">
                <a className="text-secondary">
                  Home {/* <Image className="d-block mx-auto" src="/images/divider.svg" style={{ width: 100 + 'px' }} /> */}
                </a>
              </Link>
            </li>
            <li className="mb-4" onClick={props.onHide}>
              <Link href="/nosotros">
                <a className="text-secondary">
                  {t('offCanvas_about_us')}
                </a>
              </Link>
            </li>
            <li className="mb-4" onClick={props.onHide}>
              <Link href="/politicas">
                <a className="text-secondary">
                  {t('offCanvas_policies')}
                </a>
              </Link>
            </li>

            <li className="mb-4" onClick={props.onHide}>
              <Link href="/responsabilidad">
                <a className="text-secondary">
                  {t('offCanvas_responsibility')}
                </a>
              </Link>
            </li>
            <li className="mb-4" onClick={props.onHide}>
              <Link href="/contacto">
                <a className="text-secondary">
                  {t('offCanvas_contact_us')}
                </a>
              </Link>
            </li>
          </ul>
          <div className="d-flex flex-column">
            <p className="m-0 fs-5 fw-600">{t('offCanvas_followUs')}</p>
            <div className="d-flex">
              <Image src="/images/linkedin-icon.svg" />
              <Image src="/images/facebook-icon.svg" />
            </div>
          </div>
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

