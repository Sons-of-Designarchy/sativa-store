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
      <div className="d-flex">
        <div style={{ marginRight: "1rem" }}>
          <input
            placeholder="Ingresa tu correo"
            name="email"
            type="text"
            onChange={handleEmailChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="sativa-btn">Suscribete</button>
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
