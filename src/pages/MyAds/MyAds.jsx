import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import Burger from "../../components/UI/Burger/Burger";
import FirstBlock from "../../components/First/FirstMain/FirstBlock";
import FullPicker from "../../components/UI/FullPicker/FullPicker";
import upDown from "../../images/icons/UpDown.svg";
import plus from "../../images/icons/plus-circle.svg";
// import myImage from '../../images/desccription.png'
import AdCreatingOne from "../AdCreatingOne/AdCreatingOne/AdCreatingOne";
import tonConstant from "../../constants/tonConstant";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../../constants/BackButton";
import { Link, useNavigate } from "react-router-dom";
import { changeMyAds } from "../../store/information";
import { changeMenuActive } from "../../store/menuSlice";
import useListner from "../../hooks/useListner";
import { transform } from "framer-motion";
import "./MyAds.css";
import tie from '../../images/icons/Tie.svg'
import share from '../../images/icons/Share.svg'
import star from '../../images/icons/Star.svg'

import photo from '../../images/nonUsed/photo_2024-03-02 03.14.svg'
import icon from '../../images/icons/icon.svg'




const MyAds = () => {
  const values = ["Я испольнитель", "Я заказчик"];
  const keys = ["freelancer", "customer"];
  const [nowValue, setNowKey] = useState("freelancer");
  const [isDetailsActive, setDetailsActive] = useState(false);

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

  const isMenuActive = useSelector((state) => state.menu.value);

  const [myAdsArray, setMyAdsArray] = useState(
    useSelector((state) => state.information.myAdsArray)
  );

  const [index, setIndex] = useState(0);

  function setMyArray(par) {
    console.log(par);
    setMyAdsArray(
      [...myAdsArray].map((e, i) => {
        if (i === index) {
          return par;
        }
        return e;
      })
    );
    console.log(myAdsArray);
  }

  const navigate = useNavigate();

  const dispatch = useDispatch();

  function setMenuActive(arg) {
    dispatch(changeMenuActive(arg));
  }

  function goBack() {
    navigate(-1);
  }

  useEffect(() => {
    BackButton.show();
  }, []);

  function goBack() {
    if (isDetailsActive) {
      setDetailsActive(false);
      dispatch(changeMyAds(myAdsArray));
    } else {
      navigate(-1);
    }
  }

  useEffect(() => {
    BackButton.onClick(goBack);
    return () => {
      BackButton.offClick(goBack);
    };
  });

  useListner({
    isMenuActive,
    setMenuActive,
    setDetailsActive,
    isDetailsActive,
  });

  const [isThis, setThis] = useState({ ind: -1, top: undefined , height : 0 });


  const [traper , setTraper] = useState('unset')
  const [tran , setTran] = useState('0.4s')
  const [tDisplay , setDisplay] = useState('block')

  function animation(i) {
    if (isThis.ind === i) {
      setTimeout(  () => {
        setThis({...isThis , top : 53})
        setTran('0s')
      } , 550 )


      return {
        transform: "translateY(" + (-1 * isThis.top + 75).toString() + "px)",
        transition : tran
      };
    }
    if (isThis.ind !== -1) {
      setTimeout(  () => {
        setTraper('0px')
        setDisplay('none')
    } , 550)
      return { opacity: "0" , maxHeight : traper , display : tDisplay };
    }
    return {};
  }

  function animateHandler(){
    if (isThis.ind !== -1){
      if (isThis.top === 53){
        return { opacity: 0 , display : 'none' }
      }
      else{
        return {opacity: 0 , maxHeight : 'unset'}
      }
    }
    else{
      return {}
    }
  }

  function reactAnimate(){
    if (isThis.ind === -1){
      return {}
    }
    else{
      return {top : (isThis.height + 99).toString() + 'px',
      transform : 'translateX(16px)'
    }
    }
  }

  return (
    <>
      <Burger
        onClick={(e) => {
          setMenuActive(true);
        }}
      />
    <div className="MyAdsContainer">
      <p  className="MyAds">Мои задания</p>

      <div
        className="MyAdsBlock"
      >
        <div style = {animateHandler()} className="counter__block">
          <div className="number-of-transactions">
            <p>1</p>
            <p>Количество сделок</p>
          </div>
          <div className="number-of-transactions">
            <p>0%</p>
            <p>Завершенные сделки</p>
          </div>
        </div>
        <div style = {animateHandler()} className="YourAds">
          <p>Ваши объявления</p>
          <div className="sortBy">
            <p className="sortByPar">Активный</p>
            <img className="upDown" src={upDown} alt="" />
          </div>
        </div>
        <div className="pick"
        style = {animateHandler()}>
            <FullPicker
              className={"MyAds__FullPicker"}
              values={values}
              nowKey={nowValue}
              setNowKey={setNowKey}
              keys={keys}
            />
        </div>
      </div>
      <div className="PickerContent">
        <div className="picler__block">
          <Link
            to="/AdCreating"
            style = {animateHandler()}
            className="AdCreactingFunction"
          >
            <img src={plus} alt="" />
            <p>Создать объявление</p>
          </Link>
          <div className="AdsContainer">
            {myAdsArray.map((e, i) => {
              return (
                <div
                  className="block"
                  onClick={(e) => {
                    setThis({
                      ind: i,
                      top: e.target.closest(".block").getBoundingClientRect()
                        .top,
                      height : e.target.closest('.block').offsetHeight
                    });
                    // console.log(e.target.closest('.block').getBoundingClientRect())
                  }}
                  style={animation(i)}
                >
                  <FirstBlock
                    key={i}
                    isButton={true}
                    setDetailsActive={() => {
                      setDetailsActive(true);
                      setIndex(i);
                    }}
                    {...e}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <CSSTransition classNames="details" in={isDetailsActive} timeout={0}>
        <AdCreatingOne
          className="AdCreatingMy"
          taskInformation={myAdsArray[index]}
          setTaskInformation={setMyArray}
          MyInformation={true}
        />
      </CSSTransition>

   


       
    </div>
    <div className="reactions__block"
      style={reactAnimate()}
    >
                <div className="reactions__top">
                    <p className="sortBy">сортировка</p>
                    <div className="reaction__choice">
                        <p>по рейтингу</p>
                        <img src={upDown} alt="" />
                    </div>
                </div>

                
                <div className="reaction">
                    <div className="reactions__images">
                        <img src={photo} alt="" />
                        <img src={photo} alt="" />
                    </div>
                    <div className="reaction__middle">
                        <img className="icon" src={icon} alt="" />
                        <div className="reaction__middle-midle">
                            <p className="reaction__userName">Александр П.</p>
                            <div className="reaction__rates">
                                <img   src={star} alt="" />
                                <div className="rates__text">
                                  <p><span>4</span></p>
                                  <p>◦</p>
                                  <p>158 отзывов</p>
                                  <p>◦</p>
                                  <p>Стаж 8 лет</p>

                                </div>

                            </div>
                        </div>
                        <div className="circle">
                            <img className="shareImage" src={share} alt="" />
                        </div>
                    </div>
                    <div className="reactions__bottom">
                            <button className="bottom__one">подробнее</button>
                            <button className="bottom__two">выбрать</button>
                            <img className="tie" src={tie} alt="" />
                    </div>
                </div>




        </div>


</>
  );
};

export default MyAds;
