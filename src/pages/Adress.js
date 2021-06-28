import React from 'react';
import Pages from '../components/structure/Pages';
import Steps from '../components/Steps/Steps';
import Text from '../components/Texts/Text';
import { Button } from '../components/Buttons/continue/Button';

import infor from "../images/icon-infor.svg";
import docs from "../images/icon-docs.svg";
import revision from "../images/icon-revision.svg";

const Adress = () => {
    return (
        <Pages content={
            <>
                <Steps text1="4 - Información del domicilio y operativa de venta" text3="6- Revisión" src1={infor} src2={docs} src3={revision} />
                <Text title="Completá los datos del domicilio y operativa de venta" />
                <div className="container-btnContinue">
                    <Button to="/docs" text="Continue >" />
                </div>
            </>
        }
        />
    )
}
export default Adress;