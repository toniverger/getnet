/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Page from '../components/structure/Pages';
import Steps from '../components/Steps/Steps';
import { Button } from '../components/Buttons/continue/Button';
import { ButtonsSelect } from '../components/Buttons/select/Button';

import infor from "../images/icon-infor.svg";
import docs from "../images/icon-docs-active.svg";
import revision from "../images/icon-revision.svg";
import info from '../images/info.svg';
import question from '../images/question-mark.svg';
import file from '../images/file-upload-solid.svg';

const Documentation = () => {
    return (
        <Page content={
            <>
                <Steps hr_1="hr-step_active" hr_2="hr-step" class_1="text_active" text1="4 - Información del domicilio y operativa de venta" class_2="text_active font-bold" text2="5 - Rubro, información fiscal y documentación" class_3="text-disabled" text3="6- Revisión" src1={infor} src2={docs} src3={revision} />
                <hr></hr>
                <h className="title-page">Rubro, información fiscal y documentación</h>
                <div className="form-doc">
                    <p className="rubro subtitle-docs black">Rubro:</p>
                    <div className="content-one_doc">
                    <input className="input input-select input-docs" placeholder="Seleccioná Rubro *"></input>
                    <input className="input input-select input-docs" placeholder="Seleccioná Sub-rubro *"></input>
                    <div className="content-checkbox">
                        <input type="checkbox" ></input>
                        <label className="text-checkbox gray font18">Aplica Ley Nº 17.934 </label>
                        <img src={info} alt="icon-info" />
                    </div>
                    </div>
                    <div className="content-subtitle">
                        <p className="subtitle-docs black">Tipo de contribuyente:  &nbsp;</p>
                        <img src={question} alt="icon-question" />
                    </div>
                    <div className="content-docs_buttons">
                        <ButtonsSelect className="btn-selected" text="Grandes contribuyentes" />
                        <ButtonsSelect className="btn-selected" text="NO CEDE" />
                        <ButtonsSelect className="btn-selected" text="Monotributo" />
                        <ButtonsSelect className="btn-selected" text="CEDE" />
                        <ButtonsSelect className="btn-selected" text="Pequeña empresa" />
                        <ButtonsSelect className="btn-selected" text="Monotributo - Mides" />
                    </div>
                    <div className="content-checkbox">
                        <input type="checkbox"></input>
                        <label className="text-checkbox gray">Tengo declaración jurada por exoneración</label>
                    </div>
                    <p className="adjunt subtitle-docs black font18">Adjuntar foto de tarjeta de RUT o Formulario DGI 6361 - 6161 - 6351: *</p>
                    <div class="container-input-docs">
                        <label for="file">
                            <figure>
                                <img src={file} />
                                <span class="text-file iborrainputfile">Adjuntá o arrastrá tu archivo.</span>
                            </figure>
                            <p className="gray">Debe estar en formato JPG PNG o PDF y no pesar más de 5MB.</p>
                        </label>
                    </div>
                    <p className="adjunt subtitle-docs black font18">Adjuntar frente y dorso de Cédula de identidad: *</p>
                    <div class="container-input-docs ci">
                        <label for="file">
                            <figure>
                                <img src={file} />
                                <span class="text-file iborrainputfile">Adjuntá o arrastrá tu archivo.</span>
                            </figure>
                            <p className="gray">Debe estar en formato JPG PNG o PDF y no pesar más de 5MB.</p>
                        </label>
                    </div>
                </div>
                <div className="next next-doc">
                    <hr className="hr-bottom"></hr>
                    <div className="next-button">
                        <Button className="btnContinue-docs" to="/review" text="Finalizar >" />
                    </div>
                </div>
            </>
        } />
    )
}
export default Documentation;