import React from 'react';
import classes from "./Burger.module.css"
const Burger = (props) => {
    return (
        <div className={classes.burgerMainWrapper}>

            <div {...props}  className= {classes.Burger}>
                <div  className="Burger__wrapper">

                </div>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Burger;