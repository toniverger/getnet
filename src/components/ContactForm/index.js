import React, { useState } from "react";

import "./styles.css";

const ContactForm = () => {
  const nameRegex = /(\w{2,})\s(\w{2,})/g;
  const emailRegex = /[\w\.]+@([\w]+\.)+[\w]{2,4}/gi;
  const [nameErrorVisible, setNameErrorVisible] = useState(false);
  const [mailErrorVisible, setMailErrorVisible] = useState(false);
  const [textErrorVisible, setTextErrorVisible] = useState(false);
  const [message, setMessage] = useState({ name: "", email: "", text: "" });

  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const validate = (e, message) => {
    if (!nameRegex.test(message.name)) {
      setNameErrorVisible(true);
      e.preventDefault();
    } else {
      setNameErrorVisible(false);
    }

    if (emailRegex.test(message.email) === false) {
      setMailErrorVisible(true);
      e.preventDefault();
    } else {
      setMailErrorVisible(false);
    }
    
    if (message.text.length < 15) {
      setTextErrorVisible(true);
      e.preventDefault();
    } else {
      setTextErrorVisible(false);
    }

  };

  return (
    <form
      action="/"
      className="contactForm"
      onSubmit={(e) => validate(e, message)}
    >
      <input
        name="name"
        id="formName"
        className="wow fadeInUpSmall"
        data-wow-delay="0.6s"
        type="text"
        placeholder="Nombre completo"
        onKeyUp={handleChange}
      />
      <label
        className="labelError"
        style={{ display: nameErrorVisible ? "block" : "none", color: "black" }}
      >
        El nombre debe tener 2 palabras de al menos dos letras cada una
      </label>
      <input
        name="email"
        className="wow fadeInUpSmall"
        data-wow-delay="0.7s"
        type="text"
        placeholder="Email"
        onKeyUp={handleChange}
      />
      <label
        className="labelError"
        style={{ display: mailErrorVisible ? "block" : "none", color: "black" }}
      >
        Por favor, ingresa un email válido
      </label>
      <textarea
        name="text"
        className="wow fadeInUpSmall"
        data-wow-delay="0.8s"
        id=""
        cols="30"
        rows="10"
        placeholder="Mensaje"
        onKeyUp={handleChange}
      ></textarea>
      <label
        className="labelError"
        style={{ display: textErrorVisible ? "block" : "none", color: "black" }}
      >
        El mensaje debe ser más largo
      </label>
      <button className="wow fadeIn" data-wow-delay="0.9s" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
