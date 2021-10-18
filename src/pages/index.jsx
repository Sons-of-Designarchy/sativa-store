import * as React from "react"
import { Layout } from "../components/layout"
import HeroImage2 from "../images/hero-image.jpg"
import { Suscribe } from "../components/suscribe"
import { HomeTienda } from "../components/home/tienda"
import { ModalBruja } from "../components/modal-bruja"
import { AboutUs } from "../components/about-us"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <img src={HeroImage2} />
      <AboutUs />
      <HomeTienda />
      <div id="newsletter">
        <Suscribe />
      </div>
      <ModalBruja />
    </Layout>
  )
}
