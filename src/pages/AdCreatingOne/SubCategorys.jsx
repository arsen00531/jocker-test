import React from "react";
import rightArrow from '../../images/icons/rightArrow.svg'
const SubCategorys = ({sortSubCategory}) => {
  return sortSubCategory.map((e) => {
    return (
      <div key={Date.now()} className="SubBlock">
        <p>{e}</p>
        <img className="arrowRight" src={rightArrow} alt="" />
      </div>
    );
  });
};

export default SubCategorys;
