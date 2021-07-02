import React from 'react';
import Page from '../components/structure/Pages';
import Steps from '../components/Steps/Steps';
import Text from '../components/Texts/Text';
import { Button } from '../components/Buttons/continue/Button';

import infor from "../images/icon-infor.svg";
import docs from "../images/icon-docs-active.svg";
import revision from "../images/icon-revision.svg";
import info from '../images/info.svg';

const Documentation = () => {
    return (
        <Page content={
            <>
                <Steps text1="4 - Información del domicilio y operativa de venta" text2="5 - Rubro, información fiscal y documentación" text3="6- Revisión" src1={infor} src2={docs} src3={revision} />
                <Text title="Rubro, información fiscal y documentación" />
                <p className="black">Rubro:</p>
                <input className="input input-select" placeholder="Seleccioná Rubro *"></input>
                <input className="input input-select" placeholder="Seleccioná Sub-rubro *"></input>
                <input type="checkbox" ></input>
                <label className="gray font18">Aplica Ley Nº 17.934 i</label>
                <p className="black">Tipo de contribuyente:</p>
                <img src={info} alt="icon-info" />
                <p className="gray">Tengo declaración jurada por exoneración</p>
                <p className="black font18">Adjuntar foto de tarjeta de RUT o Formulario DGI 6361 - 6161 - 6351: *</p>
                <div className="next">
                <Button className="btnContinue-two" to="/review" text="Finalizar >" />
                </div>
            </>
        } />
    )
}
export default Documentation;