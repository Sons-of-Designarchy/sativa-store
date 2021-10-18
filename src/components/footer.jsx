import { Link } from "gatsby"
import * as React from "react"
import Logo from "../images/logo-footer.png"
import { copyright, blurb } from "./footer.module.css"
import { Navigation } from "./navigation"

export function Footer() {
  return (
    <footer className="section section-gradient text-center">
      <div className={blurb}>
        <div className="d-flex justify-content-center mb-3">
          <img src={Logo} alt="Sativa Logo" width="200" height="132" style={{ height: "132" }} />
        </div>
        <p>Síguenos en:</p>
        <div className="px-3 mb-3 d-lg-flex justify-content-center">
          <div className="px-1">
            <a href="https://instagram.com/highgaang" target="_blank" className="sativa-btn btn-xs-block mb-3 btn-purple">@highgaang</a>
          </div>
          <div className="px-1">
            <a href="https://instagram.com/pachefestmx " target="_blank" className="sativa-btn btn-xs-block mb-3">@pachefestmx</a>
          </div>
        </div>
      </div>
      <p>
        Copyright &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}
