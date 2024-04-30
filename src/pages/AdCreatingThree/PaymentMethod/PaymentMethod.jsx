import React from 'react';
import cl from './MethodPayment.module.css'
import valletIcon from '../../../images/icons/wallet.svg'
import upDown from '../../../images/icons/UpDown.svg'
const PaymentMethod = ({className}) => {
    return (
        <div className={className ? [cl.PaymentMethod , className].join(' ') : cl.PaymentMethod}>
            <div className={cl.left}>
                <div className="block" style={{display : 'block' , lineHeight : 0}}>
                    <img style={ {margin : 0}}  src={valletIcon} alt="" />
                </div>
                <p>Способ оплаты</p>
            </div>
            <a className={cl.link} href="">
                <p>Wallet Pay</p>
                <div className="block" style={{display : 'block', lineHeight : 0}}>
                    <img src={upDown} style={ {width : 'auto' , height : '13px'  }} alt="" />
                </div>
            </a>
        </div>
    );
};

export default PaymentMethod;