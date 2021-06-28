import React from 'react';
import './style.css';
const Text = ({ title, subtitle }) => {
    return (
        <div>
            <h1 className="title">{title}</h1>
            <p className="subtitle">{subtitle}</p>
        </div>
    )
}
export default Text;