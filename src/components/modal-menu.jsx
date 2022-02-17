import * as React from "react"
import logoDesktop from "../images/logo.png"
import { homepageUrl } from "../pages"

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
        <a href={homepageUrl} className="sativa-btn d-block mb-3">
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
      </div>
    </div>
  )
}
