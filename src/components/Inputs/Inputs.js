import React from 'react';

const Inputs = (props) => {
    return(
        <input className="inputForm" placeholder={props.placeholder} type={props.type} required></input>
    )
}

export default Inputs;