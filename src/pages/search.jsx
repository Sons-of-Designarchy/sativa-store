import * as React from "react"
import { graphql } from "gatsby"
import slugify from "@sindresorhus/slugify"
import debounce from "debounce"
import { CgChevronRight, CgChevronLeft } from "react-icons/cg"
import { Layout } from "../components/layout"
import CrossIcon from "../icons/cross"
import SortIcon from "../icons/sort"
import FilterIcon from "../icons/filter"
import SearchIcon from "../icons/search"
import { ProductCard } from "../components/product-card"
import { getValuesFromQueryString, useProductSearch } from "../utils/hooks"
import { getCurrencySymbol } from "../utils/format-price"
import { Spinner } from "../components/progress"
import { Filters } from "../components/filters"
import { SearchProvider } from "../context/search-provider"
import {
  visuallyHidden,
  main,
  search,
  searchIcon,
  sortSelector,
  results,
  productList as productListStyle,
  productListItem,
  pagination,
  paginationButton,
  progressStyle,
  resultsStyle,
  filterStyle,
  clearSearch,
  searchForm,
  sortIcon,
  filterTitle,
  modalOpen,
  activeFilters,
  filterWrap,
} from "./search-page.module.css"

export const query = graphql`
  query {
    meta: allShopifyProduct {
      productTypes: distinct(field: productType)
      tags: distinct(field: tags)
      vendors: distinct(field: vendor)
    }
    collections: allShopifyCollection(
      filter: { handle: { eq: "verano-del-cohete" } }
    ) {
      edges {
        node {
          id
          descriptionHtml
          handle
          products {
            id
            handle
            title
            productType
            handle
            priceRangeV2 {
              minVariantPrice {
                currencyCode
                amount
              }
              maxVariantPrice {
                currencyCode
                amount
              }
            }
            id
            images {
              gatsbyImageData(aspectRatio: 1, width: 200, layout: FIXED)
            }
          }
        }
      }
    }
    products: allShopifyProduct(limit: 24, sort: { fields: title }, filter: { handle: { eq: "frontpage" } }) {
      edges {
        node {
          title
          vendor
          productType
          handle
          priceRangeV2 {
            minVariantPrice {
              currencyCode
              amount
            }
            maxVariantPrice {
              currencyCode
              amount
            }
          }
          id
          images {
            gatsbyImageData(aspectRatio: 1, width: 200, layout: FIXED)
          }
        }
      }
    }
  }
`

function SearchPage({
  data: {
    meta: { productTypes, vendors, tags },
    products,
    collections,
  },
  location,
}) {
  // These default values come from the page query string
  const queryParams = getValuesFromQueryString(location.search)
  const [filters, setFilters] = React.useState(queryParams)

  const [sortKey, setSortKey] = React.useState(queryParams.sortKey)
  // We clear the hash when searching, we want to make sure the next page will be fetched due the #more hash.
  const shouldLoadNextPage = React.useRef(false)

  // This modal is only used on mobile
  const [showModal, setShowModal] = React.useState(false)

  const {
    data,
    isFetching,
    filterCount,
    hasNextPage,
    hasPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
  } = useProductSearch(
    filters,
    {
      allProductTypes: productTypes,
      allVendors: vendors,
      allTags: tags,
    },
    sortKey,
    false,
    70 // Products per page
  )

  // If we're using the default filters, use the products from the Gatsby data layer.
  // Otherwise, use the data from search.
  const isDefault = !data


  console.log(filters.productTypes?.length > 0 || filters.sortKey?.length > 0);
  const isHome = filters.productTypes?.length === 0;

  const productList = (isHome ? collections.edges[0].node.products : isDefault ? products.edges : data?.products?.edges) ?? []

  // data?.products.edges

  // Scroll up when navigating
  React.useEffect(() => {
    if (!showModal) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
        // eslint-disable-next-line react-hooks/exhaustive-deps
      })
    }
  }, [productList, showModal])

  // Stop page from scrolling when modal is visible
  React.useEffect(() => {
    if (showModal) {
      document.documentElement.style.overflow = "hidden"
    } else {
      document.documentElement.style.overflow = ""
    }
  }, [showModal])

  // Automatically load the next page if "#more" is in the URL
  React.useEffect(() => {
    if (location.hash === "#more") {
      // save state so we can fetch it when the first page got fetched to retrieve the cursor
      shouldLoadNextPage.current = true
    }

    if (shouldLoadNextPage.current) {
      if (hasNextPage) {
        fetchNextPage()
      }

      shouldLoadNextPage.current = false
    }
  }, [location.hash])

  const currencyCode = getCurrencySymbol(
    products?.[0]?.node?.priceRangeV2?.minVariantPrice?.currencyCode
  )

  return (
    <Layout>
      <div className="section pb-4 section-gradient text-center">
        <h1 className="text-light text-shadow display">High Gang</h1>
        <p>Tienda oficial Sativa</p>
      </div>
      <div className={main}>
        <button
          className="sativa-btn d-lg-none"
          onClick={() => setShowModal((show) => !show)}
          // This is hidden because the filters are already visible to
          // screenreaders, so the modal isnt needed.
          aria-hidden
        >
          Filtrar
        </button>
        {/* <div className={search} aria-hidden={modalOpen}>
          <SearchBar defaultTerm={filters.term} setFilters={setFilters} />
          <div className={sortSelector}>
            <label>
              <span>Ordenar por:</span>
              <select
                value={sortKey}
                // eslint-disable-next-line
                onChange={(e) => setSortKey(e.target.value)}
              >
                <option value="RELEVANCE">Relevancia</option>
                <option value="CREATED_AT">Nuevos items</option>
                <option value="BEST_SELLING">Trending</option>
                <option value="PRICE">Precio</option>
                <option value="TITLE">Titulo</option>
              </select>
            </label>
            <SortIcon className={sortIcon} />
          </div>
        </div> */}
        <section className={[filterStyle, showModal && modalOpen].join(" ")}>
          <div className={filterTitle}>
            <h2>Filtrar</h2>
            <button aria-hidden onClick={() => setShowModal(false)}>
              <CrossIcon />
            </button>
          </div>
          <div className={filterWrap}>
            <Filters
              setFilters={setFilters}
              filters={filters}
              tags={tags}
              vendors={vendors}
              productTypes={productTypes}
              currencyCode={currencyCode}
            />
          </div>
        </section>
        <section
          className={results}
          aria-busy={isFetching}
          aria-hidden={modalOpen}
        >
          
          {isFetching && (
            <p className={progressStyle}>
              <Spinner aria-valuetext="Searching" /> Searching
              {filters.term ? ` for "${filters.term}"…` : `…`}
            </p>
          )}
          <ul className={productListStyle}>
            {!isFetching && isHome ?
              productList.map((product, index) => (
                <li className={productListItem} key={product.id}>
                  <ProductCard
                    eager={index === 0}
                    product={{
                      title: product.title,
                      priceRangeV2: product.priceRangeV2,
                      slug: `/productos/${slugify(product.productType)}/${
                        product.handle
                      }`,
                      // The search API and Gatsby data layer have slightly different images available.
                      images: product.images,
                      // storefrontImages: !isDefault && product.images,
                      vendor: product.vendor,
                    }}
                  />
                </li>
              )) : (
                <>
                  {!isFetching &&
                    productList.map(({ node }, index) => (
                      <li className={productListItem} key={node.id}>
                        <ProductCard
                          eager={index === 0}
                          product={{
                            title: node.title,
                            priceRangeV2: node.priceRangeV2,
                            slug: `/productos/${slugify(node.productType)}/${
                              node.handle
                            }`,
                            // The search API and Gatsby data layer have slightly different images available.
                            images: isDefault ? node.images : [],
                            storefrontImages: !isDefault && node.images,
                            vendor: node.vendor,
                          }}
                        />
                      </li>
                    ))}
                </>
              )}
          </ul>
          <div className="my-5">
            {hasPreviousPage || hasNextPage ? (
              <Pagination
                previousPage={fetchPreviousPage}
                hasPreviousPage={hasPreviousPage}
                nextPage={fetchNextPage}
                hasNextPage={hasNextPage}
              />
            ) : undefined}
          </div>
        </section>
      </div>
    </Layout>
  )
}

function SearchBar({ defaultTerm, setFilters }) {
  const [term, setTerm] = React.useState(defaultTerm)
  const debouncedSetFilters = React.useCallback(
    debounce((value) => {
      setFilters((filters) => ({ ...filters, term: value }))
    }, 200),
    [setFilters]
  )

  return (
    <form onSubmit={(e) => e.preventDefault()} className={searchForm}>
      <SearchIcon aria-hidden className={searchIcon} />
      <input
        type="text"
        value={term}
        onChange={(e) => {
          setTerm(e.target.value)
          debouncedSetFilters(e.target.value)
        }}
        placeholder="Busca aquí..."
      />
      {term ? (
        <button
          className={clearSearch}
          type="reset"
          onClick={() => {
            setTerm("")
            setFilters((filters) => ({ ...filters, term: "" }))
          }}
          aria-label="Clear search query"
        >
          <CrossIcon />
        </button>
      ) : undefined}
    </form>
  )
}
/**
 * Shopify only supports next & previous navigation
 */
function Pagination({ previousPage, hasPreviousPage, nextPage, hasNextPage }) {
  return (
    <nav className={pagination}>
      <button
        className="sativa-btn d-flex align-items-center m-3"
        disabled={!hasPreviousPage}
        onClick={previousPage}
        aria-label="Previous page"
      >
        <CgChevronLeft />
        Anterior
      </button>
      <button
        className="sativa-btn d-flex align-items-center m-3"
        disabled={!hasNextPage}
        onClick={nextPage}
        aria-label="Next page"
      >
          Siguiente
        <CgChevronRight />
      </button>
    </nav>
  )
}

export default function SearchPageTemplate(props) {
  return (
    <SearchProvider>
      <SearchPage {...props} />
    </SearchProvider>
  )
}
