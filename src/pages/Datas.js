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
          <Steps empresa={empresa} validar={validar} confirmar={confirmar} />
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
