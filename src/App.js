import {  useEffect } from "react";
import { useDispatch } from "react-redux";
import {  useLocation } from "react-router-dom";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import {AnimatePresence} from 'framer-motion'

import "./css/Main.css";
import "./css/Fonts.css";
import "./css/Values.css";
import "./css/style.css";

import First from "./pages/First/First";
import AdCreatingTwo from "./pages/ADCreatingTwo/AdCreatingTwo/AddCreatingTwo";
import AdCreatingOne from "./pages/AdCreatingOne/AdCreatingOne/AdCreatingOne";
import AdCreatingThree from "./pages/AdCreatingThree/AdCreatingThree";
import FirstMenu from "./pages/FirstMenu/FirstMenu";


import { fetchTon } from "./store/ton";


const AnimatedSwitch = () =>{
      const location = useLocation()
      return (
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
              <Route path="/" element = {<First/>} />
              <Route path="/AdCreatingOne" element = {<AdCreatingOne/>} />
              <Route path="/AdCreatingTwo" element = {<AdCreatingTwo />} />
              <Route path="/AdCreatingThree" element = {<AdCreatingThree />} />
              <Route> </Route>
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
