import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Inputs from "../Inputs/Inputs";
import "./style.css";
import { Link } from "react-router-dom";
export const Form = () => {
  const captcha = useRef(null);

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("captcha valido");
    } else {
      console.log("captcha no valido");
    }
  };

  return (
    <form className="form">
      <div className="container-inputs">
        <Inputs placeholder="Numero de Rut" />
        <Inputs placeholder="Nombre fantasia" type="text" />
        <Inputs placeholder="Nombre y Apellido" type="text" />
        <Inputs placeholder="Celular" />
        <Inputs placeholder="Email" type="email" />
        <ReCAPTCHA
          ref={captcha}
          sitekey="6Le-TFcbAAAAAEQ0K_e0xBLDvdS5Fj8NYgadM8fD"
          onChange={onChange}
        />
      </div>
      <input type="checkbox"></input>
      <label className="labelCheckbox">
        Acepto los{" "}
        <span>
          <Link to="/validate" className="link-conditions">
            {" "}
            Terminos y condiciones
          </Link>{" "}
        </span>
      </label>
      <div className="container-btnContinue">
        <button className="btnContinue">
          <Link to="/validate" className="link-btnContinue">
            {" "}
            Continuar >
          </Link>{" "}
        </button>
      </div>
    </form>
  );
};
