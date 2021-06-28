import React from "react";
import "./style.css";


const Steps = ({text1, text2, text3, src1, src2, src3}) => {
  return (
    <div className="Steps">
      <div className="encloseSteps">
        <img src={src1} />
        <p className="text_tel"> {text1} </p>
      </div>
      <div className="encloseSteps">
        <img src={src2} />
        <p className="text_num"> {text2} </p>
      </div>
      <div className="encloseSteps">
        <img src={src3} />
        <p className="text_acc"> {text3} </p>
      </div>

    </div>
  );
};

export default Steps;
