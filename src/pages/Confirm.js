import React from 'react';
import Page from '../components/structure/Pages';
import Steps from '../components/Steps/Steps';
import empresa from "../images/icon-empresa-active.svg";
import validar from "../images/icon-validar-active.svg";
import confirmar from "../images/icon-confirm-active.svg";
import Text from '../components/Texts/Text';
import { Button } from '../components/Buttons/continue/Button';

const Confirm = () => {
    return (
        <div>
            <Page content={
                <>
                    <Steps class_1="text_active" text1="1- Datos de la empresa" class_2="text_active" text2="2 - Validar número de celular" class_3="text_active"  text3="3 - Confirmación de la cuenta" src1={empresa} src2={validar} src3={confirmar} />
                    <hr></hr>
                    <div className="confirm">
                       
                        <h className="title">!Listo!</h>
                        <Text title="Creaste tu cuenta en Empresa" subtitle="Para que tu comercio quede operativo deberás completar otros datos." />
                    </div>
                    <hr></hr>
                    <div className="next">
                    <Button className="btnContinue-two" to="/adress" text="Continue >" />
                    </div>
                </>
            } />

        </div>
    )
}
export default Confirm;