import React from "react";
import { useState } from "react";
import { RootState } from "app/store";
import { moneySlice } from "app/slicers";
import { useDispatch, useSelector } from "react-redux";
import styles from "styles/components/Gamble.module.scss";
import GambleWinStateComponent from "./GambleWinState/GambleWinStateComponent";

type GambleComponent = {
  title: string;
  text: string;
};

function GambleComponent() {
  const money = useSelector((state: RootState) => state.money);
  const dispatch = useDispatch();
  const [winState, setWinState] = useState("");

  const gambleMoney = () => {
    if (money > 0) {
      if (Math.floor(Math.random() * 2)) {
        setWinState("won");
        dispatch(moneySlice.actions.add(money));
      } else {
        setWinState("lost");
        dispatch(moneySlice.actions.set(0));
      }
    } else {
      setWinState("noMoney");
    }
  };

  return (
    <div className={styles.GambleWrapper} onClick={() => gambleMoney()}>
      <div className={styles.GambleWrapper__Title}>gamble</div>
      <div className={styles.AllInButton}>ALL IN</div>
      <GambleWinStateComponent win={winState}></GambleWinStateComponent>
    </div>
  );
}

export default GambleComponent;
