import React from 'react';

export const btnContinue = (props) => {
    return(
        <button className={props.class}> {props.text} </button>
    )
}