import React from 'react';
import cl from './Categories.module.css'
import upDown from '../../../images/icons/UpDown.svg'
const Categories = ({className , taskInformation, setCatagoryChoiceOpen , setSubcategoryChoiceOpen }) => {
    return (
        <div className = { className ? [cl.Categories , className].join(' ') : cl.Categories   }>
            <div className={cl.Categories__block}>
                <p>Категория</p>
                <p  onClick={(e) => {setCatagoryChoiceOpen(true)}} className = {[cl.Category__linkk , cl.quest].join(' ')} href="">{taskInformation.category['name']}</p>
            </div>
            <hr className={cl.line} />
            <div className={cl.Categories__block}>
                <p>Подкатегория</p>
                <p  onClick={() => {setSubcategoryChoiceOpen(true)}} className={cl.Category__link} href="">{taskInformation.subCategory.slice(0,18)}
                {/* {taskInformation.subCategory=== 'Выбрать' ? '' : '.'} */}
                </p>
            </div>
        </div>
    );
};

export default Categories;