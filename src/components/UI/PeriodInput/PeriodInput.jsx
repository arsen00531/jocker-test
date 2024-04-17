import React from "react";
import cl from './PeriodInput.module.css'
import dateIcon from '../../../images/icons/date.svg'
import rightArrow from '../../../images/icons/ArrowRight.svg'
const PeriodInput = ({ref , ...props}) => {
  return (
    <div ref = {ref}  className={cl.PeriodInput} {...props} >
      <div className={cl.DateTimePicker}>
        <div className={cl.left}>
          <img className={cl.leftImage} src={dateIcon} alt="" />
          <p className={cl.text}>Дата и время</p>
        </div>
        <img src={rightArrow} alt="" className={cl.arrowRight} />
      </div>
      <div className={cl.DateTimePicker}>
        <div className={cl.left}>
          <img className={cl.leftImage} src={dateIcon} alt="" />
          <p className={cl.text}>Дата и время</p>
        </div>
        <img src={rightArrow} alt="" className={cl.arrowRight} />
      </div>
    </div>
  );
};

export default PeriodInput;
