import React, { useEffect, useMemo, useState } from "react";
import FirstTop from "../../components/First/FirstMain/FirstTop";
import FirstMain from "../../components/First/FirstMain/FirstMain";
import axios from "axios";
import FirstDetails from '../../components/First/FirstDetails/FirstDetails'
import { useFilteredArr } from "../../hooks/useFilteredArr";
import { Transition , CSSTransition } from 'react-transition-group'
import BackButton from "../../constants/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { changeMenuActive } from "../../store/menuSlice";
const First = () => {

  const dispatch = useDispatch()
  
  const ordersInformation = useSelector(state => state.information.orderInformations)

  const isMenuActive = useSelector(state => state.menu.value)

  const [filterBy, setFilterBy] = useState("");
  
  const filteredArr = useFilteredArr(ordersInformation , filterBy)
  
  const [isDetailsActive, setDetailsActive] = useState(false);

  const setMenuActive = (set) => {
      dispatch(changeMenuActive(set))
  }


  useEffect(() => {
    let startTouchX = 0;
    let endTouchX = 0;
    let startTouchY = 0;
    let endTouchY = 0;
    document.addEventListener("touchstart", (e) => {
      startTouchX = e.changedTouches[0].pageX;
      startTouchY = e.changedTouches[0].pageY;
    });
    document.addEventListener("touchend", (e) => {
      endTouchX = e.changedTouches[0].pageX;
      endTouchY = e.changedTouches[0].pageY;
      if (
        endTouchX - startTouchX > 80 &&
        Math.abs(startTouchY - endTouchY) < 150
      )
        setMenuActive(true);
      if (isMenuActive) {
        if (
          endTouchX - startTouchX < 80 &&
          Math.abs(startTouchY - endTouchY) < 150
        ) {
          setMenuActive(false);
        }
      }
    });
  }, [isMenuActive]);




  

  


  return (
    <div style={isMenuActive ? {opacity : '0.3' } : {}} className="First" onClick={() => { if(isMenuActive){setMenuActive(false) }   }}>
       <FirstTop style={isMenuActive ? {opacity : '0.5' } : {}}  setMenuActive={setMenuActive} setFilterBy = {setFilterBy} />

      <FirstMain style={isMenuActive ? {background : 'rgba(0,0,0,0.5)' } : {}} setDetailsActive = {setDetailsActive} ordersInformation = {filteredArr}  />


      <CSSTransition in = {isDetailsActive}
              timeout = {200}
              mountOnEnter
              unmountOnExit
              classNames = 'left-right' >
          <FirstDetails className = 'FirstDetails' setDetailsActive = {setDetailsActive}  isDetailsActive = {isDetailsActive} orderInformation = {ordersInformation[0]} similarAds = {ordersInformation}  />

      </CSSTransition>

    </div>
  );


};

export default First;
