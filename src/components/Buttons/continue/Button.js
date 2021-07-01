import React from 'react';
import { Link } from "react-router-dom";
import '../styles.css';

export const Button = ({text, to, onClick}) => {
    return(
        <button className="btnContinue">
        <Link to={to} onClick={onClick} className="link-btnContinue">
            {text}
        </Link>
    </button>
    )
}