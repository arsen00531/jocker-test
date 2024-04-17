import React from "react";
import cl from "./Budget.module.css";
import GreyText from "../../../components/UI/GreyText/GreyText";
import BudgetInput from "../BudgetInput/BudgetInput";
const Budget = ({
  className,
  taskInformation,
  setTaskInformation,
  tonConstant,
}) => {

    function format(strPar) {
        let str = strPar.toString();
        if (str.length > 1) {
          if (str[0] === "0") {
            str = str.replace("0", "");
          }
        }
        str = str.replaceAll(" ", "").substring(0, 6);
        console.log(str);
        const s = str.length;
        const chars = str.split("");
        const strWithSpaces = chars.reduceRight((acc, char, i) => {
          const spaceOrNothing = (s - i) % 3 === 0 ? " " : "";
          return spaceOrNothing + char + acc;
        }, "");
    
        return strWithSpaces[0] === " " ? strWithSpaces.slice(1) : strWithSpaces;
      }
    
  return (
    <div className={className ? [className, cl.Budget].join(" ") : cl.Budget}>
      <GreyText className={cl.GreyText}> Ваш бюджет </GreyText>
      <BudgetInput
        tonConstant={tonConstant}
        setTonValue={(e) =>
          setTaskInformation({ ...taskInformation, tonValue: e })
        }
        tonValue={taskInformation.tonValue}
        budget={taskInformation.budget}
        setBudget={(e) => {
          setTaskInformation({ ...taskInformation, budget: e , tonValue :   (Number(e.replaceAll(' ' , '')) / tonConstant ).toFixed(2) + '...'  });
        }}
      />
    </div>
  );
};

export default Budget;
