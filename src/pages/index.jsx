import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import {
  container,
  intro,
  callOut,
  callToAction,
  deployButton,
} from "./index.module.css"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "frontpage" }) {
      products {
        ...ProductCard
      }
    }
  }
`
function Hero (props) {
  return (
    <div className="text-center">
      <h1 className="display mb-4 text-light text-shadow">Cannabis Self-care para la mente, cuerpo y espíritu</h1>
      <p className="font-lg text-dark">
        Somos una comunidad inclusiva sobre el uso responsable, recreativo y creativo del Cannabis.
      </p>
      {/* <img src={Redes} className="img-fluid mx-auto" width="500" /> */}
    </div>
  )
}

export default function IndexPage({ data }) {
  return (
    <Layout>
      <div className="section section-gradient">
        <Hero />
        <ProductListing products={data?.shopifyCollection?.products} />
      </div>
    </Layout>
  )
}
