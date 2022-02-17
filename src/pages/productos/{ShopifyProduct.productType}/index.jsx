import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../../components/layout"
import { ProductListing } from "../../../components/product-listing"
import { Seo } from "../../../components/seo"
import slugify from "@sindresorhus/slugify"
import { MoreButton } from "../../../components/more-button"
import { homepageUrl } from "../.."

export default function ProductTypeIndex({
  data: { products },
  pageContext: { productType },
}) {
  return (
    <Layout
      headerBottom={
        <a href={homepageUrl} className="app-header-link">
          ← Volver al inicio
        </a>
      }
    >
      <Seo title={`Tienda`} />
      <div className="section pb-4 text-center">
        <h1 className="display">{productType}</h1>
      </div>
      <div className="py-5">
        <ProductListing products={products.nodes} />
      </div>
      <div className="text-center my-5">
        {products.pageInfo.hasNextPage && (
          <MoreButton to={`/productos?p=${slugify(productType)}#more`}>
            Cargar más productos
          </MoreButton>
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($productType: String!) {
    products: allShopifyProduct(
      filter: { productType: { eq: $productType } }
      sort: { fields: publishedAt, order: ASC }
      limit: 24
    ) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`
