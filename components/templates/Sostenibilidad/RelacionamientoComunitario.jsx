import React, { useState, useEffect } from "react";
import { Container, Image, Breadcrumb } from "react-bootstrap";

import { useTranslation } from "react-i18next";
import Loader from "../../elements/Loader/Loader";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import CustomButton from "../../elements/CustomButton";
const RelacionamientoComunitario = () => {
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
      <Container fluid className="responsabilidadSocialPage g-0">
        <div className="hero-container">
          <Image
            className="hero-image"
            src={`${process.env.NEXT_CDN}images/relacionamientoComunitario.jpg`}
            alt="Relacionamiento Comunitario"
          />
        </div>

        <Container className="g-0 py-4 px-3">
          <div className="mb-4 text-center">
            <h1 className="fs-2 text-center text-primary">
              {t("dictionary.relations", { ns: "general" })}{" "}
              <span className="text-secondary">
                {t("dictionary.community", { ns: "general" })}
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
                href="/sostenibilidad/relacionamiento-comunitario"
                active
              >
                {t("sections.community_relations", { ns: "general" })}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <p className="text-center">
            {t("sustainability_social_community_relations_text_p1", {
              ns: "general",
            })}
          </p>

          <CustomButton
            href="/politicas"
            className="mx-auto my-5"
            size={width >= 1200 ? "xxl" : "xl"}
            content={t("customButton.gotoPolicies", { ns: "general" })}
          />
        </Container>

        <Container fluid className="g-0 mt-4 mb-10">
          <Image
            className="d-block w-100"
            src={`${process.env.NEXT_CDN}images/relacionesComunitarias.jpg`}
          />
        </Container>
      </Container>
    </>
  );
};

export default RelacionamientoComunitario;
