import React from "react";
import styles from "styles/components/Gamble.module.scss";

type GambleWinStateProps = {
  win: string;
};

function GambleWinState(props: GambleWinStateProps) {
  const winState = props.win;
  if (winState == "won") {
    return <div className={styles.WinButton}> you won </div>;
  } else if (winState == "lost") {
    return <div className={styles.LoseButton}> you lost </div>;
  } else if (winState == "noMoney") {
    return <div className={styles.NotEnoughMoneyButton}> You do not have any money </div>;
  } else {
    return <div className={styles.GambleAdvertisment}> click here to gamble</div>;
  }
}

export default GambleWinState;
