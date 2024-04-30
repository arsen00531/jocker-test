import { useDispatch, useSelector } from "react-redux";
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
import { changeTaskInformation } from "../../store/information";

const AdCreatingThree = ({taskInformation }) => {

  const dispatch = useDispatch()

  const navigate = useNavigate()


  return (
    <div className= {cl.AdCreatingThree}
    style={{minWidth : document.documentElement.clientWidth.toString() + 'px'}}

    >
      <Cap className={cl.Cap} step={3} >
        <div className={cl.upTextContainer}>
            <p>Холдирование</p>
            <img src={info} alt="" />
        </div>
      </Cap>
      <PaymentMethod className={cl.PaymentMethod} />
      <Holding taskInformation={taskInformation}  className={cl.Holding} />
    </div>
  );
};

export default AdCreatingThree;
