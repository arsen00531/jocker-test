import react, { useEffect, useRef } from "react";
// import { Route, Routes } from "react-router-dom";
import First from "./pages/First/First";
import "./css/Main.css";
import "./css/Fonts.css";
import "./css/Values.css";
import AdCreatingTwo from "./pages/ADCreatingTwo/AdCreatingTwo/AddCreatingTwo";
import "./css/style.css";
import PageTransition from "./components/PageTransition";
import { useLocation } from "react-router-dom";
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
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MyAds from "./pages/MyAds/MyAds";
import BackButton from './constants/BackButton'
import AdCreating from "./pages/AdCreating/AdCreating";

<script src="https://telegram.org/js/telegram-web-app.js"></script>;
window.Telegram.WebApp.expand();


let tonConstant = 9;
const AnimatedSwitch = ({setMenuActive , isMenuActive , taskInformation , setTaskInformation  ,  tonConstant}) => {
  const location = useLocation()
  return (

    <TransitionGroup component={null}>
      <CSSTransition  key={location.pathname} classNames="page" timeout={30000}>
        <Routes>
            <Route path="/" element={<First setMenuActive={setMenuActive} isMenuActive={isMenuActive}  />}  />
       
        </Routes>
      </CSSTransition>

    </TransitionGroup>
  );
};


function App() {



  window.Telegram.WebApp.setBackgroundColor("#000000");
  window.Telegram.WebApp.setHeaderColor("#ffffff");



  const [isMenuActive, setMenuActive] = useState(false);

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

  // const tonConstant = useTon();

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

  useEffect(() => {
    let startTouchX = 0;
    let endTouchX = 0;
    let startTouchY = 0;
    let endTouchY = 0;
    document.addEventListener("touchstart", (e) => {
      startTouchX = e.changedTouches[0].pageX;
      startTouchY = e.changedTouches[0].pageY;
    });
    document.addEventListener("touchend", (e) => {
      endTouchX = e.changedTouches[0].pageX;
      endTouchY = e.changedTouches[0].pageY;
      if (
        endTouchX - startTouchX > 80 &&
        Math.abs(startTouchY - endTouchY) < 150
      )
        setMenuActive(true);
      if (isMenuActive) {
        if (
          endTouchX - startTouchX < 80 &&
          Math.abs(startTouchY - endTouchY) < 150
        ) {
          setMenuActive(false);
        }
      }
    });
  }, [isMenuActive]);
  return (
    <div className="AllComponents">

          <BrowserRouter>
            <FirstMenu isMenuActive={isMenuActive} setMenuActive={setMenuActive} />
                    <div className={isMenuActive ? "MainContainer opacity" : "MainContainer"}>
                    <AnimatedSwitch  setMenuActive={setMenuActive} isMenuActive={isMenuActive} taskInformation={taskInformation} setTaskInformation={setTaskInformation} tonConstant={tonConstant} />
                    <AdCreating />
                      </div>
            </BrowserRouter>

    </div>
  );
}

export default App;
