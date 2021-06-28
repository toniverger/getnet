import React from 'react';
import Pages from '../components/structure/Pages';
import Steps from '../components/Steps/Steps';

import empresa from "../images/icon-infor.svg";
import validar from "../images/icon-docs.svg";
import confirmar from "../images/icon-revision.svg";

const Adress = ( ) => {
    return(
        <Pages content={
            <Steps empresa={empresa} validar={validar} confirmar={confirmar} />
        }
            />
    )
}
 export default Adress;