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
            <h4 className="text-light text-shadow-sm">Sativa</h4>
            <h1 className="display text-light text-shadow">High Gang</h1>
            <p className="text-black mb-3">
              Colaboramos con mujeres creativas para crear colecciones
              temporales con diseños únicos y piezas hechas a mano
            </p>
            <a href="https://www.instagram.com/highgaang/" className="sativa-btn">
              Siguenos en @highgaang
            </a>
          </div>
        </div>
        <div className="image-grid-container container mt-5">
          <div className="row image-grid">
            <div className="col-lg-4">
              <a href="/tienda" className="image">
                <img src={Grid1} />
              </a>
            </div>
            <div className="col-lg-4">
              <a href="/tienda" className="image">
                <img src={Grid2} />
              </a>
            </div>
            <div className="col-lg-4">
              <a href="/tienda" className="image">
                <img src={Grid3} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <a href="/tienda" className="btn btn-primary btn-lg">
            Visitar tienda
          </a>
        </div>
      </div>
    </div>
  )
}
