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
               <hr></hr>
                <Text title="Completá los datos del domicilio y operativa de venta" />
                <form id="form-adress">
                    <p className="black">Domicilio principal:</p>
                    <input className="input-adress input-select" type="select" placeholder="Seleccioná Departamento *" required ></input>
                    <input className="input-adress input-select" placeholder="Selecciona la localidd"></input>
                    <input className="input-adress input-select" placeholder="Selecciona el barrrio"></input>
                    <input className="input-adress input-select" placeholder="numero"></input>
                    <input className="input-adress" placeholder="Direccion"></input>
                    <input className="input-adress" placeholder="solar"></input>
                    <input className="input-adress" placeholder="manzana"></input>
                </form>
                <div className="salesOperations">
                <p className="black">Operativa de venta:</p>
                <p className="gray">(Debes seleccionar al menos una opción)</p>
                <button className="btn-round_active">Venta con tarjeta presente</button>
                <button className="btn-round">Venta telefónica</button>
                <button className="btn-round">Venta por internet</button>
                </div>
                <hr></hr>
                <div className="container-btnContinue">
                    <Button to="/docs" text="Continue >" />
                </div>
            </>
        }
        />
    )
}
export default Adress;

/*
<select
                        id="departamento_select_pagina" ng-change="update()" ng-model="selected"
                        placeholder="seleccione">
                        <option value="? undefined:undefined ?" selected="selected">
                        </option>
                        <option value="todos">Seleccionar</option>
                        <option value="2">Artigas</option>
                        <option value="3">Canelones</option>
                        <option value="4">Cerro Largo</option>
                        <option value="5">Colonia</option>
                        <option value="6">Durazno</option>
                        <option value="7">Flores</option>
                        <option value="8">Florida</option>
                        <option value="9">Lavalleja</option>
                        <option value="10">Maldonado</option>
                        <option value="1">Montevideo</option>
                        <option value="11">Paysandú</option>
                        <option value="12">Río Negro</option>
                        <option value="13">Rivera</option>
                        <option value="14">Rocha</option>
                        <option value="15">Salto</option>
                        <option value="16">San José</option>
                        <option value="17">Soriano</option>
                        <option value="18">Tacuarembó</option>
                        <option value="19">Treinta y Tres</option>
                    </select> */



