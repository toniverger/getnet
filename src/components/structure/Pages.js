import React from "react";
import NavBar from "../NavBar/NavBar";
import Steps from "../Steps/Steps";
import Individuals from "../../images/Individuals.png";
import "./style.css";

import empresa from "../../images/icon-empresa-active.svg";
import validar from "../../images/icon-validar-disabled.svg";
import confirmar from "../../images/icon-confirm-disabled.svg";

const Page = ({ content }) => {
  return (
    <div className="container-root">
      <NavBar />
      <div className="content">
        <div className="left">
          <img src={Individuals} />
        </div>
        <div className="right">
          <div className="conte">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
