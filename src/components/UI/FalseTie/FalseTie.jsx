import React from 'react';
import cl from './FalseTie.module.css'
import FalseTieImg from './../../../images/icons/Tie.svg'
const FalseTie = ({className}) => {
    return (
        <div className = {className ? [cl.FalseTie , className].join(' ') : cl.FalseTie}>
            <img src = {FalseTieImg} alt="" />
        </div>
    );
};

export default FalseTie;