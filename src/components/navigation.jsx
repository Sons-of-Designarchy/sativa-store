import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
// import slugify from "@sindresorhus/slugify"
import { navStyle, navLink, activeLink } from "./navigation.module.css"

export function Navigation({ className }) {
  // const {
  //   allShopifyProduct: { productTypes },
  // } = useStaticQuery(graphql`
  //   query {
  //     allShopifyProduct {
  //       productTypes: distinct(field: productType)
  //     }
  //   }
  // `)

  return (
    <nav className={[navStyle, className].join(" ")}>
      <Link
        key="All"
        className={navLink}
        to="/"
        activeClassName={activeLink}
      >
        Inicio
      </Link>
      <Link
        key="All"
        className={navLink}
        to="/tienda/"
        activeClassName={activeLink}
      >
        Tienda
      </Link>
      <a 
        className={navLink}
        activeClassName={activeLink}
        href="https://www.pachefest.com"
        target="_blank"
        rel="noreferrer"
      >
        Pachefest
      </a>
      {/* {productTypes.map((name) => (
        <Link
          key={name}
          className={navLink}
          to={`/products/${slugify(name)}`}
          activeClassName={activeLink}
        >
          {name}
        </Link>
      ))} */}
    </nav>
  )
}
