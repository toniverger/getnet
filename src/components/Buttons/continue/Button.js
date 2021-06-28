import React from 'react';
import { Link } from "react-router-dom";
import '../styles.css';

export const Button = ({text, to}) => {
    return(
        <button className="btnContinue">
        <Link to={to} className="link-btnContinue">
            {text}
        </Link>
    </button>
    )
}