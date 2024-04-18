import React, { useEffect, useState } from "react";
import cl from "./AdCreatingThree.module.css";
import Cap from "../../components/UI/Cap/Cap";
import info from '../../images/icons/info.svg'
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import Holding from "./Holding/Holding";
import { useDispatch, useSelector } from "react-redux";
import { changeTaskInformation } from "../../store/information";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
const AdCreatingThree = () => {

  const taskInformation = useSelector(state => state.information.taskInformation)

  const BackButton = window.Telegram.WebApp.BackButton;

  const MainButton = window.Telegram.WebApp.MainButton;

  const navigate = useNavigate()

  async function send(){
    try{
      await axios({
        url : 'http://localhost:5000/api/docs#/default/Advertisement',
        headers : {
          'Content-Type' : 'application/json'
        },
        params : {
          
        },
        method : "POST",
        data : {'das' : 'dsad'}
      })
    }
    catch {
      alert ('Ничего не передалось!!')
    }
  }

  const [navIt, setNamIt] = useState({
    x : document.documentElement.clientWidth * (-1),
    zIndex : 1 
 })
 

  function goBack(){
    setNamIt(   {
      x : document.documentElement.clientWidth * (1),
      zIndex : 1 
   })
    navigate(-1)
  }

  useEffect( () => {
      BackButton.show()
      MainButton.show()
      BackButton.onClick(goBack)
      MainButton.onClick(send)
      MainButton.setText('ЗАКОЛДИРОВАТЬ')
      return () => {
        MainButton.offClick(send)
        BackButton.offClick(goBack)
      }
    })

  return (
    <motion.div className= {cl.AdCreatingThree}
    initial={{ opacity: 1, scale : 1 , x : document.documentElement.clientWidth.toString() + 'px' , zIndex : 100, position : 'absolute',minWidth : document.documentElement.clientWidth.toString() + 'px' }}
    animate={{ opacity: 1, scale :  1,  x: 0 , zIndex : 1 , minWidth : document.documentElement.clientWidth.toString() + 'px'  }}
    exit={navIt}
      

    >
      <Cap className={cl.Cap} step={3} >
        <div className={cl.upTextContainer}>
            <p>Холдирование</p>
            <img src={info} alt="" />
        </div>
      </Cap>
      <PaymentMethod className={cl.PaymentMethod} />
      <Holding taskInformation={taskInformation}  className={cl.Holding} />
    </motion.div>
  );
};

export default AdCreatingThree;
