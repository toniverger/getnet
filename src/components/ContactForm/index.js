import React from 'react'

import './styles.css'

const ContactForm = () => {
    return (
        <form action="" className="contactForm">
              <input
                className="wow fadeInUpSmall"
                data-wow-delay="0.6s"
                type="text"
                placeholder="Nombre completo"
              />
              <input
                className="wow fadeInUpSmall"
                data-wow-delay="0.7s"
                type="text"
                placeholder="Email"
              />
              <textarea
                className="wow fadeInUpSmall"
                data-wow-delay="0.8s"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Mensaje"
              ></textarea>
              <button className="wow fadeIn" data-wow-delay="0.9s" type="submit">
                Enviar
              </button>
            </form>
    )
}

export default ContactForm