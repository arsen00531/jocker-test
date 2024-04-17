import React, { useState } from "react";
import Burger from "../../UI/Burger/Burger";
import OneInput from "../../UI/OneInput/OneInput";

import icon from "../../../images/icon.png";

const FirstTop = ({ setFilterBy, setMenuActive , ...props }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div props className="FirstTop">
      <Burger
        onClick={() => {
          setMenuActive(true);
        }}
      />
      <OneInput
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setFilterBy(e.target.value);
        }}
        placeholder="Поиск по заданиям..."
      />
      <img src={icon} alt="" />
    </div>
  );
};

export default FirstTop;
