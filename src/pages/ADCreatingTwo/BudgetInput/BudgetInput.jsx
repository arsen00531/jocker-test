import React, { memo, useEffect, useRef } from "react";
import cl from "./BudgetInput.module.css";
import Info from "../../../images/icons/info.svg";

const BudgetInput = ({ className, setBudget, budget , tonValue , setTonValue, tonConstant }) => {
  const KisInteger = function (obj) {
    return "0123456789".includes(obj[obj.length - 1]);
  };
  function budgetWidth(bg) {
    // let str = bg.toString();
    // str = str.replaceAll(" ", "");
    // return "calc( " + str.length.toString() + "ch" + " + 10px )";
    if (ref1.current){
      ref1.current.innerText = budget
      return "calc(" + ref1.current.offsetWidth + 'px)'
    }
    else {
      return '100px'
    }
  }


  function format(strPar) {
    let str = strPar;
    if (str.length > 1) {
      if (str[0] === "0") {
        str = str.replace("0", "");
      }
    }
    str = str.replaceAll(" ", "").substring(0, 6);
  
    const s = str.length;
    const chars = str.split("");
    const strWithSpaces = chars.reduceRight((acc, char, i) => {
      const spaceOrNothing = (s - i) % 3 === 0 ? " " : "";
      return spaceOrNothing + char + acc;
    }, "");

    return strWithSpaces[0] === " " ? strWithSpaces.slice(1) : strWithSpaces;
  }

  const ref1 = useRef(null)
  const ref2 = useRef(null)
  console.log(ref1)
  return (
    <div
      className={
        className ? [className, cl.BudgetInput].join(" ") : cl.BudgetInput
      }
    >
      <p className={[cl.input , cl.hidden].join(' ')} ref = {ref1} >

      </p>


      <input
        value={budget}
        onChange={(e) => {
          setBudget(
            KisInteger(e.target.value)
              ? format(e.target.value)
              : e.target.value.substring(0, e.target.value.length - 1)
          );
        }}
        inputmode="numeric"
        type="text"
        onFocus={(e) => {
          setBudget(e.target.value === "0" ? "" : e.target.value);
        }}
        onBlur={(e) => {
           setBudget(e.target.value.length > 0 ? e.target.value : "0");
        }}
        className={cl.input}
        style={{ width: budgetWidth(budget) }}
      />

      



      
      <p className={cl.budgetText}>RUB</p>
      <div className={cl.bottomTextContainer}>
        <p className={cl.text}> К оплате {tonValue} TON </p>
        <img src={Info} alt="" />
      </div>




    </div>
  );
};

export default memo(BudgetInput);
