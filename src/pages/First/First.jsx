import React, { useEffect, useMemo, useState } from "react";
import FirstTop from "../../components/First/FirstMain/FirstTop";
import FirstMain from "../../components/First/FirstMain/FirstMain";
import axios from "axios";
import FirstDetails from '../../components/First/FirstDetails/FirstDetails'
import { useFilteredArr } from "../../hooks/useFilteredArr";
import { Transition , CSSTransition } from 'react-transition-group'
import BackButton from "../../constants/BackButton";
const First = ( {setMenuActive , isMenuActive} ) => {

  const [ordersInformation, setOrderInformation] = useState([
    {
      taskName: "UX/UI-дизайнер для разработки прототипа интернет-магазина",
      executionPlace: "Можно выполнить удаленно",
      photos : '',
      time : {start: 'Начать 28 февраля, 00:00' , end : 'Воскресенье, 10 марта 2024 23:59'} ,
      tonValue: 261,
      rate : '5',
      customerName : 'YourName',
      isActive : true,
      taskDescription : "Необходимо разработать логотип для магазина! Пример стиля, и пример лого, от которого отталкиваться - предоставлю.",
      creationTime : 'Создано когда-то , ..timing',
      viewsNumber : '51'
    },
    {
      taskName: "UX/UI-дизайнер для разработки прототипа интернет-магазина",
      executionPlace: "Можно выполнить удаленно",
      photos : '',
      time : {start: 'Начать 28 февраля, 00:00' , end : 'Воскресенье, 10 марта 2024 23:59'} ,
      tonValue: 261,
      taskDescription : "Необходимо разработать логотип для магазина! Пример стиля, и пример лого, от которого отталкиваться - предоставлю.",
      rate : '5',
      customerName : 'YourName',
      isActive : true,
      creationTime : 'Создано когда-то , ..timing',
      viewsNumber : '51'
    },
    {
      taskName: "UX/UI-дизайнер для разработки прототипа интернет-магазина",
      executionPlace: "Можно выполнить удаленно",
      photos : '',
      time : {start: 'Начать 28 февраля, 00:00' , end : 'Воскресенье, 10 марта 2024 23:59'} ,
      tonValue: 261,
      taskDescription : "Необходимо разработать логотип для магазина! Пример стиля, и пример лого, от которого отталкиваться - предоставлю.",
      rate : '5',
      customerName : 'YourName',
      isActive : true,
      creationTime : 'Создано когда-то , ..timing',
      viewsNumber : '51'
    },
  ]);


  


  
  const [filterBy, setFilterBy] = useState("");
  
  const filteredArr = useFilteredArr(ordersInformation , filterBy)
  
  const [isDetailsActive, setDetailsActive] = useState(false);

  
  function closeDetails(){
      setDetailsActive(false)    
  }

  useEffect( () => {
    BackButton.show()
    if (isDetailsActive){
        BackButton.onClick(closeDetails)
    }
    return () => {
      BackButton.offClick(closeDetails)
    }
  } , [isDetailsActive, BackButton] )


  return (
    <div style={isMenuActive ? {opacity : '0.3' } : {}} className="First" onClick={() => { if(isMenuActive){setMenuActive(false) }   }}>
       <FirstTop style={isMenuActive ? {opacity : '0.5' } : {}}  setMenuActive={setMenuActive} setFilterBy = {setFilterBy} />

      <FirstMain style={isMenuActive ? {background : 'rgba(0,0,0,0.5)' } : {}} setDetailsActive = {setDetailsActive} ordersInformation = {filteredArr}  />

      {/* <FirstMenu isMenuActive={isMenuActive} setMenuActive={setMenuActive} /> */}

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
