import * as React from "react"
import Cupid from "../images/home/cupid.png"

export function Suscribe() {

  return (
    <div className="section section-gradient">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>
              Suscríbete al newsletter
            </h1>
            form here
          </div>
          <div className="col-lg-6">
            <img src={Cupid} className="img-fluid mx-auto" width="550" />
          </div>
        </div>
      </div>
    </div>
  )
}
