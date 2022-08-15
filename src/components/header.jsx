import * as React from "react"
import { Link } from "gatsby"
import { StoreContext } from "../context/store-context"
import { Navigation } from "./navigation"
import { CartButton } from "./cart-button"
import { Toast } from "./toast"
import Menu from "../images/menu.svg"
import LogoHighGaang from "../images/logo-dark.svg"
import { ModalMenu } from "./modal-menu"
import { homepageUrl } from "../pages"

function Cart() {
  const { loading, didJustAddToCart } = React.useContext(StoreContext);
  return (
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
  )
}

export function Header({ headerBottom }) {
  const { checkout } = React.useContext(StoreContext);
  const [showMenu, setShowMenu] = React.useState(false)

  const items = checkout ? checkout.lineItems : []

  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <>
    <div className="fuck-instagram">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <h3>
          ¡Nos borraron nuestra cuenta de Instagram de nuevo! 🥺
          </h3>
          <p style={{ fontSize: '14px', marginTop: '1rem'}}>Pero no te preocupes, estamos trabajando para resolverlo.</p>
          <p style={{ fontSize: '14px', marginBottom: '1rem'}}>
          Mientras tanto este sitio sigue funcionando al 100% puedes pedir vía whatsapp o contactarnos para pedidos en curso al <a href="tel:+525615441513">56 1544 1513</a> o por correo a <a href="mailto:highgaang@gmail.com">highgaang@gmail.com</a>
          </p>
          {/* <p style={{ fontSize: '14px', marginBottom: '1rem'}}>
          Recuerda que para no perderte toda nuestra comunicación te puedes unir al <a href="https://www.pachefest.com/">grupo de Telegram</a>
          </p> */}




        </div>
      </div>
    </div>
      {Cart()}
      <div className="mobile-nav">
        <div className="app-header">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="app-header-link"
          >
            <img src={Menu} />
          </button>
          <Link to={homepageUrl} className="app-header-logo">
            <img src={LogoHighGaang} />
          </Link>
          <CartButton quantity={quantity} />
        </div>
      </div>
      <ModalMenu openModal={showMenu} setOpenModal={setShowMenu} />

      <div className="desktop-nav">
        {/* <div className="discount-banner"><b>High Gaang Holidays!</b> 15% de descuento en toda la tienda del 1 al 24 de Dic - aplicado directo en tu carrito :)</div> */}
        <header className="app-header">
          <Link to={homepageUrl} className="app-header-logo">
            <img src={LogoHighGaang} />
          </Link>
          <div style={{ flex: 1 }}>
            <div className="app-header-top">
              <div className="menu-right align-items-center">
                <Link
                  key="All"
                  to="https://www.pachefest.com/"
                  className="app-header-link d-none d-lg-inline-flex"
                  activeClassName="app-header-link-active"
                  target="_blank"
                >
                  Nuestro Festival
                </Link>
                <Link
                  key="All"
                  to="/tiendas/"
                  className="app-header-link d-none d-lg-inline-flex"
                  activeClassName="app-header-link-active"
  
                >
                  Tiendas
                </Link>
                <Link
                  key="All"
                  to="https://www.instagram.com/highgaang/"
                  className="app-header-link d-none d-lg-inline-flex"
                  activeClassName="app-header-link-active"
                  target="_blank"
                >
                  Instagram
                </Link>
                <CartButton quantity={quantity} />
              </div>
            </div>
            <div className="app-header-bottom d-none d-md-block">
              <div className="d-flex flex-1">
                <Navigation />
              </div>
            </div>
          </div>
        </header>
        {headerBottom && (
          <div className="app-header-bottom bordered-bottom">
            {headerBottom}
          </div>
        )}
      </div>
    </>
  )
}
