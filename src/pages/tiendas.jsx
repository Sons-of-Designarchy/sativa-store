import * as React from "react"
import { Layout } from "../components/layout"
import Hipnosis from "../images/tiendas/hipnosis.jpg"
import Incendiarias from "../images/tiendas/incendiarias.jpg"
import ChicksVsStigma from "../images/tiendas/chicks.png"
import Les from "../images/tiendas/les.jpg"
import Mar from "../images/tiendas/mar.jpg"
import Oxen from "../images/tiendas/oxen.jpg"
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
          <h1 className="mb-5">Encuentra nuestros productos en las tiendas distribuidoras</h1>
          <div className="row">
            <div className="col-lg-4 mb-5">
              <img src={Incendiarias} className="img-fluid mb-3" />
              <h3 className="mb-2">Incendiarias - CDMX</h3>
              <p className="font-sm mb-3">
                Calle Marsella 60, Juárez
              </p>
              <a
                href="https://www.instagram.com/incendiarias__/"
                target="_blank"
                className="btn d-inline-block"
              >
                @incendiarias__
              </a>
            </div>
            <div className="col-lg-4 mb-5">
              <img src={ChicksVsStigma} className="img-fluid mb-3" />
              <h3 className="mb-2">Chiks vs stigma - CDMX</h3>
              <p className="font-sm mb-3">
                Av Nuevo León 284-local B, Hipódromo
              </p>
              <a
                href="https://www.instagram.com/chicksvsstigma"
                target="_blank"
                className="btn d-inline-block"
              >
                @CHICKSVSSTIGMA
              </a>
            </div>
            <div className="col-lg-4 mb-5">
              <img src={Hipnosis} className="img-fluid mb-3" />
              <h3 className="mb-2">Tienda Hipnosis - CDMX</h3>
              <p className="font-sm mb-3">
                Zacatecas 39, Roma Norte
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
          <div className="row">
            <div className="col-lg-4 mb-5">
              <img src={Les} className="img-fluid mb-3" />
              <h3 className="mb-2">Le Sisteret’s - CDMX</h3>
              <p className="font-sm mb-3">
                Barrio Alameda, local #33
              </p>
              <a
                href="https://www.instagram.com/le_sisterets/"
                target="_blank"
                className="btn d-inline-block"
              >
                @LE_SISTERETS
              </a>
            </div>
            <div className="col-lg-4 mb-5">
              <img src={Oxen} className="img-fluid mb-3" />
              <h3 className="mb-2">Oxen Concept Store - Guadalajara</h3>
              <p className="font-sm mb-3">
                Manuel López Cotilla #1370
              </p>
              <a
                href="https://www.instagram.com/oxenconcept/"
                target="_blank"
                className="btn d-inline-block"
              >
                @OXENCONCEPT
              </a>
            </div>
            <div className="col-lg-4 mb-5">
              <img src={Mar} className="img-fluid mb-3" />
              <h3 className="mb-2">Mar Mexa - Cholula, Puebla</h3>
              <p className="font-sm mb-3">
                Calle 10 Oriente #604
              </p>
              <a
                href="https://www.instagram.com/mar.mexa/"
                target="_blank"
                className="btn d-inline-block"
              >
                @MAR.MEXA
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
