import React from "react";
import star from "../../images/icons/Star.svg";
import icon from "../../images/icons/icon.svg";
import photo from "../../images/nonUsed/photo_2024-03-02 03.14.svg";
import submit from "../../images/icons/Subtract.svg";
import TextAboutMe from "../../components/UI/AboutMeText/TextAboutMe";

const AboutReaction = () => {
  const aboutMe = "26 лет, Евпатория /n Стаж работы: 8 лет /n/n/nпривет я лох";
  const aboutReaction = `Доброго времени суток!
Работа выполняется до полного согласования, пока результат Вас полностью не устроит.
Фиксированная стоимость, независимо от количества предложенных вариантов.
Гарантирую достойный результат!
  
Опыт работы 8 лет в сфере типографического дизайна, без трудностей поможет мне выполнить Ваш заказ любой сложности с: растровыми изображениями и векторной графикой, разработкой макетов полиграфической продукции (визитки, листовки, буклеты, евробуклеты и т.д.), рекламной продукции (ручки, пакеты, футболки и т.д.), наружной рекламы, разработкой логотипов и фирменого стиля`
  const realAboutMe = aboutMe.split("/n").map((e) => {
    return <p className="text">{e}</p>;
  });
  console.log(realAboutMe);
  return (
    <div className="aboutReaction">
      <div className="about__top">
        <div className="top__one">
          <p>4</p>
          <p>задания создано</p>
        </div>
        <img src={icon} alt="" className="topMiddle" />
        <div className="top__three">
          <p>153</p>
          <p>задания выполнено</p>
        </div>
      </div>
      <div className="aboutInfo">
        <div className="name">
          <p>Александр.П</p>
          <img src={submit} alt="" />
        </div>
        <div className="rates">
          <div className="rates__block">
            <img src={star} alt="" />
            <p>4</p>
          </div>
          <p>◦</p>
          <p>158 отзывов</p>
        </div>
        <div className="documentAccess">
          <img src={submit} alt="" />
          <p>Документы подтвержены</p>
        </div>
      </div>
      <div className="aboutMain">
        <div className="aboutMeTitle">
          <p>О себе</p>
        </div>
        <TextAboutMe aboutU={`хай как дела я ахахаха пустые строки тут оказываются тоже возможно , но это же просто предпочтение, верно??

смешно прикол
или неттт???`} />
        <div className="TextContainer">
          <div className="background">
            
          </div>
          <textarea className = "about-reaction-textarea"   value={aboutReaction}  />
          <div className="also">  
            <p>Читать полностью</p>
          </div>
        </div>
      </div>
      <div className="examplesWork">
        <p>Примеры работ</p>
        <div className="imagesContainer">
          <img src={photo} alt="" />
          <img src={photo} alt="" />
        </div>
        <div className="also">  
            <p>Смотреть все работы</p>
          </div>
      </div>
    </div>
  );
};
export default AboutReaction;
