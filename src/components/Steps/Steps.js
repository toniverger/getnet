/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.css";


const Steps = ({ text1, text2, text3, src1, src2, src3, class_1, class_2, class_3, hr_1, hr_2 }) => {
  return (
    <div className="Steps">
      <div className="encloseSteps">
        <img src={src1} />
        <p id="hidden-resp" className={class_1}> {text1} </p>
      </div>
      <div className="content-hr_step">
        <hr className={hr_1}></hr>
      </div>
      <div className="encloseSteps">
        <img src={src2} />
        <p id="hidden-resp" className={class_2}> {text2} </p>
      </div>
      <div className="content-hr_step">
        <hr className={hr_2}></hr>
      </div>
      <div className="encloseSteps">
        <img src={src3} />
        <p id="hidden-resp" className={class_3}> {text3} </p>
      </div>
    </div>
  );
};

export default Steps;