import React from "react";

import "./style.css";

import NavBar from "../NavBar/NavBar";
import Individuals from "../../images/Individuals.png";

const Page = ({ content }) => {
  return (
    <div className="container-root">
      <NavBar />
      <div className="content1">
        <div className="left">
          <img src={Individuals} />
        </div>
        <div className="right">
          <div className="content2">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
