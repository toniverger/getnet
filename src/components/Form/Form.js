import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Inputs from "../Inputs/Inputs";
import { Button } from "../Buttons/continue/Button";
import { Link } from "react-router-dom";
import "./style.css";
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
        <div className="input-mail">
          <Inputs placeholder="Email" type="email" />
        </div>
        <ReCAPTCHA
          className="captcha"
          ref={captcha}
          sitekey="6Le-TFcbAAAAAEQ0K_e0xBLDvdS5Fj8NYgadM8fD"
          onChange={onChange}
        />
      </div>
      <div className="container-terms">
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
      </div>
      <hr></hr>
      <div className="container-btnContinue">
        <Button  to="/validate" text="Continuar >" />
      </div>
    </form>
  );
};
