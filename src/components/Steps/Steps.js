import React from "react";
import "./style.css";


const Steps = ({ text1, text2, text3, src1, src2, src3, class_1, class_2, class_3 }) => {
  return (
    <div className="Steps">
      <div className="encloseSteps">
        <img src={src1} />
        <p id="hidden-resp" className={class_1}> {text1} </p>
      </div>
      <hr className="hr-step"></hr>
      <div className="encloseSteps">
        <img src={src2} />
        <p id="hidden-resp" className={class_2}> {text2} </p>
      </div> <hr className="hr-step"></hr>
      <div className="encloseSteps">
        <img src={src3} />
        <p id="hidden-resp" className={class_3}> {text3} </p>
      </div>
    </div>
  );
};

export default Steps;