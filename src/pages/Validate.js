import React from 'react';
import { Link } from 'react-router-dom';
import '../components/global.css';

import Page from '../components/structure/Pages';

import Steps from '../components/Steps/Steps';
import empresa from "../images/icon-empresa-active.svg";
import validar from "../images/icon-validar-active.svg";
import confirmar from "../images/icon-confirm-disabled.svg";
import Text from '../components/Texts/Text';
import { Button } from '../components/Buttons/continue/Button';


export const Validate = () => {
    return (
        <>
            <Page content={
                <>
                    <Steps class_1="text_active" text1="1- Datos de la empresa" class_2="text_active" text2="2 - Validar número de celular" class_3="text-disabled" text3="3 - Confirmación de la cuenta" src1={empresa} src2={validar} src3={confirmar} />
                    <hr></hr>
                    <Text title="Ingresa el código que te enviamos a tu celular" subtitle="Lo enviamos al 090 000 000 para confirmar que te pertenece" />
                    <form id="form" className="form-code">
                        <div className="validate">
                            <input className="input input-code" type="number" name="dc1" placeholder="x" title="Dígito de Control" min="0" max="1" autocomplete="cc-number" required autoFocus></input>
                            <input className="input input-code" type="number" name="dc1" placeholder="x" title="Dígito de Control" min="0" max="1" autocomplete="cc-number" required ></input>
                            <input className="input input-code" type="number" name="dc1" placeholder="x" title="Dígito de Control" min="0" max="1" autocomplete="cc-number" required ></input>
                            <input className="input input-code" type="number" name="dc1" placeholder="x" title="Dígito de Control" min="0" max="1" autocomplete="cc-number" required ></input>
                        </div>
                        <p id="new-code" className="new-code gray">¿No te llegó el código? <Link to="#" className="linkBack violet"> &nbsp; Volver a enviar</Link></p>
                    </form>
                    <hr></hr>
                    <div className="next">
                        <Button className="btnContinue-two" text="Continuar >" to="/confirm" />
                    </div>
                </>
            } />
        </>
    )
}
