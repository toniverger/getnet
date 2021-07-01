import React from 'react';
import './style.css';

const Inputs = (props) => {
    return(
        <input className="inputForm" placeholder={props.placeholder} type={props.type} value={props.value} onChange={props.onChange} required></input>
    )
}

export default Inputs;