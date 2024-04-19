import { useDispatch, useSelector } from 'react-redux';
import { changeTaskInformation } from '../../../store/information';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

import Cap from '../../../components/UI/Cap/Cap';
import Budget from '../Budget/Budget'
import DatePicker from '../DatePicker/DatePicker';
import BackButton from '../../../constants/BackButton';
import MainButton from '../../../constants/MainButton';

import cl from './SecondAddCreating.module.css'



let forwardTransition = [{x : '100%'} , { x : '0' } ]
let backTransition = { x : '-100%'  }

const SecondAddCreating = ({taskInformation , setTaskInformation, tonConstant}) => {

    const navigate = useNavigate()

    function goForward(){
      forwardTransition =  [ {x : '-100%'} , { x : '0'} ]
      backTransition = { x : '-100%'  }
      navigate('/AdCreatingThree')
      } 
    
    function goBack(){
      backTransition = { x : '100%'  }
      forwardTransition = [ {x : '100%'} , { x : '0' } ]
        navigate(-1)
      }

    useEffect( () => {
        MainButton.setText('ДАЛЕЕ')
        BackButton.show()
        MainButton.show()
        BackButton.onClick(goBack)
        MainButton.onClick(goForward)
        return () => {
          MainButton.offClick(goForward)
          BackButton.offClick(goBack)
        }
      })
  
      const variants = {
        initial :   forwardTransition[0]  ,
        animate :    forwardTransition[1] ,
        exit : backTransition ,
        transition : { duration : 0.2 }
      }
    return (
      <div className = {cl.SecondAddCreating} 
      style={{minWidth : document.documentElement.clientWidth.toString() + 'px' }}
      >
            <Cap className={cl.Cap}  step={2} > <p className = {cl.CapText}> Создайте объявление </p> </Cap>
            <Budget taskInformation={taskInformation} setTaskInformation={setTaskInformation}  className={cl.Budget} tonConstant = {tonConstant} />
            <DatePicker taskInformation={taskInformation} setTaskInformation={setTaskInformation} className={cl.DatePicker} />
      </div>
    );
};

export default SecondAddCreating;