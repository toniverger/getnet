import React from "react";
import Pages from "../components/structure/Pages";
import { Form } from "../components/Form/Form";
import Steps from "../components/Steps/Steps";
import Text from "../components/Texts/Text";

import empresa from "../images/icon-empresa-active.svg";
import validar from "../images/icon-validar-disabled.svg";
import confirmar from "../images/icon-confirm-disabled.svg";

export const Datas = () => {
  return (
    <Pages
      content={
        <>
          <Steps text1="1- Datos de la empresa" text2="2 - Validar número de celular" text3="3 - Confirmación de la cuenta" src1={empresa} src2={validar} src3={confirmar} />
          <hr></hr>
          <Text
            title="¡Gracias por querer ser parte de empresa!"
            subtitle="Ahora sólo necesitamos que completes algunos datos sobre ti y tu empresa"
          />
          <Form />
        </>
      }
    />
  );
};
