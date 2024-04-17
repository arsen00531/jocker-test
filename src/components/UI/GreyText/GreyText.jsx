import React from 'react';
import cl from './GreyText.module.css'
const GreyText = ({className , ...props}) => {
    return (
        <p className= { className ? [cl.GreyText , className].join(' ') : cl.GreyText   }>{ props.children }</p>
    );
};

export default GreyText;