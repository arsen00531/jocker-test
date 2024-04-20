import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useLocation } from "react-router-dom";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import {AnimatePresence} from 'framer-motion'

import "./css/Main.css";
import "./css/Fonts.css";
import "./css/Values.css";
import "./css/style.css";

import First from "./pages/First/First";
import Profile from './pages/Profile/Profile'
import AdCreatingTwo from "./pages/ADCreatingTwo/AdCreatingTwo/AddCreatingTwo";
import AdCreatingOne from "./pages/AdCreatingOne/AdCreatingOne/AdCreatingOne";
import AdCreatingThree from "./pages/AdCreatingThree/AdCreatingThree";
import FirstMenu from "./pages/FirstMenu/FirstMenu";
import Balance from './pages/Balance'
import MyAds from './pages/MyAds/MyAds'



import { fetchTon } from "./store/ton";
import AdCreating from "./pages/AdCreating";


const AnimatedSwitch = () =>{
      const location = useLocation()
      const isMenuActive = useSelector(state => state.menu.value)
      return (
        <div className="container">
          <div style={ isMenuActive ? {opacity : '0.6'}  : {} } className="black" ></div>
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element = {<First/>} />
                <Route path="/AdCreating" element = {<AdCreating/>} />
                <Route path="/Profile" element = {<Profile />}  /> 
                <Route path="/Balance" element = { <Balance /> }  />
                <Route path="/MyAds" element = { <MyAds/> } />
            </Routes>
          </AnimatePresence>
        </div>
      )
}


function App() {

  window.Telegram.WebApp.expand();

  const dispatch = useDispatch()

  useEffect ( () => {
    dispatch( fetchTon() )
  } )


  return (
    <div className="MainContainer" >
      <BrowserRouter>


        <FirstMenu/>

        <AnimatedSwitch />

      </BrowserRouter>
    </div>
  );
}


export default App;
