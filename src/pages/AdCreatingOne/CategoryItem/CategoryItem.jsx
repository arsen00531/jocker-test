import React from 'react';
import cl from './CategoryItem.module.css'
import '../../../images/icons/Palitra.png'
const CategoryItem = ({className , value , name , icon }) => {
    return (
        <div value = {value} className = {className ? [cl.CategoryItem , className].join(' ') : cl.CategoryItem }>
            <img src = { require('../../../images/icons/' + icon)}  alt="" />
            <p>{name}</p>
        </div>
    );
};

export default CategoryItem;