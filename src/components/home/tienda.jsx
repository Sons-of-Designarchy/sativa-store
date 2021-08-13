import * as React from "react"
import Grid1 from "../../images/home/grid-1.jpg"
import Grid2 from "../../images/home/grid-2.jpg"
import Grid3 from "../../images/home/grid-3.jpg"

export function HomeTienda() {
  return (
    <div className="section section-sky">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h3 className="text-light text-shadow-sm mb-0">Sativa</h3>
            <h1 className="display text-light text-shadow">High Gang</h1>
            <p className="text-black mb-3">
              Diseñamos ropa para todxs lxs amantes de las flores y el arte 🌱
              <br />
              Nos gusta crear colecciones e invitar a artistas a colaborar en
              ellas✨
            </p>
            <div className="d-flex sativa-btn-group justify-content-center">
              <a
                href="https://www.instagram.com/highgaang/"
                target="_blank"
                rel="noreferrer"
                className="sativa-btn"
              >
                Siguenos en @highgaang
              </a>
            </div>
          </div>
        </div>
        <div className="image-grid-container container mt-5">
          <div className="row image-grid">
            <div className="col-4">
              <a href="/search/?s=BEST_SELLING" className="image">
                <img src={Grid1} alt="Hombre con playera" />
              </a>
            </div>
            <div className="col-4">
              <a href="/search/?s=BEST_SELLING" className="image">
                <img src={Grid2} alt="Chica con mascada" />
              </a>
            </div>
            <div className="col-4">
              <a href="/search/?s=BEST_SELLING" className="image">
                <img src={Grid3} alt="Chica con playera" />
              </a>
            </div>
          </div>
          <div className="mt-5">
            <a
              href="/search/?s=BEST_SELLING"
              className="sativa-btn btn-purple btn-xs-block"
              style={{ marginRight: "1rem" }}
            >
              Visitar tienda en linea
            </a>
          </div>
        </div>
        <div className="mt-5"></div>
      </div>
    </div>
  )
}
