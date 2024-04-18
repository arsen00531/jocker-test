import React, { useEffect, useState } from "react";
import cl from "./AdCreatingOne.module.css";
import Cap from "../../../components/UI/Cap/Cap";
import Categories from "../Categories/Categories";
import TaskName from "../TaskName/TaskName";
import DescriptionAndPhoto from "../DescriptionAndPhoto/DescriptionAndPhoto";
import MakePrivate from "../MakePrivate/MakePrivate";
import ChoiceCategory from "../ChoiceCategory/ChoiceCategory";
import { CSSTransition } from "react-transition-group";
import ChoiceSubCategory from "../ChoiceSubCategory";
import cicle from "../../../images/icons/Circle.svg";
import BackButton from "../../../constants/BackButton";
import MainButton from "../../../constants/MainButton";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import StartOn from "../StartOn/StartOn";
import { useDispatch, useSelector } from "react-redux";
import { changeTaskInformation } from "../../../store/information";
import { motion } from "framer-motion";
const AdCreatingOne = ({ MyInformation, className }) => {

  const taskInformation = useSelector(
    (state) => state.information.taskInformation
  );
  const dispatch = useDispatch();

  const setTaskInformation = (obj) => {
    dispatch(changeTaskInformation(obj));
  };

  const [isCategoryChoiceOpen, setCatagoryChoiceOpen] = useState(false);

  const [isSubcategoryChoiceOpen, setSubcategoryChoiceOpen] = useState(false);

  const BackButton = window.Telegram.WebApp.BackButton;

  const MainButton = window.Telegram.WebApp.MainButton;

  const [navIt , setNavIt] = useState( [ 
   (-1)*document.documentElement.clientWidth.toString() + 'px' , 0 
  ] )

  const navigate = useNavigate()

  function goForward(){
    setNavIt( [ 
      (-1)*document.documentElement.clientWidth.toString() + 'px' , 0 
    ])
    navigate('/AdCreatingTwo')
  }

  function goBack(){
    navigate(-1)
  }

  useEffect( () => {
    BackButton.show()
    MainButton.show()
    BackButton.onClick(goBack)
    MainButton.onClick(goForward)
    return () => {
      MainButton.offClick(goForward)
      BackButton.offClick(goBack)
    }
  })

  return (
    <motion.div


    initial={{ opacity: 1, scale : 1 , x : navIt[0] , zIndex : 100, position : 'absolute',minWidth : document.documentElement.clientWidth.toString() + 'px' }}
    animate={{ opacity: 1, scale :  1,  x: navIt[1] , zIndex : 1 , minWidth : document.documentElement.clientWidth.toString() + 'px'  }}
    exit={{x : document.documentElement.clientWidth * (-1), zIndex : 1 }}


      className={
        className ? [cl.AdCreating, className].join(" ") : cl.AdCreating
      }
    >
      {/* <Link to="/AdCreatingTwo"> Ссылка!! </Link> */}



      <button onClick={() => goForward()} >Ппродолжить</button> 
      <Cap step={1} className={cl.Cap}>
        {" "}
        <p className={cl.CapText}> Создайте объявление </p>{" "}
      </Cap>
      {MyInformation ? (
        ""
      ) : (
        <Categories
          className={cl.Categories}
          taskInformation={taskInformation}
          setCatagoryChoiceOpen={setCatagoryChoiceOpen}
          setSubcategoryChoiceOpen={setSubcategoryChoiceOpen}
        />
      )}
      <TaskName
        taskInformation={taskInformation}
        setTaskInformation={setTaskInformation}
      />
      <DescriptionAndPhoto
        MyInformation={MyInformation}
        taskInformation={taskInformation}
        setTaskInformation={setTaskInformation}
        className={cl.DescriptionAndPhoto}
      />
      {MyInformation ? (
        <StartOn
          className={cl.startOn}
          text="Воскресенье, 03 марта 2024, 00:30"
        />
      ) : (
        ""
      )}
      <MakePrivate
        isPrivate={taskInformation.isPrivate}
        setTaskInformation={setTaskInformation}
        className={[cl.MakePrivate, cl.MakePrivateOne].join(" ")}
        taskInformation={taskInformation}
        text="Сделать приватным"
        enabledText="Задание увидят только исполнители, а после завершения — только вы и выбранный исполнитель."
        noeEnabledText="Задания увидят все, совсем все"
      />
      <CSSTransition
        classNames={"modal"}
        in={isCategoryChoiceOpen}
        timeout={0}
        mountOnEnter
        unmountOnExit
      >
        <ChoiceCategory
          taskInformation={taskInformation}
          setTaskInformation={setTaskInformation}
          setCatagoryChoiceOpen={setCatagoryChoiceOpen}
        />
      </CSSTransition>

      <CSSTransition
        classNames={"modal-two"}
        in={isSubcategoryChoiceOpen}
        timeout={0}
        unmountOnExit
        mountOnEnter
      >
        <ChoiceSubCategory
          setTaskInformation={setTaskInformation}
          setSubcategoryChoiceOpen={setSubcategoryChoiceOpen}
          taskInformation={taskInformation}
        ></ChoiceSubCategory>
      </CSSTransition>
    </motion.div>
  );
};

export default AdCreatingOne;
