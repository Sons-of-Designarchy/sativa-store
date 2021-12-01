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
    <nav>
      {/* <Link
        key="All"
        to="/"
        className="app-header-link"
        activeClassName="app-header-link-active"
      >
        Inicio
      </Link> */}
      <Link
        key="All"
        to="/search/?s=BEST_SELLING"
        className="app-header-link"
        activeClassName="app-header-link-active"
      >
        Colección
      </Link>
      <a 
        href="https://www.pachefest.com"
        target="_blank"
        rel="noreferrer"
        className="app-header-link"
        activeClassName="app-header-link-active"
      >
        Pachefest
      </a>


      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>

      {productTypes.slice(0, 3).map((name) => (
        <Link
          key={name}
          className="app-header-link"
          to={`/products/${slugify(name)}`}
          activeClassName="app-header-link-active"
        >
          {name}
        </Link>
      ))}
      <Link>Más</Link>
      {productTypes.slice(4, 10).map((name) => (
        <Link
          key={name}
          className="app-header-link"
          to={`/products/${slugify(name)}`}
          activeClassName="app-header-link-active"
        >
          {name}
        </Link>
      ))}
    </nav>
  )
}
