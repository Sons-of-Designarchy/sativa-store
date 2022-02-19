import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
import slugify from "@sindresorhus/slugify"

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
    <>
      {productTypes.map((name) => (
        <Link
          key={name}
          className="app-header-link"
          to={`/productos/${slugify(name)}`}
          activeClassName="app-header-link-active"
        >
          {name}
        </Link>
      ))}
    </>
  )
}
