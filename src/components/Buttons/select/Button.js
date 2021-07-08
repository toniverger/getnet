import React from 'react';
import './style.css';

export const ButtonsSelect = ({ text, className }) => {
    return (
        <button className={className}>{text}</button>
    )
}