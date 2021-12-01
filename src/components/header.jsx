import * as React from "react"
import { Link } from "gatsby"
import { StoreContext } from "../context/store-context"
import { Navigation } from "./navigation"
import { CartButton } from "./cart-button"
import SearchIcon from "../icons/search"
import { Toast } from "./toast"
import { header, container, logo, searchButton, nav } from "./header.module.css"
import Menu from "../images/menu.svg"
import LogoHighGaang from "../images/logo-dark.svg"
import { ModalMenu } from "./modal-menu"

export function Header({ headerBottom }) {
  const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)
  const [showMenu, setShowMenu] = React.useState(false)

  const items = checkout ? checkout.lineItems : []

  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  // TODO
  // - fix search input
  // - menu items
  // - create css file
  // - menu derecho cuando lo tengamos
  // iconito carrito
  // menu manual
  // menu salga de tags

  return (
    <div className="app-header-container">
      {/* <ModalMenu openModal={showMenu} setOpenModal={setShowMenu} /> */}
      <header className="app-header">
        <Link to="/search/?s=BEST_SELLING" className="app-header-logo">
          <img src={LogoHighGaang} width="130" />
        </Link>
        <div className="d-none d-md-block" style={{ flex: 1 }}>
          <div className="app-header-top">
            <Navigation />
            {/* <div className="d-none d-lg-flex align-items-center">
              <Link to="/search/?s=BEST_SELLING" className={searchButton}>
                <SearchIcon />
              </Link>
              Buscar
            </div> */}
            <div className="menu-right align-items-center">
              <Link
                key="All"
                to="https://www.pachefest.com/"
                className="app-header-link"
                activeClassName="app-header-link-active"
                target="_blank"
              >
                Nuestro Festival
              </Link>
              <Link
                key="All"
                to="https://www.instagram.com/highgaang/"
                className="app-header-link"
                activeClassName="app-header-link-active"
                target="_blank"
              >
                Instagram
              </Link>
              <CartButton quantity={quantity} />
            </div>
          </div>

          <div className="app-header-bottom">
            {headerBottom}
          </div>
        </div>
        <div className="d-none">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={searchButton}
          >
            <img src={Menu} />
          </button>
        </div>
      </header>
      <Toast show={loading || didJustAddToCart}>
        {!didJustAddToCart ? (
          "Updating…"
        ) : (
          <>
            Agregado al carrito{" "}
            <svg
              width="14"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.019 10.492l-2.322-3.17A.796.796 0 013.91 6.304L6.628 9.14a1.056 1.056 0 11-1.61 1.351z"
                fill="#fff"
              />
              <path
                d="M5.209 10.693a1.11 1.11 0 01-.105-1.6l5.394-5.88a.757.757 0 011.159.973l-4.855 6.332a1.11 1.11 0 01-1.593.175z"
                fill="#fff"
              />
              <path
                d="M5.331 7.806c.272.326.471.543.815.163.345-.38-.108.96-.108.96l-1.123-.363.416-.76z"
                fill="#fff"
              />
            </svg>
          </>
        )}
      </Toast>
    </div>
  )
}
