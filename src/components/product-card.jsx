import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getShopifyImage } from "gatsby-source-shopify"
import { formatPrice } from "../utils/format-price"

export function ProductCard({ product, eager }) {
  const {
    title,
    priceRangeV2,
    slug,
    images: [firstImage],
    vendor,
    storefrontImages,
  } = product

  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    priceRangeV2.minVariantPrice.amount
  )

  const defaultImageHeight = 470
  const defaultImageWidth = 290
  let storefrontImageData = {}
  if (storefrontImages) {
    const storefrontImage = storefrontImages?.edges[0]?.node
    try {
      storefrontImageData = getShopifyImage({
        image: storefrontImage,
        layout: "constrained",
        width: defaultImageWidth,
        height: defaultImageHeight,
      })
    } catch (e) {
      console.error(e)
    }
  }

  const hasImage = firstImage || Object.getOwnPropertyNames(storefrontImageData || {}).length

  return (
    <Link
      className="product-card-container"
      to={slug}
      aria-label={`View ${title} product page`}
    >
      {hasImage
        ? (
          <div className="product-card-image" data-name="product-image-box">
            <GatsbyImage
              alt={firstImage?.altText ?? title}
              image={firstImage?.gatsbyImageData ?? storefrontImageData}
              loading={eager ? "eager" : "lazy"}
            />
          </div>
        ) : (
          <div style={{ height: defaultImageHeight, width: defaultImageWidth }} />
        )
      }
      <div className="product-card-details">
        <p className="product-card-heading">
          {title}
        </p>
        <div className="product-card-price">{price}</div>
      </div>
    </Link>
  )
}

export const query = graphql`
  fragment ProductCard on ShopifyProduct {
    id
    title
    slug: gatsbyPath(
      filePath: "/productos/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
    )
    images {
      id
      altText
      gatsbyImageData(layout: CONSTRAINED, width: 640, aspectRatio: 1)
    }
    priceRangeV2 {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    vendor
  }
`
