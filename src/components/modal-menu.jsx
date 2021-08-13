import * as React from "react"
import logoDesktop from "../images/logo.png";

export function ModalMenu({ openModal, setOpenModal }) {
  return (
    <div className="sativa-modal section-gradient" style={ openModal ? { display: "block"} : { display: "none" }}>
      <button onClick={() => setOpenModal(false)} className="cooper sativa-modal-close">X</button>
      <div className="mb-3">
        <img alt="Sativa" width="50" src={logoDesktop} style={{ margin: "0 auto" }} />
      </div>
      <a href="/" className="sativa-btn d-block mb-3">Inicio</a>
      <a href="/search/?s=BEST_SELLING" className="sativa-btn btn-purple d-block mb-3">Tienda</a>
      <a href="https://www.pachefest.com" className="sativa-btn btn-yellow d-block mb-3">Pachefest</a>
      <a href="https://instagram.com/@highgaang " target="_blank" className="sativa-btn btn-blue d-block mb-3 btn-purple">@highgaang</a>
    </div>
  )
}
