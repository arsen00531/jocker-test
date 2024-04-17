import React from 'react';
import icon from '../../../images/icon.png'
import galks from '../../../images/Subtract.png'
import Star from '../../../images/Star.png'
const Customer = ({customerName, rate}) => {
    return (
        <div className = 'customerContainer'>
            <p className='customer__up'>Заказчик</p>
            <div className="customer__information">
                <img className='information-icon' src={icon} alt="" />
                <div className="customer__information-right">
                    <div className="customer__information-right-name">
                        <p>{customerName}</p>
                        <img src= {galks} alt="" />
                    </div>
                    <div className="customer__information-right-rate">
                        <div className="customer__information-right-rate-images">
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                        </div>
                        <p className='rate'>{rate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;