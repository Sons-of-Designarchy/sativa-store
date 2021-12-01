import * as React from "react"
import { Link } from "gatsby"
import CartIcon from "../icons/cart"
import { cartButton, badge } from "./cart-button.module.css"

export function CartButton({ quantity }) {
  return (
    <Link
      aria-label={`Carrito de compra con ${quantity} elementos`}
      to="/carrito"
      className="app-header-link"
    >
      <CartIcon />
      <span style={{ marginLeft: "0.33rem", marginRight: "0.33rem" }} className="d-none d-lg-block">Carrito</span>
      {quantity > 0 && <div className="cart-badge">{quantity}</div>}
    </Link>
  )
}
