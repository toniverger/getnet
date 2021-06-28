import React from "react";
import "./style.css";


const Steps = ({empresa, validar, confirmar}) => {
  return (
    <div className="Steps">
      <div className="encloseSteps">
        <img src={empresa} />
        <p className="text_tel">1 -Datos de la empresa</p>
      </div>
      <div className="encloseSteps">
        <img src={validar} />
        <p className="text_num"> 2 - Validar número de celular</p>
      </div>
      <div className="encloseSteps">
        <img src={confirmar} />
        <p className="text_acc">3 - Confirmación de la cuenta</p>
      </div>

    </div>
  );
};

export default Steps;
