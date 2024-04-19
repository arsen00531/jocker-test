import React, { useEffect, useState } from 'react';
import {CSSTransition} from 'react-transition-group';

import Burger from '../../components/UI/Burger/Burger';
import FirstBlock from '../../components/First/FirstMain/FirstBlock';
import FullPicker from '../../components/UI/FullPicker/FullPicker';
import upDown from '../../images/icons/UpDown.svg'
import plus from '../../images/icons/plus-circle.svg'
// import myImage from '../../images/desccription.png'
import AdCreatingOne from '../AdCreatingOne/AdCreatingOne/AdCreatingOne';
import tonConstant from '../../constants/tonConstant';

const MyAds =  ( ) => {




    const values = ['Я испольнитель' , 'Я заказчик']
    const keys = ['freelancer' ,  'customer']
    const [nowValue , setNowKey] = useState('freelancer')
    const [isDetailsActive , setDetailsActive] = useState(false)

    const [taskInformation, setTaskInformation] = useState({
        category: { name: "Дизайн", value: "design1" },
        subCategory: "Выбрать",
        taskName: "",
        taskDescription: "",
        photos: "", //!!!!
        budget: 0,
        tonValue: 0,
        taskDate: { start: "", end: "" },
      });
    
    const [myAdsArray, setMyAdsArray] = useState([
        {
          taskName: "UX/UI-дизайнер для разработки прототипа интернет-магазина",
          executionPlace: "Можно выполнить удаленно", // ????
          photos : '' , // !!!
          time : {start: 'Начать 28 февраля, 00:00' , end : ''} ,
          tonValue: 261,
          taskDescription : "Необходимо разработать логотип для магазина! Пример стиля, и пример лого, от которого отталкиваться - предоставлю.",
          viewsNumber : '51',
          isPrivate : false
        },
        {
            taskName: "UX/UI-дизайнер для разработки прототипа интернет-магазина",
            executionPlace: "Можно выполнить удаленно", // ????
            photos : '' , // !!!
            time : {start: 'Начать 28 февраля, 00:00' , end : ''} ,
            tonValue: 261,
            taskDescription : "Необходимо разработать логотип для магазина! Пример стиля, и пример лого, от которого отталкиваться - предоставлю.",
            viewsNumber : '51',
            isPrivate : false
          },
          {
            taskName: "UX/UI-дизайнер для разработки прототипа интернет-магазина",
            executionPlace: "Можно выполнить удаленно", // ????
            photos : '' , // !!!
            time : {start: 'Начать 28 февраля, 00:00' , end : ''} ,
            tonValue: 261,
            taskDescription : "Необходимо разработать логотип для магазина! Пример стиля, и пример лого, от которого отталкиваться - предоставлю.",
            viewsNumber : '51',
            isPrivate : false
          },
      ]);


    const [changeIndex , setChangeIndex] = useState(0)

    function setMyArray(par){
        console.log(par)
        setMyAdsArray( [...myAdsArray].map( (e, i) => {
            if (i === changeIndex){
                return par
            }
            return e
        } )  )
        console.log(myAdsArray)
    }
    return (
        <div className='MyAdsContainer'>
                <Burger />
                <p className='MyAds'>
                    Мои задания
                </p>
                <div className="counter__block">
                    <div className="number-of-transactions">
                        <p>1</p>
                        <p>Количество сделок</p>
                    </div>
                    <div className="number-of-transactions">
                        <p>0%</p>
                        <p>Завершенные сделки</p>
                    </div>
                </div>
                <div className="YourAds">
                    <p>Ваши объявления</p>
                    <div className="sortBy">
                        <p className='sortByPar'>Активный</p>
                        <img className='upDown' src={upDown} alt="" />
                    </div>
                </div>
                <FullPicker className={'MyAds__FullPicker'} values = {values} nowKey = {nowValue} setNowKey = {setNowKey} keys = {keys}/>
                <div className="PickerContent">
                    <div className="picler__block">
                        
                        <div className="AdCreactingFunction">
                            <img src={plus} alt="" />
                            <p>Создать объявление</p>
                        </div>
                        <div className="AdsContainer">
                            {myAdsArray.map( (e, i) => {
                                return <FirstBlock isButton={true} setDetailsActive = {setDetailsActive}  {...e} />
                            })}
                        </div>
                    </div>

                </div>
            <CSSTransition
                classNames = 'details'
                in = {isDetailsActive}
                timeout={1000}
                unmountOnExit
                mountOnEnter
             >

                <AdCreatingOne className = 'AdCreatingMy' taskInformation={myAdsArray[0]} setTaskInformation={setMyArray} MyInformation={true} />      
            </CSSTransition>
        </div>
    );
};

export default MyAds;