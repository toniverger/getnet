import React from 'react';
import Pages from '../components/structure/Pages';

import { Form } from '../components/Form/Form';
import Steps from '../components/Steps/Steps';
import empresa from "../images/icon-empresa-active.svg";
import validar from "../images/icon-validar-active.svg";
import confirmar from "../images/icon-confirm-disabled.svg";
import Text from '../components/Texts/Text';

export const Validate = ()=> {
    return(
        <div>
            <Pages  content={
                  <>
                  <Steps empresa={empresa} validar={validar} confirmar={confirmar} />
                  <Text title="Ingresa el código que te enviamos a tu celular" subtitle="Lo enviamos al 090 000 000 para confirmar que te pertenece" />
                  </>
            }/>
        </div>
    )
}
