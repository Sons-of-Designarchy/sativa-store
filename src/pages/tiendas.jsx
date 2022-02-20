import * as React from "react"
import { Layout } from "../components/layout"
import Hipnosis from "../images/tiendas/hipnosis.jpg"
import Incendiarias from "../images/tiendas/incendiarias.jpg"
import ChicksVsStigma from "../images/tiendas/chicks.png"
import { homepageUrl } from "."

export default function Tiendas() {
  return (
    <Layout
      headerBottom={
        <a href={homepageUrl} className="app-header-link">
          ← Volver al inicio
        </a>
      }
    >
      <div className="section pb-4">
        <div className="container">
          <h1 className="mb-5">Descúbrenos en estas tiendas</h1>
          <div className="row mb-5">
            <div className="col-lg-4">
              <img src={Incendiarias} className="img-fluid mb-3" />
              <h3 className="mb-2">Incendiarias</h3>
              <p className="font-sm mb-3">
                Calle Marsella 60, Juárez, Cuauhtémoc, 06030 Ciudad de México,
                CDMX
              </p>
              <a
                href="https://www.instagram.com/incendiarias__/"
                target="_blank"
                className="btn d-inline-block"
              >
                @incendiarias__
              </a>
            </div>
            <div className="col-lg-4">
              <img src={ChicksVsStigma} className="img-fluid mb-3" />
              <h3 className="mb-2">Chiks vs stigma</h3>
              <p className="font-sm mb-3">
                Av Nuevo León 284-local B, Hipódromo, Cuauhtémoc, 06170, CDMX
              </p>
              <a
                href="https://www.instagram.com/chicksvsstigma"
                target="_blank"
                className="btn d-inline-block"
              >
                @CHICKSVSSTIGMA
              </a>
            </div>
            <div className="col-lg-4">
              <img src={Hipnosis} className="img-fluid mb-3" />
              <h3 className="mb-2">Tienda Hipnosis</h3>
              <p className="font-sm mb-3">
                Zacatecas 39, Roma Norte, Cuauhtémoc, 06700, CDMX
              </p>
              <a
                href="https://www.instagram.com/hipnosismx/"
                target="_blank"
                className="btn d-inline-block"
              >
                @HIPNOSISMX
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="section">
        <div className="container">
          <p className="text-center">¿Te interesa tener High Gaang en tu tienda o evento? <a href="mailto:hola.sativa.mx@gmail.com">Contáctanos</a></p>
        </div>
      </div>
    </Layout>
  )
}
