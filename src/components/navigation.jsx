import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
import slugify from "@sindresorhus/slugify"

export function Navigation() {
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
    <>
      <nav className="app-nav">
        {/* <Link
          key="All"
          to="/search/?s=BEST_SELLING"
          className="app-header-link"
          activeClassName="app-header-link-active"
        >
          Colección
        </Link> */}
      </nav>
    </>
  )
}
