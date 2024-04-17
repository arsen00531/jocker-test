import React from 'react';
import cl from './SecondAddCreating.module.css'
import Cap from '../../../components/UI/Cap/Cap';
import Budget from '../Budget/Budget'
import DatePicker from '../DatePicker/DatePicker';
const SecondAddCreating = ({taskInformation , setTaskInformation , tonConstant }) => {
    console.log(tonConstant)
    return (
        <div className = {cl.SecondAddCreating}>
            <Cap className={cl.Cap}  step={2} > <p className = {cl.CapText}> Создайте объявление </p> </Cap>
            <Budget taskInformation={taskInformation} setTaskInformation={setTaskInformation}  className={cl.Budget} tonConstant = {tonConstant} />
            <DatePicker taskInformation={taskInformation} setTaskInformation={setTaskInformation} className={cl.DatePicker} />
        </div>
    );
};

export default SecondAddCreating;