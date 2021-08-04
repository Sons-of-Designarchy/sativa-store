import { Link } from "gatsby"
import * as React from "react"
import Logo from "../icons/logo"
import {
  copyright,
  links,
  blurb,
  logos,
  footerNavList,
  footerNavListItem,
} from "./footer.module.css"

export function Footer() {
  return (
    <footer className="section section-gradient">
      <div className={blurb}>
        <div className={logos}>
          <Logo />
        </div>
      </div>
      <nav className={links} aria-label="footer">
        <ul className={footerNavList}>
          <li className={footerNavListItem}>
            <a href="https://github.com/gatsbyjs/gatsby-starter-shopify">
              Inicio
            </a>
          </li>
          <li>
            <Link
              key="All"
              to="/tienda/"
            >
              Tienda
            </Link>
          </li>
          {process.env.GATSBY_DEMO_STORE === "true" && (
            <li className={footerNavListItem}>
              <a href="https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-shopify&utm_campaign=shopify-starter">
                <img
                  src="https://www.gatsbyjs.com/deploynow.png"
                  alt="Deploy to Gatsby Cloud"
                  height="38"
                  width="251"
                />
              </a>
            </li>
          )}
        </ul>
      </nav>
      <div className={copyright}>
        Copyright &copy; {new Date().getFullYear()} · Todos los derechos reservados
      </div>
    </footer>
  )
}
