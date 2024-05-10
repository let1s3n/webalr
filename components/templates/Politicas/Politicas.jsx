import React, { useState, useEffect } from "react";

import dynamic from "next/dynamic";

import { Container, Row, Col, Carousel, Image, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Loader from "../../elements/Loader/Loader";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const PdfViewer = dynamic(() => import("../../modules/pdfViewer"), {
  ssr: false,
});

const Politicas = () => {
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
      <section className="politicas-page">
        <section className="hero-section">
          <Carousel
            controls={width >= 1280 ? true : false}
            interval={null}
            className="h-100"
          >
            <Carousel.Item className="h-100">
              <Image
                className="hero-image"
                src={`${process.env.NEXT_CDN}images/politica2.jpg`}
                alt="Política 1"
              />
              <h1 className="hero-text position-absolute text-white w-100 trocchiRegular px-3">
                <span className="d-block mb-2">
                  {t("hero_text1", { ns: "general" })}
                </span>
                <span className="d-inline-block mb-2">
                  {t("hero_text2", { ns: "general" })}
                </span>{" "}
                <span className="d-inline-block text-secondary">
                  {t("hero_text3", { ns: "general" })}
                </span>
              </h1>
            </Carousel.Item>
            <Carousel.Item className="h-100">
              <Image
                className="hero-image"
                src={`${process.env.NEXT_CDN}images/nosotros2.jpg`}
                alt="Nosotros 2"
              />
              <h1 className="hero-text position-absolute text-white trocchiRegular">
                <span className="d-block bg-yellow2 bg-opacity-60 px-4 mb-2">
                  {t("hero_text4", { ns: "general" })}
                </span>
                <span className="d-inline-block bg-basic1 bg-opacity-40 px-4 mb-2">
                  {t("hero_text5", { ns: "general" })}
                </span>{" "}
                <br />
                <span className="d-inline-block bg-blue2 bg-opacity-60 px-4">
                  {t("hero_text6", { ns: "general" })}
                </span>
              </h1>
              <div className="hero-illustration">
                <Image
                  src={`${process.env.NEXT_CDN}images/hero-illustration.svg`}
                  alt="hero-illustration"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item className="h-100">
              <Image
                className="hero-image"
                src={`${process.env.NEXT_CDN}images/politica2.jpg`}
                alt="Política 2"
              />
              <h1 className="hero-text position-absolute text-white trocchiRegular">
                <span className="d-block bg-yellow2 bg-opacity-60 px-4 mb-2">
                  {t("hero_text4", { ns: "general" })}
                </span>
                <span className="d-inline-block bg-basic1 bg-opacity-40 px-4 mb-2">
                  {t("hero_text5", { ns: "general" })}
                </span>{" "}
                <br />
                <span className="d-inline-block bg-blue2 bg-opacity-60 px-4">
                  {t("hero_text6", { ns: "general" })}
                </span>
              </h1>
              <div className="hero-illustration">
                <Image
                  src={`${process.env.NEXT_CDN}images/hero-illustration.svg`}
                  alt="hero-illustration"
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </section>

        <Container fluid="md" className="py-10">
          <Row xs={1} xl={2} xxl={3} className="politicas-grid overflow-hidden">
            <Col className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-xl-center">
              <PdfViewer
                url={`${process.env.NEXT_CDN}politicas/Politica_de_Seguridad_Salud_y_MA16.12.21.pdf`}
                pageNumber={1}
              />
              <div
                className="d-flex flex-column px-2 text-center text-md-start h-100 position-relative justify-content-center"
                style={{ flex: 1 }}
              >
                <h5>{t("politicas_ssoma_title", { ns: "general" })}</h5>
                <p className="m-0">
                  <span>{t("politicas_fechaPub", { ns: "general" })}: </span>{" "}
                  {t("policies.pdf1", { ns: "general" })}
                </p>
                <p className="m-0">
                  <span>{t("politicas_tipo", { ns: "general" })}: </span> PDF
                </p>
                <p className="m-0">
                  <span>{t("politicas_peso", { ns: "general" })}: </span> 437 KB
                </p>
                <Button
                  variant="blue1"
                  size="sm"
                  className="download-btn text-white mt-3 w-md-50 mx-auto position-md-absolute start-50 translate-middle-md"
                  href={`${process.env.NEXT_CDN}politicas/Politica_de_Seguridad_Salud_y_MA16.12.21.pdf`}
                  target="_blank"
                  style={{ zIndex: 2 }}
                >
                  {t("politicas_descargar", { ns: "general" })}
                </Button>
              </div>
            </Col>

            <Col className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-xl-center">
              <PdfViewer
                url={`${process.env.NEXT_CDN}politicas/Politica_derechos_humanos_081221.pdf`}
                pageNumber={1}
              />
              <div
                className="d-flex flex-column px-2 text-center text-md-start h-100 position-relative justify-content-center"
                style={{ flex: 1 }}
              >
                <h5>{t("politicas_dh_title", { ns: "general" })}</h5>
                <p className="m-0">
                  <span>{t("politicas_fechaPub", { ns: "general" })}: </span>{" "}
                  {t("policies.pdf1", { ns: "general" })}
                </p>
                <p className="m-0">
                  <span>{t("politicas_tipo", { ns: "general" })}: </span> PDF
                </p>
                <p className="m-0">
                  <span>{t("politicas_peso", { ns: "general" })}: </span> 352 KB
                </p>
                <Button
                  variant="blue1"
                  size="sm"
                  className="download-btn text-white mt-3 w-md-50 mx-auto position-md-absolute start-50 translate-middle-md"
                  href={`${process.env.NEXT_CDN}politicas/Politica_derechos_humanos_081221.pdf`}
                  target="_blank"
                  style={{ zIndex: 2 }}
                >
                  {t("politicas_descargar", { ns: "general" })}
                </Button>
              </div>
            </Col>

            <Col className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-xl-center">
              <PdfViewer
                url={`${process.env.NEXT_CDN}politicas/Politica_inclusion_e_igualdad_laboral_13-12-2021.pdf`}
                pageNumber={1}
              />
              <div
                className="d-flex flex-column px-2 text-center text-md-start h-100 position-relative justify-content-center"
                style={{ flex: 1 }}
              >
                <h5>{t("politicas_inclusion_title", { ns: "general" })}</h5>
                <p className="m-0">
                  <span>{t("politicas_fechaPub", { ns: "general" })}: </span>{" "}
                  {t("policies.pdf1", { ns: "general" })}
                </p>
                <p className="m-0">
                  <span>{t("politicas_tipo", { ns: "general" })}: </span> PDF
                </p>
                <p className="m-0">
                  <span>{t("politicas_peso", { ns: "general" })}: </span> 279 KB
                </p>
                <Button
                  variant="blue1"
                  size="sm"
                  className="download-btn text-white mt-3 w-md-50 mx-auto position-md-absolute start-50 translate-middle-md"
                  href={`${process.env.NEXT_CDN}politicas/Politica_inclusion_e_igualdad_laboral_13-12-2021.pdf`}
                  target="_blank"
                  style={{ zIndex: 2 }}
                >
                  {t("politicas_descargar", { ns: "general" })}
                </Button>
              </div>
            </Col>

            <Col className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-xl-center">
              <PdfViewer
                url={`${process.env.NEXT_CDN}politicas/Politica_responsabilidad_social_y_rrcc101221.pdf`}
                pageNumber={1}
              />
              <div
                className="d-flex flex-column px-2 text-center text-md-start h-100 position-relative justify-content-center"
                style={{ flex: 1 }}
              >
                <h5>{t("politicas_RSyRC_title", { ns: "general" })}</h5>
                <p className="m-0">
                  <span>{t("politicas_fechaPub", { ns: "general" })}: </span>{" "}
                  {t("policies.pdf1", { ns: "general" })}
                </p>
                <p className="m-0">
                  <span>{t("politicas_tipo", { ns: "general" })}: </span> PDF
                </p>
                <p className="m-0">
                  <span>{t("politicas_peso", { ns: "general" })}: </span> 344 KB
                </p>
                <Button
                  variant="blue1"
                  size="sm"
                  className="download-btn text-white mt-3 w-md-50 mx-auto position-md-absolute start-50 translate-middle-md"
                  href={`${process.env.NEXT_CDN}politicas/Politica_responsabilidad_social_y_rrcc101221.pdf`}
                  target="_blank"
                  style={{ zIndex: 2 }}
                >
                  {t("politicas_descargar", { ns: "general" })}
                </Button>
              </div>
            </Col>

            <Col className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-xl-center">
              <PdfViewer
                url={`${process.env.NEXT_CDN}politicas/Politica_trabajo_forzoso_131221.pdf`}
                pageNumber={1}
              />
              <div
                className="d-flex flex-column px-2 text-center text-md-start h-100 position-relative justify-content-center"
                style={{ flex: 1 }}
              >
                <h5>
                  {t("politicas_trabajoForzoso_title", { ns: "general" })}
                </h5>
                <p className="m-0">
                  <span>{t("politicas_fechaPub", { ns: "general" })}: </span>{" "}
                  {t("policies.pdf1", { ns: "general" })}
                </p>
                <p className="m-0">
                  <span>{t("politicas_tipo", { ns: "general" })}: </span> PDF
                </p>
                <p className="m-0">
                  <span>{t("politicas_peso", { ns: "general" })}: </span> 269 KB
                </p>
                <Button
                  variant="blue1"
                  size="sm"
                  className="download-btn text-white mt-3 w-md-50 mx-auto position-md-absolute start-50 translate-middle-md"
                  href={`${process.env.NEXT_CDN}politicas/Politica_trabajo_forzoso_131221.pdf`}
                  target="_blank"
                  style={{ zIndex: 2 }}
                >
                  {t("politicas_descargar", { ns: "general" })}
                </Button>
              </div>
            </Col>

            <Col className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-xl-center">
              <PdfViewer
                url={`${process.env.NEXT_CDN}politicas/Politica_trabajo_infantil_081221.pdf`}
                pageNumber={1}
              />
              <div
                className="d-flex flex-column px-2 text-center text-md-start h-100 position-relative justify-content-center"
                style={{ flex: 1 }}
              >
                <h5>
                  {t("politicas_contraTrabajoInfantil_title", {
                    ns: "general",
                  })}
                </h5>
                <p className="m-0">
                  <span>{t("politicas_fechaPub", { ns: "general" })}: </span>{" "}
                  {t("policies.pdf1", { ns: "general" })}
                </p>
                <p className="m-0">
                  <span>{t("politicas_tipoe", { ns: "general" })}: </span> PDF
                </p>
                <p className="m-0">
                  <span>{t("politicas_peso", { ns: "general" })}: </span> 270 KB
                </p>
                <Button
                  variant="blue1"
                  size="sm"
                  className="download-btn text-white mt-3 w-md-50 mx-auto position-md-absolute start-50 translate-middle-md"
                  href={`${process.env.NEXT_CDN}politicas/Politica_trabajo_infantil_081221.pdf`}
                  target="_blank"
                  style={{ zIndex: 2 }}
                >
                  {t("politicas_descargar", { ns: "general" })}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Politicas;
