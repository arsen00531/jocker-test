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
       x : document.documentElement.clientWidth * (-1),
       zIndex : 1 
    })
    
      const [navItMy , setNavItMy] = useState( [ 
   (-1)*document.documentElement.clientWidth.toString() + 'px' , 0 
  ] )

    const navigate = useNavigate()

    function goForward(){
        setNamIt({
          x : document.documentElement.clientWidth * (-1),
          zIndex : 1 
        })
        navigate('/AdCreatingThree')
      }
    
    function goBack(){
        navigate(-1)
        setNamIt(   {
          x : document.documentElement.clientWidth * (1),
          zIndex : 1 
       })
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

    return (
      <motion.div className = {cl.SecondAddCreating} 
      initial={{ opacity: 1, scale : 0.7 , x : document.documentElement.clientWidth.toString() + 'px' , zIndex : 100, position : 'absolute',minWidth : document.documentElement.clientWidth.toString() + 'px' }}
      animate={{ opacity: 1, scale :  1,  x: 0 , zIndex : 1 , minWidth : document.documentElement.clientWidth.toString() + 'px'  }}
      exit={navIt}
      
      
      
    
      >
          <button onClick={() => goForward()} >Ппродолжить</button>
            <Cap className={cl.Cap}  step={2} > <p className = {cl.CapText}> Создайте объявление </p> </Cap>
            <Budget taskInformation={taskInformation} setTaskInformation={setTaskInformation}  className={cl.Budget} tonConstant = {tonConstant} />
            <DatePicker taskInformation={taskInformation} setTaskInformation={setTaskInformation} className={cl.DatePicker} />
        </motion.div>
    );
};

export default SecondAddCreating;