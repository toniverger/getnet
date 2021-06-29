import React from 'react';
import { Link } from 'react-router-dom';
import '../components/global.css';

import Pages from '../components/structure/Pages';

import Steps from '../components/Steps/Steps';
import empresa from "../images/icon-empresa-active.svg";
import validar from "../images/icon-validar-active.svg";
import confirmar from "../images/icon-confirm-disabled.svg";
import Text from '../components/Texts/Text';
import { Button } from '../components/Buttons/continue/Button';


export const Validate = () => {
    return (
        <>
            <Pages content={
                <>
                    <Steps text1="1- Datos de la empresa" text2="2 - Validar número de celular" text3="3 - Confirmación de la cuenta" src1={empresa} src2={validar} src3={confirmar} />
                    <hr></hr>
                    <Text title="Ingresa el código que te enviamos a tu celular" subtitle="Lo enviamos al 090 000 000 para confirmar que te pertenece" />
                    <form id="form" className="form-code">
                        <input className="input-code" type="number" name="dc1" placeholder="x" title="Dígito de Control" min="0" max="1" autocomplete="cc-number" required autoFocus></input>
                        <input className="input-code" type="number" name="dc1" placeholder="x" title="Dígito de Control" min="0" max="1" autocomplete="cc-number" required ></input>
                        <input className="input-code" type="number" name="dc1" placeholder="x" title="Dígito de Control" min="0" max="1" autocomplete="cc-number" required ></input>
                        <input className="input-code" type="number" name="dc1" placeholder="x" title="Dígito de Control" min="0" max="1" autocomplete="cc-number" required ></input>
                        <p id="new-code" className="gray">¿No te llegó el código?<Link  to="#" className="violet">Volver a enviar</Link></p>
                    </form>
                    <hr></hr>
                    <div className="container-btnContinue">
                        <Button text="Continuar >" to="/confirm" />
                    </div>
                </>
            } />
        </>
    )
}
