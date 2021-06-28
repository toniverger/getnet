import React from 'react';
import Pages from '../components/structure/Pages';
import Steps from '../components/Steps/Steps';
import empresa from "../images/icon-empresa-active.svg";
import validar from "../images/icon-validar-active.svg";
import confirmar from "../images/icon-confirm-active.svg";
import Text from '../components/Texts/Text';
import { Button } from '../components/Buttons/continue/Button';

const Confirm = () => {
    return (
        <div>
            <Pages content={
                <>
                    <Steps empresa={empresa} validar={validar} confirmar={confirmar} />
                    <hr></hr>
                    <Text title="¡Listo!" />
                    <Text title="Creaste tu cuenta en Empresa" subtitle="Para que tu comercio quede operativo deberás completar otros datos." />
                    <hr></hr>
                    <div className="container-btnContinue">
                        <Button to="/" text="Continue >" />
                    </div>
                </>
            } />

        </div>
    )
}
export default Confirm;