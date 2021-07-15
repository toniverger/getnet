import React from 'react';
import Page from '../components/structure/Pages';
import Steps from '../components/Steps/Steps';
import { Button } from '../components/Buttons/continue/Button';

import infor from "../images/icon-infor.svg";
import docs from "../images/icon.docs-disabled.svg";
import revision from "../images/icon-revision.svg";

const Adress = () => {
    return (
        <Page content={
            <>
                <Steps class_1="text_active" text1="4 - Información del domicilio y operativa de venta" class_2="text_disabled" text2="5 - Rubro, información fiscal y documentación" class_3="text_disabled" text3="6- Revisión" src1={infor} src2={docs} src3={revision} />
                <hr></hr>
                <h className="text-adress title">Completá los datos del domicilio y operativa de venta</h>
                <div className="form-adress-respons">
                    <form id="form-adress">
                        <p className="subtitle-adress black font18 bold">Domicilio principal:</p>
                        <input className="input input-adress input-select" type="select" placeholder="Seleccioná Departamento *" required ></input>
                        <input className="input input-adress input-select" placeholder="Selecciona la localidd"></input>
                        <input className="input input-adress input-select" placeholder="Selecciona el barrrio"></input>
                        <input className="input input-adress input-dir" placeholder="Direccion"></input>
                        <input className="input input-adress" placeholder="numero"></input>
                        <input className="input input-adress" placeholder="solar"></input>
                        <input className="input input-adress" placeholder="manzana"></input>
                    </form>
                </div>
                <div className="salesOperations">
                    <p className="black font18 bold">Operativa de venta:</p>
                    <p className="gray">(Debes seleccionar al menos una opción)</p>
                    <button className="btn-round_active">Venta con tarjeta presente(POS)</button>
                    <button className="btn-round">Venta telefónica</button>
                    <button className="btn-round btn-hidden">Venta por internet</button>
                </div>
                <div className="next">
                    <hr className="hr-bottom"></hr>
                    <div className="next-button">
                        <Button className="btnContinue-two" to="/docs" text="Continuar >" />
                    </div>
                </div>
            </>
        }
        />
    )
}
export default Adress;
