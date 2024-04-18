import React, { useEffect, useState } from 'react';
import cl from './SecondAddCreating.module.css'
import Cap from '../../../components/UI/Cap/Cap';
import Budget from '../Budget/Budget'
import DatePicker from '../DatePicker/DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { changeTaskInformation } from '../../../store/information';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


let forwardX = (1)*document.documentElement.clientWidth
const SecondAddCreating = () => {


    const taskInformation = useSelector(state => state.information.taskInformation)

    const dispatch = useDispatch()

    const setTaskInformation = (obj) =>{
      dispatch(changeTaskInformation(obj))
    }

    const BackButton = window.Telegram.WebApp.BackButton;

    const MainButton = window.Telegram.WebApp.MainButton;

    const [navIt, setNamIt] = useState({
       x : document.documentElement.clientWidth * (-1),
       zIndex : 1 
    })

    

    const navigate = useNavigate()

    function goForward(){
      setNamIt({
        x : '-100%',
        zIndex : 1 
      })
      forwardX = '-100%'
      navigate('/AdCreatingThree')
      }
    
    function goBack(){
      setNamIt(   {
        x : '100%',
        zIndex : 1 
     })
      forwardX = '100%'
        navigate(-1)
      }
    
    useEffect( () => {
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
      initial : {   x : forwardX  },
      animate : {   x: 0  },
      exit : navIt ,
      transition : {type : "spring" , duration : 0.5}
    }
    return (
      <motion.div className = {cl.SecondAddCreating} 
      style={{minWidth : document.documentElement.clientWidth.toString() + 'px' }}
      
      variants={variants}
      initial = "initial"
      animate = "animate"
      exit = "exit"
      
      
      >
          <button onClick={() => goForward()} >Ппродолжить</button>
            <Cap className={cl.Cap}  step={2} > <p className = {cl.CapText}> Создайте объявление </p> </Cap>
            <Budget taskInformation={taskInformation} setTaskInformation={setTaskInformation}  className={cl.Budget} tonConstant = {tonConstant} />
            <DatePicker taskInformation={taskInformation} setTaskInformation={setTaskInformation} className={cl.DatePicker} />
        </motion.div>
    );
};

export default SecondAddCreating;