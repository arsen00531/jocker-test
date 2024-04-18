import React, { useEffect } from "react";
import cl from "./AdCreatingThree.module.css";
import Cap from "../../components/UI/Cap/Cap";
import info from '../../images/icons/info.svg'
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import Holding from "./Holding/Holding";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

const AdCreatingThree = () => {

  const taskInformation = useSelector(state => state.information.taskInformation)

  const BackButton = window.Telegram.WebApp.BackButton;

  const MainButton = window.Telegram.WebApp.MainButton;

  const navigate = useNavigate()

  function send(){
    alert('отправлено!')
  }



  function goBack(){
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
    style={{position : 'absolute',minWidth : document.documentElement.clientWidth.toString() + 'px'}}
    initial={{  x : '100%'  }}
    animate={{   x: 0  }}
    exit={{x : '100%'}}
    transition = {{duration : 0.3}}

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
