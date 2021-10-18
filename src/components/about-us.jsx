import * as React from "react"
import HeroImage from "../images/we_are_sativa.png"

export function AboutUs() {
  return (
    <>
      <div
        className="hero section section-gradient center-xs"
        style={{ paddingTop: "2rem" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display mb-4 text-light text-shadow">
                We are Sativa
              </h1>
              <p className="font-lg text-dark hero-content">
                Somos una comunidad que busca crear espacios seguros para tener
                una libre expresión sobre el consumo responsable y recreativo
                del Cannabis.
              </p>
              <p className="font-lg text-dark hero-content">
                Tenemos una{" "}
                <a
                  href="https://www.instagram.com/highgaang/"
                  target="_blank"
                  rel="noreferrer"
                >
                  marca de lifestyle
                </a>
                ,{" "}
                <a
                  href="https://www.pachefest.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  un festival
                </a>
                , y un IG con contenido educativo*{" "}
                <span style={{ fontSize: 14 }}>
                  * que nos borraron 😢, pero volverá pronto en otro formato
                </span>
              </p>
              <a
                href="https://t.me/joinchat/CHYrw_NslEAwYjQx"
                target="_blank"
                rel="noreferrer"
                className="sativa-btn btn-green"
                style={{ marginRight: "1rem", marginBottom: "1rem" }}
              >
                Únete al Telegram
              </a>
              <a
                href="#newsletter"
                className="sativa-btn btn-purple"
                style={{ marginRight: "1rem", marginBottom: "1rem" }}
              >
                Suscríbete al newsletter
              </a>
              <span></span>
            </div>
            <div className="col-md-6">
              <img
                src={HeroImage}
                className="img-fluid mx-auto"
                width="550"
                alt="Ilustración de pareja"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
