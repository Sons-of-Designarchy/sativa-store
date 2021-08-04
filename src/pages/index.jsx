import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import HeroImage from "../images/we_are_sativa.png"
import Grid1 from "../images/we_are_sativa.png"
import Grid2 from "../images/we_are_sativa.png"
import Grid3 from "../images/we_are_sativa.png"

// import {
//   container,
//   intro,
//   callOut,
//   callToAction,
//   deployButton,
// } from "./index.module.css"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "frontpage" }) {
      products {
        ...ProductCard
      }
    }
  }
`
function Hero(props) {
  return (
    <>
      <div className="hero section section-gradient">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display mb-4 text-light text-shadow">
                Cannabis Self-care para la mente, cuerpo y espíritu
              </h1>
              <p className="font-lg text-dark hero-content">
                Somos una comunidad inclusiva sobre consumo responsable y
                recreativo del Cannabis. Creamos una{" "}
                <a href="/tienda/">marca de lifestyle</a>,{" "}
                <a href="https://www.pachefest.com" target="_blank">un festival</a>, y
                un IG con contenido educativo*{" "}
                <span style={{ fontSize: 14, display: "block" }}>
                  * que nos borraron 😢, pero volverá pronto en otro formato! 
                </span>
              </p>
              <a href="#" className="sativa-btn btn-green" style={{ marginRight: "1rem" }}>Únete al Telegram</a>
              <a href="#" className="sativa-btn btn-purple">Suscríbete al newsletter</a>
              <span></span>
            </div>
            <div className="col-md-6">
              <img src={HeroImage} className="img-fluid mx-auto" width="550" />
            </div>
          </div>
        </div>
      </div>
      <div className="section section-sky">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h4 className="text-light text-shadow">Sativa</h4>
              <h1 className="display text-light text-shadow">High Gang</h1>
              <p className="text-black mb-3">
                Colaboramos con mujeres creativas para crear colecciones
                temporales con diseños únicos y piezas hechas a mano
              </p>
              <a href="#" className="btn btn-primary btn-sm">
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
    </>
  )
}

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Hero />
      <ProductListing products={data?.shopifyCollection?.products} />
    </Layout>
  )
}
