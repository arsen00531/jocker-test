import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useEffect } from "react";

import Cap from "../../components/UI/Cap/Cap";
import info from '../../images/icons/info.svg'
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import Holding from "./Holding/Holding";
import BackButton from "../../constants/BackButton";
import MainButton from "../../constants/MainButton";

import cl from "./AdCreatingThree.module.css";

const AdCreatingThree = () => {

  const taskInformation = useSelector(state => state.information.taskInformation)

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
    exit={{opacity : 1}}
    transition = {{duration : 0.2}}

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
