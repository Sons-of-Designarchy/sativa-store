import * as React from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../../../components/layout"
import isEqual from "lodash.isequal"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import { StoreContext } from "../../../context/store-context"
import { AddToCart } from "../../../components/add-to-cart"
import { NumericInput } from "../../../components/numeric-input"
import { formatPrice } from "../../../utils/format-price"
import { Seo } from "../../../components/seo"
import { CgChevronRight as ChevronIcon } from "react-icons/cg"
import {
  header,
  noImagePreview,
  optionsWrapper,
  priceValue,
  selectVariant,
  addToCartStyle,
  productDescription,
} from "./product-page.module.css"
import { homepageUrl } from "../.."

export default function Product({ data: { product, suggestions } }) {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRangeV2,
    title,
    description,
    images,
    images: [firstImage],
  } = product
  const { client } = React.useContext(StoreContext)

  const [variant, setVariant] = React.useState({ ...initialVariant })
  const [quantity, setQuantity] = React.useState(1)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant

  const [available, setAvailable] = React.useState(
    productVariant.availableForSale
  )

  const checkAvailablity = React.useCallback(
    (productId) => {
      client.product.fetch(productId).then((fetchedProduct) => {
        const result =
          fetchedProduct?.variants.filter(
            (variant) => variant.id === productVariant.storefrontId
          ) ?? []

        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [productVariant.storefrontId, client.product]
  )

  const handleOptionChange = (index, event) => {
    const value = event.target.value

    if (value === "") {
      return
    }

    const currentOptions = [...variant.selectedOptions]

    currentOptions[index] = {
      ...currentOptions[index],
      value,
    }

    const selectedVariant = variants.find((variant) => {
      return isEqual(currentOptions, variant.selectedOptions)
    })

    setVariant({ ...selectedVariant })
  }

  React.useEffect(() => {
    checkAvailablity(product.storefrontId)
  }, [productVariant.storefrontId, checkAvailablity, product.storefrontId])

  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    variant.price
  )

  const hasVariants = variants.length > 1
  const hasImages = images.length > 0

  const hasMultipleImages = true || images.length > 1

  return (
    <Layout
      headerBottom={
        <div className="d-flex align-items-center">
          <Link to={homepageUrl} className="app-header-link">
            Inicio
          </Link>
          <ChevronIcon size={12} />
          <Link to={product.productTypeSlug} className="app-header-link">
            {product.productType}
          </Link>
          <ChevronIcon size={12} />
          <p className="app-header-link">{title}</p>
        </div>
      }
    >
      {firstImage ? (
        <Seo
          title={title}
          description={description}
          image={getSrc(firstImage.gatsbyImageData)}
        />
      ) : undefined}
      <div className="container product-detail">
        <div className="row">
          {hasImages && (
            <div className="col-lg-8 photo-container">
              <div className="row">
                {images.map((image, index) => (
                  <div key={`product-image-${image.id}`} className="col-lg product-detail-card">
                    <div className="mb-3">
                      <GatsbyImage
                        objectFit="contain"
                        loading={index === 0 ? "eager" : "lazy"}
                        alt={
                          image.altText
                            ? image.altText
                            : `Product Image of ${title} #${index + 1}`
                        }
                        image={image.gatsbyImageData}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {!hasImages && <span className={noImagePreview}>No hay imagen</span>}
          <div className="col-lg-4">
            <h1 className="mb-2">{title}</h1>
            <p className={productDescription}>{description}</p>
            <h2 className={priceValue}>
              <span>{price}</span>
            </h2>
            <fieldset className="d-flex">
              {hasVariants &&
                options.map(({ id, name, values }, index) => (
                  <div className="m-1" key={id}>
                    <select
                      aria-label="Variants"
                      onChange={(event) => handleOptionChange(index, event)}
                      className="form-select"
                    >
                      <option value="">{`${name}`}</option>
                      {values.map((value) => (
                        <option value={value} key={`${name}-${value}`}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
            </fieldset>
            <div className="m-1 mb-3">
              <p className="font-xs" style={{ marginRight: "0.33rem" }}>Cantidad:</p>
              <NumericInput
                aria-label="Quantity"
                onIncrement={() => setQuantity((q) => Math.min(q + 1, 20))}
                onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
                onChange={(event) => setQuantity(event.currentTarget.value)}
                value={quantity}
                min="1"
                max="20"
              />
            </div>
            <div className="mb-5">
              <AddToCart
                variantId={productVariant.storefrontId}
                quantity={quantity}
                available={available}
              />
            </div>
            {/* <div className={metaSection}>
              <span className={labelFont}>Tipo</span>
              <span className={tagList}>
                <Link to={product.productTypeSlug}>{product.productType}</Link>
              </span>
              <span className={labelFont}>Etiquetas</span>
              <span className={tagList}>
                {product.tags.map((tag) => (
                  <Link to={`/products?t=${tag}`}>{tag}</Link>
                ))}
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!, $productType: String!) {
    product: shopifyProduct(id: { eq: $id }) {
      title
      description
      productType
      productTypeSlug: gatsbyPath(
        filePath: "/productos/{ShopifyProduct.productType}"
      )
      tags
      priceRangeV2 {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      storefrontId
      images {
        # altText
        id
        gatsbyImageData(layout: CONSTRAINED, width: 900, aspectRatio: 0.75)
      }
      variants {
        availableForSale
        storefrontId
        title
        price
        selectedOptions {
          name
          value
        }
      }
      options {
        name
        values
        id
      }
    }
    suggestions: allShopifyProduct(
      limit: 3
      filter: { productType: { eq: $productType }, id: { ne: $id } }
    ) {
      nodes {
        ...ProductCard
      }
    }
  }
`
