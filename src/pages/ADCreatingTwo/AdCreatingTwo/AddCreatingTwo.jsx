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

const SecondAddCreating = () => {


    const taskInformation = useSelector(state => state.information.taskInformation)

    const dispatch = useDispatch()

    const setTaskInformation = (obj) =>{
      dispatch(changeTaskInformation(obj))
    }

    const navigate = useNavigate()

    function goForward(){
      forwardTransition =  [ {x : '-100%'} , { x : '0'} ]
      navigate('/AdCreatingThree')
      } 
    
    function goBack(){
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
    
    const tonConstant = useSelector(state => state.ton.value)
    const variants = {
      initial :   forwardTransition[0]  ,
      animate :    forwardTransition[1] ,
      exit : {x : '-100%'} ,
      transition : { duration : 0.5 }
    }
    return (
      <motion.div className = {cl.SecondAddCreating} 
      style={{minWidth : document.documentElement.clientWidth.toString() + 'px' }}
      
      variants={variants}
      initial = "initial"
      animate = "animate"
      exit = "exit"
      transition="transition"
      
      >
            <Cap className={cl.Cap}  step={2} > <p className = {cl.CapText}> Создайте объявление </p> </Cap>
            <Budget taskInformation={taskInformation} setTaskInformation={setTaskInformation}  className={cl.Budget} tonConstant = {tonConstant} />
            <DatePicker taskInformation={taskInformation} setTaskInformation={setTaskInformation} className={cl.DatePicker} />
        </motion.div>
    );
};

export default SecondAddCreating;