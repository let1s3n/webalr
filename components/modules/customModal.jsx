import { useEffect, useState } from 'react';
import { Modal, Button, Image } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useTranslation } from "react-i18next";
import Loader from '../elements/Loader/Loader'


function CustomModal(props) {
  const router = useRouter();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let transControl = t('transControl', { ns: 'general', returnObjects: true })

    console.log("transControl: ", transControl)

    if (typeof transControl !== 'string' && !(transControl instanceof String)) {
      setLoading(false);
    }

  }, [t])

  const handleLocaleChange = (e) => {
    document.cookie = `i18next=${e.target.closest("[data-locale]").dataset.locale}`;
    router.reload(window.location.pathname);

  }

  return (
    <>
      <Loader loading={loading} />
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="position-absolute top-0 start-0 border border-primary2 border-1 rounded-circle translate-middle" style={{ width: 150 + 'px', height: 150 + 'px' }}></div>
        <div className="position-absolute top-100 start-100 border border-primary2 border-1 rounded-circle translate-middle" style={{ width: 150 + 'px', height: 150 + 'px' }}></div>

        <Modal.Header className="border-0" style={{ marginLeft: 45 + 'px', marginRight: 45 + 'px' }}>
          <Button variant="link" className="btn-close" aria-label="Close" onClick={props.onHide}>
            <Image src="/images/btn-close.svg" alt="btn close"></Image>
          </Button>

        </Modal.Header>
        <Modal.Body className="text-center pt-0" style={{ paddingBottom: 5 + 'rem' }}>
          <Image className="idiomas-logo mb-3" src={`${process.env.CDN}images/logo-alr.png`}
            alt="idiomas logo" />
          <p className="mb-3 fs-md-5">
            {t('choose_language', { ns: 'general' })}
          </p>
          <div className="d-flex flex-column align-items-center" style={{ rowGap: 1 + 'rem' }}>
            <div className="d-flex align-items-center gap-3 pe-1" style={{ columnGap: 1 + 'rem', cursor: 'pointer', width: 116 + 'px' }} onClick={handleLocaleChange} data-locale="en">

              <Image src="/images/en-icon.svg" style={{ width: 28 + 'px' }} alt="en icon" />
              <p className="m-0 fs-md-5">English</p>
            </div>
            <div className="d-flex align-items-center gap-3" style={{ columnGap: 1 + 'rem', cursor: 'pointer', width: 116 + 'px' }} onClick={handleLocaleChange} data-locale="es">
              <Image src="/images/es-icon.svg" style={{ width: 28 + 'px' }} alt="es icon" />
              <p className="m-0 fs-md-5">Spanish</p>
            </div>
            <div className="d-flex align-items-center gap-3" style={{ columnGap: 1 + 'rem', cursor: 'pointer', width: 116 + 'px' }} onClick={handleLocaleChange} data-locale="fr">
              <Image src="/images/fr-icon.svg" style={{ width: 28 + 'px', height: 27 + 'px' }} alt="fr icon" />
              <p className="m-0 fs-md-5">French</p>
            </div>
          </div>
        </Modal.Body>

        <style global jsx>{`
      .modal-content{
        background-image:url(/images/modal-fondo.png);
        border-radius:47px;
        overflow:hidden;
      }
        .modal-backdrop.show{
          background-color:#427AA1;
          opacity:.9;
        }
        
      `}</style>
      </Modal>
    </>
  );
}

export default CustomModal;