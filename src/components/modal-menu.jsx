import * as React from "react"
import logoDesktop from "../images/logo.png"

export function ModalMenu({ openModal, setOpenModal }) {
  return (
    <div
      className="sativa-modal layout-bg"
      style={openModal ? { display: "block" } : { display: "none" }}
    >
      <button
        onClick={() => setOpenModal(false)}
        className="headline sativa-modal-close"
      >
        X
      </button>
      <div style={{ marginTop: "3rem" }}>
        <a href="/search/?s=BEST_SELLING" className="sativa-btn d-block mb-3">
          Tienda
        </a>
        <a
          href="https://www.pachefest.com"
          className="sativa-btn btn-yellow d-block mb-3"
        >
          Nuestro Festival: Pachefest
        </a>
        <a
          href="https://instagram.com/highgaang "
          target="_blank"
          className="sativa-btn btn-blue d-block mb-3 btn-purple"
        >
          @highgaang
        </a>
        <a
          href="https://vm.tiktok.com/ZM8na53Ej/"
          target="_blank"
          className="sativa-btn d-block mb-3"
        >
          TikTok
        </a>
      </div>
    </div>
  )
}
