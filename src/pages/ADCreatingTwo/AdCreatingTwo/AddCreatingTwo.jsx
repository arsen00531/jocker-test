import React from 'react';
import cl from './SecondAddCreating.module.css'
import Cap from '../../../components/UI/Cap/Cap';
import Budget from '../Budget/Budget'
import DatePicker from '../DatePicker/DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { changeTaskInformation } from '../../../store/information';
const SecondAddCreating = ({ tonConstant }) => {
    const taskInformation = useSelector(state => state.information.taskInformation)

    const dispatch = useDispatch()
    
    const setTaskInformation = (obj) =>{
      dispatch(changeTaskInformation(obj))
    }
  
    return (
        <div className = {cl.SecondAddCreating}>
            <Cap className={cl.Cap}  step={2} > <p className = {cl.CapText}> Создайте объявление </p> </Cap>
            <Budget taskInformation={taskInformation} setTaskInformation={setTaskInformation}  className={cl.Budget} tonConstant = {tonConstant} />
            <DatePicker taskInformation={taskInformation} setTaskInformation={setTaskInformation} className={cl.DatePicker} />
        </div>
    );
};

export default SecondAddCreating;