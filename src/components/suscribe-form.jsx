import * as React from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'; 

export function EmailListForm() {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addToMailchimp(email)
      .then((data) => {
        setMessage(data.result);
      })
      .catch((e) => {
        // Errors in here are client side
        // Mailchimp always returns a 200
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="d-block d-lg-flex">
        <div style={{ flex: 1 }}>
          <input
            placeholder="Ingresa tu correo"
            name="email"
            type="text"
            onChange={handleEmailChange}
            className="form-control pl-lg-3"
            style={{ marginBottom: "1rem" }}
          />
        </div>
        <button type="submit" className="sativa-btn btn-xs-block" style={{ marginBottom: "1rem" }}>Suscribete</button>
      </div>
      {message == 'success' && (
        <div className="form-message mt-3">
          Registrado con exito!
        </div>
      )}
      {message == 'error' && (
        <div className="form-message mt-3">
          Oops, algo salió mal
        </div>
      )}
    </form>
    </>
  )
}
