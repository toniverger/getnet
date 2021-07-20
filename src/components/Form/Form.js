import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Inputs from "../Inputs/Inputs";
import { Button } from "../Buttons/continue/Button";
import { Link } from "react-router-dom";
import "./style.css";
export const Form = () => {
  const [inputRut, setInputRut] = useState("");
  const captcha = useRef(null);

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("captcha valido");
    } else {
      console.log("captcha no valido");
    }
  };
  const showTextRut = (e) => {
    setInputRut(e.target.value)
  }

  const Continuar = () => {
    //example
    if (inputRut.length > 10) {
      console.log("mayor a 10")
      return true;
    } else {
      console.log("no es mayor a 10")
      return false;
    }
  }

  return (
    <div className="form-root">
      <form className="form-page">
        <div className="container-inputs">
          <Inputs value={inputRut} onChange={showTextRut} placeholder="Numero de Rut" type="number"/>
          <Inputs className="inputss" placeholder="Nombre fantasia " type="text" />
          <Inputs placeholder="Nombre y Apellido" type="text" />
          <Inputs placeholder="Celular" type="number"/>
          <Inputs placeholder="Email" type="email" />
        </div>
        <ReCAPTCHA
          className="captcha"
          ref={captcha}
          sitekey="6Le-TFcbAAAAAEQ0K_e0xBLDvdS5Fj8NYgadM8fD"
          onChange={onChange}
        />
        <div className="container-terms">
          <input type="checkbox"></input>
          <label className="labelCheckbox">
            Acepto los{" "}
            <span>
              <Link to="#" className="link-conditions">
                {" "}
                Terminos y condiciones
              </Link>{" "}
            </span>
          </label>
        </div>
      </form>
      <div className="next">
        <hr className="hr-bottom"></hr>
        <div className="next-button">
          <Button className="btnContinue btn-form" onClick={Continuar()} to="/validate" text="Continuar >" />
        </div>
      </div>
    </div>
  );
};
