import React from "react";

import "./style.css";

import NavBar from "../NavBar/NavBar";
import { Menu } from "../Menu/Menu";
import Individuals from "../../images/Individuals.png";

const Page = ({ content }) => {
  return (
    <div className="container-root">
      <div className="content-nav">

      <NavBar />
      </div>
      <div className="content-menu">

      <Menu/>
      </div>
      
      <div className="content1">
        <div className="left">
          <img className="img-root" src={Individuals} />
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
