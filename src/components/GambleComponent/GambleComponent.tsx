import React from "react";
import { useState } from "react";
import { RootState } from "../../app/store";
import { moneySlice } from "../../app/slicers";
import { useDispatch, useSelector } from "react-redux";
import styles from "styles/components/Gamble.module.scss";

type GambleComponent = {
  title: string;
  text: string;
};

function GambleComponent() {
  const money = useSelector((state: RootState) => state.money);
  let message = "Gamble";
  const dispatch = useDispatch();

  const gambleMoney = () => {
    if (money > 0) {
      if (Math.floor(Math.random() * 2)) {
        message="You won";
        console.log(message);
        dispatch(moneySlice.actions.add(money));
      } else {
        message="You lost";
        console.log(message);
        dispatch(moneySlice.actions.set(0));
      }
    } else {
      message = "You don't have enough money";
    }
  };

  return (
    <div className={styles.GambleFriend} onClick={() => gambleMoney()}>
      <h1>{money}{message}</h1>
    </div>
  );
}

export default GambleComponent;
