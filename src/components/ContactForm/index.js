import React, { useState } from "react";

import "./styles.css";

const ContactForm = () => {
  const nameRegex = /(\w{2,})\s(\w{2,})/g;
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState({ name: "", email: "", text: "" });
  console.log(nameRegex.test(message.name));

  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const validate = (e, message) => {
    if (!nameRegex.test(message.name)) {
      console.log(message);
      console.log(visible);
      setVisible(true);
      e.preventDefault();
    }
    if (nameRegex.test(message.name)) {
      setVisible(false);
    }
  };

  return (
    <form
      action="#"
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
      <label style={{ display: visible ? "block" : "none", color: "black" }}>
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
      <button className="wow fadeIn" data-wow-delay="0.9s" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
