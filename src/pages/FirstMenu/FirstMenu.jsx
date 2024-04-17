import React, { useState } from 'react';
import HumanIcon from '../../images/icon.png'
import {Link, Outlet} from 'react-router-dom'
import Close from './Close';
import SmallDimond from '../../components/UI/SmallDimond/SmallDimond';
import UpArr from '../../components/UI/UpArr/UpArr';
import Human from '../../components/UI/Human/Human'
import Pensel from '../../components/UI/Pencel/Pencel'


const FirstMenu = ({isMenuActive , setMenuActive , menuRef}) => {

    return (
        <div ref = {menuRef}  className= {  isMenuActive ? 'FirstMenu'  :  'FirstMenu hidden'  }>
            <Close isMenuActive = {isMenuActive} setMenuActive = {setMenuActive}  />
            <div className="FirstMenu__top">
                <img className='icon' src= {HumanIcon} alt="" />
                <div className="FirstMenu__top-right">
                    <p className='MenuName'>Nedzelskiy</p>
                    <div className='MenuProfile'>
                        <Link className='MenuProfileLink' to='/'>Профиль</Link>
                        <Pensel className='normail' />
                    </div>
                </div>
            </div>


            <div className="MenuPrice">
                <UpArr className= 'upArr' /> 
                <p className='MenuTextPrice'>1 TON</p>
                 <SmallDimond className= 'dymond' /> 
                <p className='MenuTextRublePrice'>~   250 RUB</p>
            </div>



            <div className='MenuList'>
                <Link className='menuLink'  onClick={(e) => {setMenuActive(false)}}  to="/AdCreatingOne" >Создать задание</Link>
                <Link className='menuLink' to = '/'>Найти задания</Link>
                <a className='menuLink'  href="">Мои задания</a>
                <a className='menuLink'  href="">Уведомления</a>
                <a className='menuLink'  href="">Новости Коннект.биржи</a>
                <a className='menuLink'  href="" style={{color : 'rgb(42, 207, 88)'}}> Стать исполнителем </a>
            </div>
            <div className="Menu__Helps">
                <a className = 'menuHelp'  href="">Поддержка </a>
                <Human className='human' />
            </div>

        </div>
    );
};

export default FirstMenu;