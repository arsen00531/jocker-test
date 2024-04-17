import React from 'react';
import DesignIcon from '../../../images/Design-Icon.png'
import Share from '../../../images/LineShareIcon.png'
import dymond from '../../../images/dymond.png'
import galstuk from '../../../images/galstuk.png'
import MyButton from '../../UI/MyButton/MyButton';
import Pallete from '../../UI/Pallete/Pallete';
import ShareIcon from '../../UI/ShareIcon/ShareIcon'
import SmallDimond from '../../UI/SmallDimond/SmallDimond'
import FalseTie from '../../UI/FalseTie/FalseTie'
import tonConstant from '../../../constants/tonConstant';
// {
//     taskName: "UX/UI-дизайнер для разработки прототипа интернет-магазина",
//     executionPlace: "Можно выполнить удаленно", // ????
//     photos : '' , // !!!
//     time : {start: 'Начать 28 февраля, 00:00' , end : ''} ,
//     tonValue: 261,
//     taskDescription : "Необходимо разработать логотип для магазина! Пример стиля, и пример лого, от которого отталкиваться - предоставлю.",
//     viewsNumber : '51',
//   },
const FirstBlock = ({taskName, executionPlace, time, tonValue , setDetailsActive , isButton , photos}) => {
    
    console.log(photos)
    return (
             <div className="First__block">
                <div className="FirstMain__top">
                    <Pallete  />
                    <p>{taskName}</p>
                    <ShareIcon className='share__icon' />
                </div>
                <div className="FirstMain__middle">
                    <p>{executionPlace}</p>
                    <p>{time.start}</p>
                </div>
                <div className="FirstMain__bottom">
                    <div className="FirstMain__bottom-left">
                        <div className="FirstMain__price-up">
                            <h3>{tonValue}</h3>
                            <SmallDimond />
                        </div>
                        <p>~ { (tonValue * tonConstant.value).toLocaleString('ru-RU') }</p>
                    </div>
                    <div className="FirstMain__bottom-right">
                        <FalseTie className = {'tie'} />
                        <MyButton style = { isButton ? {} : {display : 'none'} }  onClick = { (e) => setDetailsActive(true)  }>Подробнее</MyButton>
                    </div>
                </div>
            </div>

    );
};

export default FirstBlock;