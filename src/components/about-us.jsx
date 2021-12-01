import * as React from "react"

export function AboutUs() {
  return (
    <>
      <hr />
      <div className="about-container center-xs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display mb-4">We are High Gaang</h1>
              <div className="d-flex">
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
                  className="sativa-btn btn-green"
                  style={{ marginRight: "1rem", marginBottom: "1rem" }}
                >
                  Suscríbete al newsletter
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <p className="hero-content">
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
                <span style={{ fontSize: 14, display: 'block' }}>
                  * que nos borraron 😢, pero volverá pronto en otro formato
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
