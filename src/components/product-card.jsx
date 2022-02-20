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
    storefrontImages,
    totalInventory,
  } = product

  const available = totalInventory > 0;

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
    <div className="col-6 col-lg-4 col-xl-3">
      <Link
        className="product-card-container"
        to={slug}
        aria-label={`View ${title} product page`}
      >
        {hasImage
          ? (
            <div className="product-card-image" data-name="product-image-box">
              {!available && (
                <div className="product-out badge badge-sm bg-danger">
                  Agotado
                </div>
              )}
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
    </div>
  )
}

export const query = graphql`
  fragment ProductCard on ShopifyProduct {
    id
    title
    totalInventory
    slug: gatsbyPath(
      filePath: "/productos/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
    )
    images {
      id
      altText
      gatsbyImageData(
        aspectRatio: 0.61
        width: 350
        layout: CONSTRAINED
      )
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
