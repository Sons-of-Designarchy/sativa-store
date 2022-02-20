import * as React from "react"
import { StoreContext } from "../context/store-context"

export function AddToCart({ variantId, quantity, available, ...props }) {
  const { addVariantToCart, loading } = React.useContext(StoreContext)

  function addToCart(e) {
    e.preventDefault()
    addVariantToCart(variantId, quantity)
  }

  return (
    <button
      type="submit"
      className="btn"
      onClick={addToCart}
      disabled={!available || loading}
      {...props}
    >
      {available ? "Agregar al carrito" : "Agotado :("}
    </button>
  )
}
