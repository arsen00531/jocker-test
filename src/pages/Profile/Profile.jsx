import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { changeMenuActive } from "../../store/menuSlice";
import { motion } from "framer-motion";

import Dimond from "../../images/icons/Dimond.svg";
import ArrowRight from "../../images/icons/rightArrow.svg";
import Pencel from "../../components/UI/Pencel/Pencel";
import icon from "../../images/icons/icon.svg";
import orangeWallet from "../../images/icons/OrangeWallet.svg";
import Subtract from "../../images/icons/Subtract.svg";
import greyArrowRight from "../../images/icons/greyArrowRight.svg";
import Burger from "../../components/UI/Burger/Burger";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../../constants/BackButton";
import userInfo from "../../constants/Name";
import AboutMe from "../../components/UI/AboutMe/AboutMe";

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4 },
};

const Profile = () => {
  const dispatch = useDispatch();

  const setMenuActive = (arg) => {
    dispatch(changeMenuActive(arg));
  };

  const [isReadOnly, setReadOnly] = useState(true);

  const [name, setName] = useState("Твое имя");

  const [aboutU, setAboutU] = useState("18,Москва");

  const hiddenP = useRef(null);

  const navigate = useNavigate();

  const inputRef = useRef(null);

  const [aboutMeModal, setAboutMeModal] = useState(false);

  // useEffect(  () => {
  //   if (inputRef.current){
  //     inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
  //   }
  // }, [isReadOnly]  )

  useEffect(() => {
    function goBack() {
      navigate(-1);
    }
    BackButton.onClick(goBack);
    return () => {
      BackButton.offClick(goBack);
    };
  });
  window.scrollTo( {
    top : 0,
    behavior : 'smooth'
  } )
  const animateAboutMe = useMemo(() => {
    window.scrollTo( {
      top : 0,
      behavior : 'smooth'
    } )
    if (aboutMeModal) {
      return { transform: "translateY(0px)" };
    } else {
      return { transform: "translateY(120%)" };
    }
  });



  return (
    <motion.div
      className="profile__container"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition="transition"
    >
      <Burger onClick={() => setMenuActive(true)} />

      <img src={icon} className="profile__icon" alt="" />

      <p
        ref={inputRef}
        value={"dsada"}
        onChange={(e) => setName(e.target.value)}
        className="urName"
        id="Name"
      >
        {" "}
        {userInfo.second
          ? userInfo.first + " " + userInfo.second
          : userInfo.first}{" "}
      </p>
      <div className="profile__options">
        <Link to="/Balance" className="option__balance">
          <div className="option__left">
            <img src={orangeWallet} className="orangeWallet" alt="" />
            <p>Баланс</p>
          </div>

          <div className="option__balance-block">
            <p className="tonPrice">1 TON</p>
            <img className="Dymond" src={Dimond} alt="" />
            <div className="option__money">
              <p>~</p>
              <p>250₽</p>
            </div>
          </div>
          <img className="arrowRight" src={ArrowRight} alt="" />
        </Link>
        <div className="option">
          <div className="option__left">
            <img src={orangeWallet} className="orangeWallet" alt="" />
            <p>Тарифы</p>
          </div>
          <img src={ArrowRight} className="arrowRight" alt="" />
        </div>
        <div className="option">
          <div className="option__left">
            <img src={orangeWallet} className="orangeWallet" alt="" />
            <p>Уведомления</p>
          </div>
          <img className="arrowRight" src={ArrowRight} alt="" />
        </div>
        <div className="option">
          <div className="option__left">
            <img src={orangeWallet} className="orangeWallet" alt="" />
            <p>О себе и примеры работ</p>
          </div>
          <img className="arrowRight" src={ArrowRight} alt="" />
        </div>
        <div className="option">
          <div className="option__left">
            <img src={orangeWallet} className="orangeWallet" alt="" />
            <p>Подписка за задания</p>
          </div>
          <img className="arrowRight" src={ArrowRight} alt="" />
        </div>
        <div className="option">
          <div className="option__left">
            <img src={orangeWallet} className="orangeWallet" alt="" />
            <p>Шаблоны откликов</p>
          </div>
          <img className="arrowRight" src={ArrowRight} alt="" />
        </div>
      </div>

      <div className="profile__about-me">
        <p>О себе</p>
        <div className="ur__town">
          <p ref={hiddenP} className="hiddenP">
            {aboutU}
          </p>

          <p className="about__u-text">{aboutU}</p>
          <label htmlFor="aboutYou">
            <div
              className="pencel__wrapper"
              onClick={() => {
                setAboutMeModal(true);
              }}
            >
              <Pencel className="pencel" />
            </div>
          </label>
        </div>
      </div>

      <div className="profile__works">
        <p>Выполняемые работы</p>
        <p>Дизайн</p>
        <p>Пока нет выполненых работ</p>
      </div>

      <div className="profile__veryfication">
        <p className="veryfication">Верификация</p>
        <div className="veryfication__block">
          <div className="Okey">
            <img className="Subtract" src={Subtract} alt="" />
          </div>

          <div className="veryfication__block-text">
            <p>Пройти KYC верификацию</p>
            <p>
              Подтвердите свою личность <br />и получайте на 20% больше откликов
            </p>
          </div>
          <img src={greyArrowRight} className="greyArrow" alt="" />
        </div>
      </div>

      <div className="aboutMe" style={animateAboutMe}>
        <AboutMe setAboutMeModal = {setAboutMeModal} />
      </div>
    </motion.div>
  );
};

export default Profile;
