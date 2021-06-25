import React from "react";
import "./styles.css";
import user from "../../images/user.svg";
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';

const NavBar = () => {
  return (
    <div className="container-nav">
      <button className="btnClient">
        <img src={user} alt="logo" />
        &nbsp; Hacete cliente
      </button>
      <div className="container-icons">
      <img src={facebook} />
      <img src={instagram} />
      <img src={facebook} />
      </div>
    </div>
  );
};

export default NavBar;
