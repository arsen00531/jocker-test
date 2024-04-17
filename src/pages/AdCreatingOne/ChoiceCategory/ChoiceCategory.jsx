import React, { useState } from "react";
import cl from "./ChoiceCategory.module.css";
import OneInput from "../../../components/UI/OneInput/OneInput";
import CategoryItem from "../CategoryItem/CategoryItem";
import Palitra from "../../../images/icons/Palitra.png";
const ChoiceCategory = ({
  setTaskInformation,
  taskInformation,
  setCatagoryChoiceOpen,

}) => {
  const [inputValue, setInputValue] = useState("");
  const [categoriesArr, setCategoriesArr] = useState([
    { name: "Дизайн", icon: "Palitra.png", value: "design1", key: 1 }
  ]);
  return (
    <div className={cl.ChoiceCategory}>
      <OneInput
        placeholder="Поиск по заданиям"
        value={inputValue}
        setInputValue={setInputValue}
        className={cl.OneInput}
      />
      <div className={cl.categoryContainer}>
        {categoriesArr.map((e) => {
          return (
            <div
              onClick={() => {
                setTaskInformation({ ...taskInformation, category: {name : e.name , value : e.value} , subCategory : 'Выбрать'});
                setCatagoryChoiceOpen(false);
              }}
              className={cl.wrap}
            >
              <CategoryItem {...e} />
            </div>
          );
        })}
      </div>
      <p className={cl.anotherText}>Прочие категории скоро появятся...</p>
    </div>
  );
};

export default ChoiceCategory;
