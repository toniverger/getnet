import React from 'react';
import Page from '../components/structure/Pages';
import Steps from '../components/Steps/Steps';
import Text from '../components/Texts/Text';
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
                <Steps class_1="text_active" text1="4 - Información del domicilio y operativa de venta" class_2="text_active" text2="5 - Rubro, información fiscal y documentación" class_3="text_disabled" text3="6- Revisión" src1={infor} src2={docs} src3={revision} />
                <Text title="Rubro, información fiscal y documentación" />
                <p className="black">Rubro:</p>
                <input className="input input-select" placeholder="Seleccioná Rubro *"></input>
                <input className="input input-select" placeholder="Seleccioná Sub-rubro *"></input>
                <input type="checkbox" ></input>
                <label className="gray font18">Aplica Ley Nº 17.934 </label>
                <img src={info} alt="icon-info" />
                <div className="content-subtitle">
                    <p className="black">Tipo de contribuyente:  &nbsp;</p>
                    <img src={question} alt="icon-question" />
                </div>
                <ButtonsSelect text="Grandes contribuyentes" />
                <ButtonsSelect text="NO CEDE" />
                <ButtonsSelect text="Monotributo" />
                <ButtonsSelect text="CEDE" />
                <ButtonsSelect text="Pequeña empresa" />
                <ButtonsSelect text="Monotributo - Mides" />
                <input type="checkbox"></input>
                <p className="gray">Tengo declaración jurada por exoneración</p>
                <p className="black font18">Adjuntar foto de tarjeta de RUT o Formulario DGI 6361 - 6161 - 6351: *</p>
                <div className="photo">
                    <div class="container-input">
                        <input type="file" name="file" id="file" class="inputfile inputfile" data-multiple-caption="{count} archivos seleccionados" />
                        <label for="file">
                            <figure>
                                <img src={file} />
                            </figure>
                            <span class="text-file iborrainputfile">Adjuntá o arrastrá tu archivo.</span>
                        </label>
                    </div>
                </div>
                <div className="next">
                    <Button className="btnContinue-two" to="/review" text="Finalizar >" />
                </div>
            </>
        } />
    )
}
export default Documentation;