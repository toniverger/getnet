import React from 'react';
import { Link } from "react-router-dom";
import '../styles.css';

export const Button = ({text, to, onClick, className}) => {
    return(
        <button className={className}>
        <Link to={to} onClick={onClick} className="link-btnContinue">
            {text}
        </Link>
    </button>
    )
}