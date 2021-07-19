/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./styles.css";
import user from "../../images/user.svg";
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import linkedin from '../../images/linkedin.svg';

const NavBar = () => {
  return (
    <div className="container-nav">
      <a href="#" className="login">
        <img src={user} alt="Hacete cliente" />
        Hacete cliente
      </a>
      <div className="container-icons">
        <a href="#">
          <img className="icon-socials" src={facebook} alt="facebook" />
        </a>
        <a href="#">
          <img className="icon-socials" src={linkedin} alt="Linkedin" />
        </a>
        <a href="#">
          <img className="icon-socials" src={instagram} alt="Instagram" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
