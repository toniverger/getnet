import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Inputs from "../Inputs/Inputs";
import "./style.css";
import { Link } from "react-router-dom";
export const Form = () => {
  const onChange = () => {
    console.log("reCaptch ok");
  };
  return (
    <form className="form">
      <h1 className="title">¡Gracias por querer ser parte de empresa!</h1>
      <p className="subtitle">
        Ahora sólo necesitamos que completes algunos datos sobre ti y tu empresa
      </p>
      <div className="container-inputs">
        <Inputs placeholder="Numero de Rut" />
        <Inputs placeholder="Nombre fantasia" />
        <Inputs placeholder="Nombre y Apellido" />
        <Inputs placeholder="Celular" />
        <Inputs placeholder="Email" />
        <ReCAPTCHA
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
      <button className="btnContinue">Continuar > </button>
    </form>
  );
};
