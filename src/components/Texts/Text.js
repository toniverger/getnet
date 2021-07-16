import React from 'react';
import './style.css';
const Text = ({ title, subtitle }) => {
    return (
        <div>
            <h1 className="title-page">{title}</h1>
            <p className="subtitle-page">{subtitle}</p>
        </div>
    )
}
export default Text;