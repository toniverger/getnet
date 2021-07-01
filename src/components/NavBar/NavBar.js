import React from "react";
import "./styles.css";
import user from "../../images/user.svg";
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import linkedin from '../../images/linkedin.svg';

const NavBar = () => {
  return (
    <div className="container-nav">
      <button className="btnClient">
        <img src={user} alt="logo" />
        &nbsp; Hacete cliente
      </button>
      <div className="container-icons">
      <img src={facebook} />
      <img src={linkedin} />
      <img src={instagram} />
      </div>
    </div>
  );
};

export default NavBar;
