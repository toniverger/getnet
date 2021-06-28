import React from 'react';
import Pages from '../components/structure/Pages';
import Steps from '../components/Steps/Steps';
import empresa from "../images/icon-empresa-active.svg";
import validar from "../images/icon-validar-active.svg";
import confirmar from "../images/icon-confirm-active.svg";
import Text from '../components/Texts/Text';

const Confirm = () => {
    return(
        <div>
        <Pages  content={
              <>
              <Steps empresa={empresa} validar={validar} confirmar={confirmar} />
              <Text title="¡Listo!" />
               <Text title="Creaste tu cuenta en Empresa" subtitle="Para que tu comercio quede operativo deberás completar otros datos." />
              </>
        }/>
    </div>
    )
}
export default Confirm;