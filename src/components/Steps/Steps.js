import React from 'react';
import './style.css';
import empresaActive from '../../images/icon-empresa-active.svg';
import validarDisabled from '../../images/icon-validar-disabled.svg';
import confirmDisabled from '../../images/icon-confirm-disabled.svg';

const Steps = () => {
    return(
        <div className="Steps">
            <div className="encloseSteps">
       <img src={empresaActive} />
       <p className="text_tel">1 -Datos de la empresa</p>
            </div>
            <div  className="encloseSteps">
                <img src={validarDisabled} />
  <p className="text_num"> 2 - Validar número de celular</p>

            </div>
            <div  className="encloseSteps">
                <img src={confirmDisabled} />
<p className="text_acc">3 - Confirmación de la cuenta</p>
            </div>
        </div>
    )
}

export default Steps;