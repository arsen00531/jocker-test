import React from "react";
import cl from "./AdCreatingThree.module.css";
import Cap from "../../components/UI/Cap/Cap";
import info from '../../images/icons/info.svg'
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import Holding from "./Holding/Holding";
const AdCreatingThree = ({taskInformation}) => {
  return (
    <div className= {cl.AdCreatingThree}>
      <Cap className={cl.Cap} step={3}>
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
