import react, { createRef, useEffect, useRef } from "react";
// import { Route, Routes } from "react-router-dom";
import First from "./pages/First/First";
import "./css/Main.css";
import "./css/Fonts.css";
import "./css/Values.css";
import AdCreatingTwo from "./pages/ADCreatingTwo/AdCreatingTwo/AddCreatingTwo";
import "./css/style.css";
import PageTransition from "./components/PageTransition";
import { Outlet, useLocation, useOutlet } from "react-router-dom";
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
<script src="https://telegram.org/js/telegram-web-app.js"></script>;



window.Telegram.WebApp.expand();







function App() {




  const dispatch = useDispatch()
  useEffect ( () => {
    dispatch( fetchTon() )
  } )



  return (
    <div className="MainContainer">
      <First />
        <AdCreatingOne/>
        <AdCreatingTwo />
        <AdCreatingThree />
    </div>
  );
}

export default App;
