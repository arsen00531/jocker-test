import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeMenuActive } from '../../store/menuSlice';
import {Link} from 'react-router-dom'

import HumanIcon from '../../images//icons/icon.svg'
import Close from './Close';
import SmallDimond from '../../components/UI/SmallDimond/SmallDimond';
import UpArr from '../../components/UI/UpArr/UpArr';
import Human from '../../components/UI/Human/Human'
import Pensel from '../../components/UI/Pencel/Pencel'


const FirstMenu = () => {

    const dispatch = useDispatch()

    const isMenuActive = useSelector(state => state.menu.value)

    const setMenuActive = (set) => {
        dispatch(changeMenuActive(set))
    }

    return (
        <div className= {  isMenuActive ? 'FirstMenu'  :  'FirstMenu hidden'  }>

            <Close isMenuActive = {isMenuActive} setMenuActive = {setMenuActive}  />

            <div className="FirstMenu__top">
                <img className='icon' src= {HumanIcon} alt="" />
                <div className="FirstMenu__top-right">
                    <p className='MenuName'>Nedzelskiy</p>
                    <Link onClick={setMenuActive(false)} to={'/Profile'} className='MenuProfile'>
                        <p className='MenuProfileLink'>Профиль</p>
                        <Pensel className='normail' />
                    </Link>
                </div>
            </div>

            <div className="MenuPrice">
                <UpArr className= 'upArr' /> 
                <p className='MenuTextPrice'>1 TON</p>
                 <SmallDimond className= 'dymond' /> 
                <p className='MenuTextRublePrice'>~   250 RUB</p>
            </div>

            <div className='MenuList'>
                <Link className='menuLink'  onClick={() => {setMenuActive(false)}}  to="/AdCreatingOne" >Создать задание</Link>
                <Link className='menuLink' to = '/'>Найти задания</Link>
                <p className='menuLink'  href="">Мои задания</p>
                <p className='menuLink'  href="">Уведомления</p>
                <p className='menuLink'  href="">Новости Коннект.биржи</p>
                <p className='menuLink'  href="" style={{color : 'rgb(42, 207, 88)'}}> Стать исполнителем </p>
            </div>

            <div className="Menu__Helps">
                <p className = 'menuHelp'  href="">Поддержка </p>
                <Human className='human' />
            </div>

        </div>
    );
};

export default FirstMenu;