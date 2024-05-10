import React, { useState, useEffect } from "react";
import { Container, Image, Breadcrumb } from "react-bootstrap";

import { useTranslation } from "react-i18next";
import Loader from "../../elements/Loader/Loader";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import CustomButton from "../../elements/CustomButton";

const ManejoResiduosSolidos = () => {
  const { height, width } = useWindowDimensions();

  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let transControl = t("transControl", {
      ns: "general",
      returnObjects: true,
    });

    if (typeof transControl !== "string" && !(transControl instanceof String)) {
      setLoading(false);
    }
  }, [t]);
  return (
    <>
      <Loader loading={loading} />
      <Container fluid className="manejoResiduosPage g-0">
        <div className="hero-container">
          <Image
            className="hero-image"
            src={`${process.env.NEXT_CDN}images/residuosSolidos.jpeg`}
            alt="Residuos solidos"
          />
        </div>

        <Container className="g-0 py-4 px-3">
          <div className="mb-4 text-center">
            <h1 className="fs-2 text-center text-primary">
              {t("dictionary.managementOf", { ns: "general" })}{" "}
              <span className="text-secondary">
                {t("dictionary.solid_waste", { ns: "general" })}
              </span>
            </h1>
            <Breadcrumb>
              <Breadcrumb.Item href="/">
                {t("sections.home", { ns: "general" })}
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">
                {t("sections.sustainability", { ns: "general" })}
              </Breadcrumb.Item>
              <Breadcrumb.Item
                href="/sostenibilidad/manejo-de-residuos-solidos"
                active
              >
                {t("sections.solid_waste_management", { ns: "general" })}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <p className="text-center">
            {t("sustainability_solid_waste_management_text_p1", {
              ns: "general",
            })}
          </p>

          <CustomButton
            href="/politicas"
            className="mx-auto"
            size={width >= 1200 ? "xxl" : "xl"}
            content={t("customButton.gotoPolicies", { ns: "general" })}
          />
        </Container>

        <Container fluid className="g-0 mt-4 mb-10">
          {/* <div className="bigContainer bg-primary w-100 w-custom1-75 position-relative pt-custom1-10 ps-custom1-15">
            <div className="w-65 pt-5 pt-custom1-0 mx-auto mx-custom1-0">
              <p className="text-white fs-5 lh-lg">
                {t('sustainability_solid_waste_management_text_p2', { ns: 'general' })}
              </p>

            </div>
            <div className="smallContainer pb-5 pb-custom1-0 position-custom1-absolute top-50 start-100 mx-auto mx-custom1-0">
              <Image src={`${process.env.NEXT_CDN}images/mision.jpg`} />
            </div>
          </div> */}
          <Image
            className="d-block w-100"
            src={`${process.env.NEXT_CDN}images/residuosSolidos.jpg`}
          />
        </Container>
      </Container>
    </>
  );
};

export default ManejoResiduosSolidos;
