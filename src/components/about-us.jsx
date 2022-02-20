import * as React from "react"
import Instagram from "../images/social/ig-dark.svg"

export function AboutUs() {
  return (
    <>
      <div className="section center-xs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display mb-4">We are High Gaang</h1>
            </div>
            <div className="col-md-6">
              <p className="hero-content mb-4">
                Somos una comunidad que busca crear espacios seguros para tener
                una libre expresión sobre el consumo responsable y recreativo
                del Cannabis.
              </p>
              <p className="">
                Colaboramos con artistas y productores locales para crear una{" "}
                <a
                  href="https://www.instagram.com/highgaang/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-underline"
                >
                  marca de lifestyle
                </a>
                ,{" "}
                <a
                  href="https://www.pachefest.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-underline"
                >
                  un festival
                </a>
                , y un IG con contenido educativo*{" "}
                <span style={{ fontSize: 14, display: 'block' }}>
                  * que nos borraron 😢, pero volverá pronto en otro formato
                </span>
              </p>
              <div className="d-lg-none mt-4">
                <a
                  href="https://www.instagram.com/highgaang/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-lg"
                >
                  <img src={Instagram} style={{ width: "0.75rem", marginRight: 8 }} />
                  highgaang
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
