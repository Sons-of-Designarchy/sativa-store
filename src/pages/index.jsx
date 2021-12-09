import * as React from "react"
import { Layout } from "../components/layout"
// import HeroImage2 from "../images/hero-image.jpg"
import { Suscribe } from "../components/suscribe"
import { HomeTienda } from "../components/home/tienda"
import { ModalBruja } from "../components/modal-bruja"
import { AboutUs } from "../components/about-us"
import { navigate } from "@reach/router"

export default function IndexPage({ data }) {

  React.useEffect(() => {
    navigate('/search/?s=BEST_SELLING/');
  }, []);

  return (
    <Layout>
      <div className="text-center my-5" style={{ height: 800 }}>
        Cargando sitio....
      </div>
    </Layout>
  )
}
