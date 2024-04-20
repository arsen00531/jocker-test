import React from 'react';
import MyButton from '../../UI/MyButton/MyButton';
import Pallete from '../../UI/Pallete/Pallete';
import ShareIcon from '../../UI/ShareIcon/ShareIcon'
import SmallDimond from '../../UI/SmallDimond/SmallDimond'
import FalseTie from '../../UI/FalseTie/FalseTie'
import tonConstant from '../../../constants/tonConstant';

const FirstBlock = ({taskName, executionPlace, time, tonValue , setDetailsActive , isButton , photos}) => {
    
    return (
             <div className="First__block">
                {photos ? (<div className='first__photos'> 
                    {photos.map( (e) => {
                        return <img src={URL.createObjectURL(e)} className='first__photo' alt="" />
                    } )}
                 </div>) : ''  }
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