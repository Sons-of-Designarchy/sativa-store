import * as React from "react"
import logoDesktop from "../images/logo.png";

export function ModalBruja() {
  const [openModal, setOpenModal] = React.useState(true);

  return (
    <div className="sativa-modal section-gradient" style={ openModal ? { display: "block"} : { display: "none" }}>
      <img alt="Sativa" width="40" src={logoDesktop} style={{ margin: "0 auto" }} />
      <h1 className="text-light text-shadow display mb-4">
        Follow the gaang!
      </h1>
      <a href="https://instagram.com/pachefestmx " target="_blank" className="sativa-btn d-block mb-3">@pachefestmx</a>
      <a href="https://instagram.com/highgaang " target="_blank" className="sativa-btn d-block mb-3 btn-purple">@highgaang</a>
      <a href="https://instagram.com/escueladecocinacannabica" target="_blank" className="sativa-btn d-block mb-3 btn-orange font-xs">@escueladecocinacannabica</a>
      <a href="https://instagram.com/holafilomena_" target="_blank" className="sativa-btn d-block mb-3 btn-blue">@holafilomena_</a>
      <a href="https://instagram.com/chicksvsstigma " target="_blank" className="sativa-btn btn-yellow d-block mb-3">@chicksvsstigma</a>
      <a href="https://instagram.com/incendiarias__" target="_blank" className="sativa-btn btn-purple d-block mb-3 ">@incendiarias__</a>
      <a href="#" onClick={() => setOpenModal(false)} className="sativa-btn d-block mb-3 btn-text">Continuar a sativamx.com</a>
    </div>
  )
}
