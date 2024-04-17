import React, { memo } from 'react';
import cl from './MakePrivate.module.css'
import Switcher from '../../../components/UI/Switcher/Switcher';
const MakePrivate = ({className , isPrivate , setTaskInformation , taskInformation , text , enabledText , notEnabledText}) => {
    return (
        <div className="Private__container">
        <div className = {className ? [cl.MakePrivate , className].join(' ') : cl.MakePrivate}>
                <p>{text}</p>
                <Switcher isEnable = {isPrivate} setEnable = {(e) => {setTaskInformation({...taskInformation , isPrivate : e})}}  className={cl.Switcher} />
        </div>
        { 
                isPrivate ?  <p className={cl.whoCanSee}> {enabledText} </p> : <p className = {cl.whoCanSee}>{notEnabledText}</p>
                }
        </div>
    );
};

export default memo(MakePrivate);