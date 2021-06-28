import React from 'react';

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
                    <Steps src1={empresa} src2={validar} src3={confirmar} />
                    <hr></hr>
                    <Text title="Ingresa el código que te enviamos a tu celular" subtitle="Lo enviamos al 090 000 000 para confirmar que te pertenece" />
                    <hr></hr>
                    <div className="container-btnContinue">
                    <Button text="Continuar >" to="/confirm" />
                    </div>
                </>
            } />
        </>
    )
}
