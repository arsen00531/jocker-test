import React, { useEffect, useState } from 'react';
import cl from './SecondAddCreating.module.css'
import Cap from '../../../components/UI/Cap/Cap';
import Budget from '../Budget/Budget'
import DatePicker from '../DatePicker/DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { changeTaskInformation } from '../../../store/information';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const SecondAddCreating = () => {


    const taskInformation = useSelector(state => state.information.taskInformation)

    const dispatch = useDispatch()

    const setTaskInformation = (obj) =>{
      dispatch(changeTaskInformation(obj))
    }

    const BackButton = window.Telegram.WebApp.BackButton;

    const MainButton = window.Telegram.WebApp.MainButton;

    const [navIt, setNamIt] = useState({
       opacity : 0.5,
       y:10
    })

    const [forwardTransition , setForwardTransition] = useState ( 
        [ {x : '100%'} , { x : '0' } ]
    )

    const navigate = useNavigate()

    function goForward(){
      setNamIt({
        opacity : 0.5,
        y:10
      })
      setForwardTransition ( [ {x : '-100%'} , { x : '0'} ])
      navigate('/AdCreatingThree')
      }
    
    function goBack(){
      setNamIt(   {
        x : '100%',
        zIndex : 1 
     })
     setForwardTransition ( [ {x : '100%'} , { x : '0' } ])
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
      initial :   forwardTransition[0]  ,
      animate :    forwardTransition[1] ,
      exit : {} ,
      transition : { duration : 0.3 }
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
          <button onClick={() => goForward()} >Ппродолжить</button>
            <Cap className={cl.Cap}  step={2} > <p className = {cl.CapText}> Создайте объявление </p> </Cap>
            <Budget taskInformation={taskInformation} setTaskInformation={setTaskInformation}  className={cl.Budget} tonConstant = {tonConstant} />
            <DatePicker taskInformation={taskInformation} setTaskInformation={setTaskInformation} className={cl.DatePicker} />
        </motion.div>
    );
};

export default SecondAddCreating;