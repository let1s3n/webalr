import { Modal, Button, Image } from 'react-bootstrap';
import {useRouter} from 'next/router';
function CustomModal(props) {
  const router = useRouter();
  const handleLocaleChange = (e) => {
    
    /* console.log(e.target.closest("[data-locale]").dataset.locale) */
    document.cookie = `i18next=${e.target.closest("[data-locale]").dataset.locale}`;
    router.reload(window.location.pathname);
  }
  return (
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
          <Image src="/images/btn-close.svg"></Image>
        </Button>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body className="text-center pt-0" style={{ paddingBottom: 5 + 'rem' }}>
        <Image className="idiomas-logo mb-2" src="/images/logo-alr.png" />
        <p className="mb-3 fs-md-5">
          Choose your lenguage
        </p>
        <div className="d-flex flex-column align-items-center" style={{ rowGap: 1 + 'rem' }}>
          <div className="d-flex align-items-center gap-3 pe-1" style={{ columnGap: 1 + 'rem' }} onClick={handleLocaleChange} data-locale="en" style={{cursor:'pointer'}}>
            <Image src="/images/en-icon.svg"/>
            <p className="m-0 fs-md-5">English</p>
          </div>
          <div className="d-flex align-items-center gap-3" style={{ columnGap: 1 + 'rem' }} onClick={handleLocaleChange} data-locale="es" style={{cursor:'pointer'}}>
            <Image src="/images/es-icon.svg" />
            <p className="m-0 fs-md-5">Spanish</p>
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}

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
        /* .modal-dialog{
          margin:.5rem 1rem;
        } */
      `}</style>
    </Modal>
  );
}

export default CustomModal;