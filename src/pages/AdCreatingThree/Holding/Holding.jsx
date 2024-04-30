import React from 'react';
import cl from './Holding.module.css'
const Holding = ({className, taskInformation }) => {
    return (
        <div className={className ? [className , cl.Holding].join(' ') : cl.Holding}>
            <p>К ХОЛДУ</p>
            <p>{taskInformation.tonValue} <span className={cl.TON}>TON</span></p>
            <p>~ {taskInformation.budget} RUB</p>
        </div>
    );
};

export default Holding;