import React from 'react';
import cl from './Pallete.module.css'
import PalleteImg from '../../../images/icons/Palitra.png'
const Pallete = ({className}) => {
    return (
        <div className = {className ? [cl.Pallete , className].join(' ') : cl.Pallete}>
            <img src = {PalleteImg} alt="" />
        </div>
    );
};

export default Pallete;