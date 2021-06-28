import React from "react";
import "./style.css";


const Steps = ({src1, src2, src3}) => {
  return (
    <div className="Steps">
      <div className="encloseSteps">
        <img src={src1} />
        <p className="text_tel">1 -Datos de la empresa</p>
      </div>
      <div className="encloseSteps">
        <img src={src2} />
        <p className="text_num"> 2 - Validar número de celular</p>
      </div>
      <div className="encloseSteps">
        <img src={src3} />
        <p className="text_acc">3 - Confirmación de la cuenta</p>
      </div>

    </div>
  );
};

export default Steps;
