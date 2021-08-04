import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
import slugify from "@sindresorhus/slugify"
import { navStyle, navLink, activeLink } from "./navigation.module.css"

export function Navigation({ className }) {
  const {
    allShopifyProduct: { productTypes },
  } = useStaticQuery(graphql`
    query {
      allShopifyProduct {
        productTypes: distinct(field: productType)
      }
    }
  `)

  return (
    <nav className={[navStyle, className].join(" ")}>
      <a href="/" className={navLink} activeClassName={activeLink}>
        Inicio
      </a>
      <Link
        key="All"
        className={navLink}
        to="/products/"
        activeClassName={activeLink}
      >
        Tienda
      </Link>
      <a 
        className={navLink}
        activeClassName={activeLink}
        href="https://www.pachefest.com"
        target="_blank"
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
