import React from 'react';
import cl from './MethodPayment.module.css'
import valletIcon from '../../../images/icons/vallet.svg'
import upDown from '../../../images/icons/UpDown.svg'
const PaymentMethod = ({className}) => {
    return (
        <div className={className ? [cl.PaymentMethod , className].join(' ') : cl.PaymentMethod}>
            <div className={cl.left}>
                <img src={valletIcon} alt="" />
                <p>Способ оплаты</p>
            </div>
            <a className={cl.link} href="">
                <p>Wallet Pay</p>
                <img src={upDown} alt="" />
            </a>
        </div>
    );
};

export default PaymentMethod;