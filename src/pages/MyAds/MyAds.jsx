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
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '../../constants/BackButton';
import { Link, useNavigate } from 'react-router-dom';
import { changeMyAds } from '../../store/information';
import { changeMenuActive } from '../../store/menuSlice';
import useListner from '../../hooks/useListner';

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

    const isMenuActive = useSelector (state => state.menu.value)

    const [myAdsArray, setMyAdsArray] = useState( useSelector( state => state.information.myAdsArray ))

    const [index , setIndex] = useState(0)

    function setMyArray(par){
        console.log(par)
        setMyAdsArray( [...myAdsArray].map( (e, i) => {
            if (i === index){
                return par
            }
            return e
        } )  )
        console.log(myAdsArray)
    }

    const navigate = useNavigate()

    const dispatch = useDispatch()

    function setMenuActive(arg) {
        dispatch( changeMenuActive(arg) )
    }

    function goBack(){
        navigate (-1)
    }

    useEffect( () => {
        BackButton.show()
    }, [] )

    function goBack(){
        if (isDetailsActive) {
            setDetailsActive(false)
            dispatch(changeMyAds(myAdsArray) )
        }
        else{
            navigate(-1)
        }
    }
    
    useEffect ( () => {
        BackButton.onClick(goBack)
        return () => {
            BackButton.offClick(goBack)
        }
    } )

    useListner( { isMenuActive , setMenuActive , setDetailsActive , isDetailsActive} )

    return (
        <div className='MyAdsContainer'>
                <Burger onClick = {(e) => { setMenuActive(true) }} />
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
                        
                        <Link to = "/AdCreating" className="AdCreactingFunction">
                            <img src={plus} alt="" />
                            <p>Создать объявление</p>
                        </Link>
                        <div className="AdsContainer">
                            {myAdsArray.map( (e, i) => {
                                return <FirstBlock key = {i} isButton={true} setDetailsActive = {() => {
                                    setDetailsActive(true)
                                    setIndex(i)
                                }}  {...e} />
                            })}
                        </div>
                    </div>

                </div>
            <CSSTransition
                classNames = 'details'
                in = {isDetailsActive}
                timeout={0}
             >

                <AdCreatingOne className = 'AdCreatingMy' taskInformation={myAdsArray[index]} setTaskInformation={setMyArray} MyInformation={true} />      
            </CSSTransition>
        </div>
    );
};

export default MyAds;