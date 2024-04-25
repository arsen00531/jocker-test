import React, { memo, useState } from "react";
import cl from "./DatePicker.module.css";
import GreyText from "../../../components/UI/GreyText/GreyText";
import CatchDate from "../CatchDate/CatchDate";
import FullPicker from "../../../components/UI/FullPicker/FullPicker";


const DatePicker = ({ className, taskInformation, setTaskInformation }) => {
  const [whichOne, setWhichOne] = useState("startOnly");
  const keys = ["startOnly", "startAndEnd"];

  return (
    <div
      className={
        className ? [cl.DatePicker, className].join(" ") : cl.DatePickerr
      }
    >
      <GreyText className={cl.GreyText}>
        Когда нужно приступить к работе?
      </GreyText>
      {/* <Picker
        className={cl.picker}
        whichOne={whichOne}
        setWhichOne={setWhichOne}
        taskInformation={taskInformation}
        setTaskInformation={setTaskInformation}
      /> */}

      {/* <CatchDate className={cl.CatchDate} whichOne={whichOne} />  */}
      <FullPicker
        values={["Привет!!", "Омлет!"]}
        keys={keys}
        nowKey={whichOne}
        setNowKey={setWhichOne}
      />
      <CatchDate className={cl.CatchDate} whichOne={whichOne} />
    </div>
  );
};

export default memo(DatePicker);
