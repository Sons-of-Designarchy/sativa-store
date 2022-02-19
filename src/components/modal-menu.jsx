import { Link } from "gatsby"
import * as React from "react"
import { homepageUrl } from "../pages"
import { Navigation } from "./navigation"

export function ModalMenu({ openModal, setOpenModal }) {
  return (
    <div
      className="a-header-mobile-menu"
      style={openModal ? { display: "block" } : { display: "none" }}
    >
      <Link
        key="All"
        className="app-header-link green-bg bordered-bottom"
        to="/search/?s=BEST_SELLING"
        activeClassName="app-header-link-active"
      >
        Best Sellers
      </Link>
      {/* <Link
        key="All"
        className="app-header-link"
        to="/search/best-sellers/"
        activeClassName="app-header-link-active"
      >
        Nuevos
      </Link> */}
      <div className="mobile-categories bordered-bottom">
        <Navigation />
      </div>
      {/* <Link
        key="All"
        className="app-header-link green-bg bordered-bottom"
        to="/search/?s=BEST_SELLING"
        activeClassName="app-header-link-active"
      >
        Rebajas
      </Link> */}
      {/* <Link
        key="All"
        className="app-header-link green-bg bordered-bottom"
        to="/search/?s=BEST_SELLING"
        activeClassName="app-header-link-active"
      >
        Tiendas
      </Link> */}
      <a
        href="https://www.pachefest.com"
        className="app-header-link bordered-bottom"
        target="_blank"
      >
        Nuestro festival
      </a>
      <a
        href="https://instagram.com/highgaang"
        className="app-header-link bordered-bottom"
        target="_blank"
      >
        Instagram
      </a>
    </div >
  )
}
