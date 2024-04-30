import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Router, Routes, Route } from 'react-router-dom';
import {useLocation} from 'react-router-dom'
import '../css/Values.css'
import '../css/Main.css'
const PageTransition = ({children}) => {
    let location = useLocation()
    console.log(children)
    console.log(location)
    return (
        <TransitionGroup>
            <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={30000}
            >
                {children}
            </CSSTransition>
      </TransitionGroup>
    );
};

export default PageTransition;