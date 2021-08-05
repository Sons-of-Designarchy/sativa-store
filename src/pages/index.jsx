import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import HeroImage from "../images/we_are_sativa.png"
import { Suscribe } from "../components/suscribe"
import { HomeTienda } from "../components/home/tienda"

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
                Somos una comunidad que busca crear espacios seguros para tener una libre expresión sobre el consumo responsable y recreativo del Cannabis.
              </p>
              <p className="font-lg text-dark hero-content">
                Tenemos una{" "}
                <a href="https://www.instagram.com/highgaang/" target="_blank">marca de lifestyle</a>,{" "}
                <a href="https://www.pachefest.com" target="_blank">un festival</a>, y
                un IG con contenido educativo*{" "}
                <span style={{ fontSize: 14 }}>
                  * que nos borraron 😢, pero volverá pronto en otro formato
                </span>
              </p>
              <a href="https://t.me/joinchat/CHYrw_NslEAwYjQx" target="_blank" className="sativa-btn btn-green" style={{ marginRight: "1rem" }}>Únete al Telegram</a>
              <a href="#newsletter" className="sativa-btn btn-purple">Suscríbete al newsletter</a>
              <span></span>
            </div>
            <div className="col-md-6">
              <img src={HeroImage} className="img-fluid mx-auto" width="550" />
            </div>
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
      <HomeTienda />
      <Suscribe />
      {/* <ProductListing products={data?.shopifyCollection?.products} /> */}
    </Layout>
  )
}
