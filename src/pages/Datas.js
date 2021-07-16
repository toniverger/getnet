import React from "react";
import Page from "../components/structure/Pages";
import { Form } from "../components/Form/Form";
import Steps from "../components/Steps/Steps";

import empresa from "../images/icon-empresa-active.svg";
import validar from "../images/icon-validar-disabled.svg";
import confirmar from "../images/icon-confirm-disabled.svg";

export const Datas = () => {
  return (
    <Page
      content={
        <>
          <Steps class_1="text_active" text1="1- Datos de la empresa" class_2="text-disabled" class_3="text-disabled" text2="2 - Validar número de celular" text3="3 - Confirmación de la cuenta" src1={empresa} src2={validar} src3={confirmar} />
          <hr></hr>
          <h className="title-data title-page">¡Gracias por querer ser parte de empresa!</h>
          <p className="subtitle-data subtitle-page">Ahora sólo necesitamos que completes algunos datos sobre ti y tu empresa"</p>
          <Form />
        </>
      }
    />
  );
};
