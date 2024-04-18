import react, { createRef, useEffect, useRef } from "react";
// import { Route, Routes } from "react-router-dom";
import First from "./pages/First/First";
import "./css/Main.css";
import "./css/Fonts.css";
import "./css/Values.css";
import AdCreatingTwo from "./pages/ADCreatingTwo/AdCreatingTwo/AddCreatingTwo";
import "./css/style.css";
import PageTransition from "./components/PageTransition";
import { Outlet, Router, useLocation, useOutlet } from "react-router-dom";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import FirstDetails from "./components/First/FirstDetails/FirstDetails";
import { useState } from "react";
import AdCreatingOne from "./pages/AdCreatingOne/AdCreatingOne/AdCreatingOne";
import AdCreatingThree from "./pages/AdCreatingThree/AdCreatingThree";
import FirstMenu from "./pages/FirstMenu/FirstMenu";
import { useTon } from "./hooks/useTon";
import Profile from "./pages/Profile/Profile";
import Balance from "./pages/Balance";
import { CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group";
import MyAds from "./pages/MyAds/MyAds";
import BackButton from './constants/BackButton'
import AdCreating from "./pages/AdCreating/AdCreating";
import tonConstant from "./constants/tonConstant";
import { useDispatch, useSelector } from "react-redux";
import { changeTaskInformation } from "./store/information";
import { fetchTon } from "./store/ton";
import { changeMenuActive } from "./store/menuSlice";
import {AnimatePresence} from 'framer-motion'
import axios from "axios";



// window.Telegram.WebApp.expand();


const AnimatedSwitch = () =>{
      const location = useLocation()


      async function gettingIngormation(){
        try{
          const info = await axios.post('http://localhost:5000/advertisement' , {
            "userId": 1,
            "title": "Backend-developer",
            "description": "Подробнее",
            "deadline": 60,
            "price": 10000,
            "startTime": "2024-04-18T09:14:26.910Z"
          } )
          console.log(info)
        }
        catch(error) {
          console.error(error);
        }
      }
      gettingIngormation()

      return (
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
              <Route path="/" element = {<First/>} />
              <Route path="/AdCreatingOne" element = {<AdCreatingOne/>} />
              <Route path="/AdCreatingTwo" element = {<AdCreatingTwo />} />
              <Route path="/AdCreatingThree" element = {<AdCreatingThree />} />
          </Routes>
        </AnimatePresence>
      )
}





function App() {

  window.Telegram.WebApp.expand();

  const dispatch = useDispatch()

  useEffect ( () => {
    dispatch( fetchTon() )
  } )


  return (
    <div className="MainContainer">
      <BrowserRouter>

        <FirstMenu/>

        <AnimatedSwitch />

      </BrowserRouter>
    </div>
  );
}

export default App;
