import * as React from "react"
import Cupid from "../images/home/cupid.png"
import { EmailListForm } from "./suscribe-form"

export function Suscribe() {

  return (
    <div className="section section-gradient center-xs">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <h1 className="display text-shadow text-light">
              Sé parte del high gaang 🤓
            </h1>
            <p>Suscríbete al newsletter y entérate antes que nadie de nuestros eventos y lanzamientos. </p>
            <div className="mt-4">
              <EmailListForm />
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <img src={Cupid} className="img-fluid mx-auto" width="550" />
          </div>
        </div>
      </div>
    </div>
  )
}
