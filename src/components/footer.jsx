import { Link } from "gatsby"
import * as React from "react"
// import Logo from "../images/logo-footer.png"
import { copyright, blurb } from "./footer.module.css"

export function Footer() {
  return (
    <footer className="section section-purple text-center">
      <div className={blurb}>
        <p className="mb-3">Síguenos en:</p>
        <div className="px-3 mb-3 d-lg-flex justify-content-center">
          <div className="px-1">
            <a href="https://instagram.com/highgaang" target="_blank" className="btn btn-xs-block mb-3">@highgaang</a>
          </div>
          <div className="px-1">
            <a href="https://instagram.com/pachefestmx " target="_blank" className="btn btn-xs-block mb-3">@pachefestmx</a>
          </div>
        </div>
      </div>
      <p>
        Copyright &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}
