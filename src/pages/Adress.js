import React from 'react';
import Pages from '../components/structure/Pages';
import Steps from '../components/Steps/Steps';

import infor from "../images/icon-infor.svg";
import docs from "../images/icon-docs.svg";
import revision from "../images/icon-revision.svg";

const Adress = ( ) => {
    return(
        <Pages content={
            <Steps text1="4 - Información del domicilio y operativa de venta"  text3="6- Revisión" src1={infor} src2={docs} src3={revision} />
        }
            />
    )
}
 export default Adress;