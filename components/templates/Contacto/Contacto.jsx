import React, { useEffect,useState } from 'react'
import { Container } from 'react-bootstrap'
import i18n from "i18next";
import { useTranslation } from "react-i18next";

import CustomForm from '../../modules/customForm'


import Loader from '../../elements/Loader/Loader'
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Contacto = () => {

  const { height, width } = useWindowDimensions();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let transControl = t('transControl', { ns: 'general', returnObjects: true })

    if (typeof transControl !== 'string' && !(transControl instanceof String)) {
      setLoading(false);
    }

  }, [t])

  return (
    <>
      <Loader loading={loading} />
      <section className="contacto-page py-5 py-custom1-10">
        <Container fluid="md">
          <CustomForm />
        </Container>
      </section>
    </>
  )
}

export default Contacto