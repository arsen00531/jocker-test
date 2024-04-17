import React, { useEffect, useState } from 'react';
import AdCreatingOne from '../AdCreatingOne/AdCreatingOne/AdCreatingOne';
import AdCreatingTwo from '../ADCreatingTwo/AdCreatingTwo/AddCreatingTwo'
import cl from './AdCreating.module.css'
import AdCreatingThree from '../AdCreatingThree/AdCreatingThree';
import { useLayoutEffect } from 'react';
import { CSSTransition , TransitionGroup } from 'react-transition-group';
import BackButton from '../../constants/BackButton';
import MainButton from '../../constants/MainButton';
import {
    Link,
    Routes,
    Route,
    useNavigate,
    useLocation
  } from 'react-router-dom';




  
  const AdCreating = () => {
 
      
      const [taskInformation, setTaskInformation] = useState({
        category: { name: "Дизайн", value: "design1" },
        subCategory: "Выбрать",
        taskName: "",
        taskDescription: "",
        photos: "",
        budget: 0,
        tonValue: 0,
        taskDate: { start: "", end: "" },
        isPrivate : false
      });
    
    const [tonConstant, setTonConstant] = useState(0);
    const [tonPrice, setTonPrice] = useState(0);
    const [dollarValue, setDollarValue] = useState(0);
    useEffect(() => {
        async function getCurrencies() {
          const response = await fetch(
            "https://www.cbr-xml-daily.ru/daily_json.js"
          );
          const data = await response.json();
          const result = await data;
          return result.Valute.USD.Value;
        }
    
        async function getTonPrice() {
          const response = await fetch(
            "https://api.coingecko.com/api/v3/coins/the-open-network"
          );
          const data = await response.json();
          return data.market_data.current_price.usd;
        }
        async function joker() {
          setTonConstant(33);
          return 2;
        }
        setTonConstant(3322332);
        async function catchIt() {
          let one = await getCurrencies();
          console.log(one);
          let two = await getTonPrice();
          return one * two;
        }
        catchIt().then((value) => setTonConstant(value));
      }, []);

      const [whichNow , setWhichNow] = useState('one')
      const [last , setLast] = useState('null')

      const localTwo = useLocation()


  
    return (
        <div>
            <TransitionGroup component={null}>
            <CSSTransition state = {localTwo.state} key={localTwo.key} classNames="page" timeout={30000}>
            <Routes>
                <Route path='/AdCreatingOne' element = {
                <AdCreatingOne taskInformation={taskInformation} setTaskInformation={setTaskInformation}/>} />
            </Routes>
            </CSSTransition>
        
        </TransitionGroup>

        <TransitionGroup component={null}>
            <CSSTransition state = {localTwo.state} key={localTwo.key} classNames="ad-createTwo" timeout={30000} >
            <Routes>
                <Route path='/AdCreatingTwo' element = {<AdCreatingTwo taskInformation={taskInformation} setTaskInformation={setTaskInformation}/>} />
            </Routes>
            </CSSTransition>
        
        </TransitionGroup>
        </div>
    )
};

export default AdCreating;