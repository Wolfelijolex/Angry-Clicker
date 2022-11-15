import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import styles from "styles/components/Gamble.module.scss";

type GambleWinStateComponentProps = {
  win: string;
};

function GambleWinStateComponent(props: GambleWinStateComponentProps) {
  const money = useSelector((state: RootState) => state.money);
  const winState = props.win;

  console.log(winState);
  if (winState == "won") {
    return <div className={styles.WinButton}> you won </div>;
  } else if (winState == "lost") {
    return <div className={styles.LoseButton}> you lost </div>;
  } else if (winState == "NotEnoughMoney") {
    return <div className={styles.NotEnoughMoneyButton}> You do not have any money </div>;
  } else {
    return <div className={styles.GambleAdvertisment}> click here to gamble</div>;
  }
}

export default GambleWinStateComponent;
