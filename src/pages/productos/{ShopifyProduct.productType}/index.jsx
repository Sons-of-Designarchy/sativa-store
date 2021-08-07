import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../../components/layout"
import { ProductListing } from "../../../components/product-listing"
import { Seo } from "../../../components/seo"
import slugify from "@sindresorhus/slugify"
import { MoreButton } from "../../../components/more-button"
import { title } from "../index.module.css"

export default function ProductTypeIndex({
  data: { products },
  pageContext: { productType },
}) {
  return (
    <Layout>
      <Seo title={`Tienda`} />
      <h1 className={title}>{productType}</h1>
      <ProductListing products={products.nodes} />
      <div className="text-center my-5">
        {products.pageInfo.hasNextPage && (
          <MoreButton to={`/tienda?p=${slugify(productType)}#more`}>
            Cargar más productos
          </MoreButton>
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($productType: String!) {
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
