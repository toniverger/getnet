import React from "react";
import "./style.css";

import { Form } from "../components/Form/Form";
import NavBar from "../components/NavBar/NavBar";
import Steps from "../components/Steps/Steps";
import Individuals from "../images/Individuals.png";
export const Confirm = () => {
  return (
    <div className="container-root">
      <NavBar />
      <div className="content">
        <div className="left">
          <img src={Individuals} />
        </div>
        <div className="right">
          <div className="stepsAndForm">

        <Steps />
          <Form />
          </div>
        </div>
      </div>
    </div>
  );
};
