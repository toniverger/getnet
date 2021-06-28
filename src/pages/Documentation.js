import React from 'react';
import Pages from '../components/structure/Pages';
import Steps from '../components/Steps/Steps';
import Text from '../components/Texts/Text';

import infor from "../images/icon-infor.svg";
import docs from "../images/icon-docs-active.svg";
import revision from "../images/icon-revision.svg";

const Documentation =  ( ) => {
    return(
        <Pages  content={
            <>
            <Steps text1="4 - Información del domicilio y operativa de venta" text2="5 - Rubro, información fiscal y documentación" text3="6- Revisión" src1={infor} src2={docs} src3={revision} />
           <Text title="Rubro, información fiscal y documentación" />
           </>
        } />
    )
}
export default Documentation;