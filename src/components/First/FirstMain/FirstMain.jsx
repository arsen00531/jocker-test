import React, { useState } from "react";
import FirstBlock from "./FirstBlock";
const FirstMain = ({ ordersInformation, setDetailsActive , ...props}) => {
  return (
    <div props className="FirstMain">

      {ordersInformation.legth === 0 ? (
        <h1 className="EmptyText"> Нет таких предложений </h1>
      ) : (
        ordersInformation.map((e) => {
          return <FirstBlock setDetailsActive={setDetailsActive}   {...e} isButton = {true} />;
        })
      )}

    </div>
  );
};

export default FirstMain;
