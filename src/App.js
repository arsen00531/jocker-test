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
import tonConstant from "./constants/tonConstant";
import { fetchTasksInformation } from "./store/information";
import { TaskAbortError } from "@reduxjs/toolkit";
import axios from "axios";



const AnimatedSwitch = () =>{
      const location = useLocation()
      const isMenuActive = useSelector(state => state.menu.value)
      return (
        <div className="container">
          <div style={ isMenuActive ? {   opacity : '0.6' }  : { maxWidth : '0px' } } className="black" ></div>
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
  alert(window.Telegram.WebApp.initDataUnsafe.user)
  const orderInformations = useSelector(state => state.information.orderInformations)
  const status = useSelector(state => state.information.status)
  
  // useEffect ( () => {
  //   dispatch ( fetchTasksInformation() )
  // },[] )
  console.log(status)
  console.log(orderInformations)





  // async function addOne(){
  //     await axios.post('http://localhost:5000/category/category' , сategoryName: 'lox')
  // }
  // addOne()

//   async  function getIt (){
//     let task = await axios.get('http://localhost:5000/advertisement/findAll')
//     console.log(task)
//     return task
// }
//   getIt()
//   console.log(tonConstant)

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
