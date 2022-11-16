import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import logo from "../../assets/angryScaled.png";
// import styles from "../../styles/pages/App.module.scss";
import betterStyle from "../../styles/components/AngryButton.module.scss";
import { moneySlice } from "../../app/slicers";

type AngryButtonProps = {
  title: string;
};

//UWU

function AngryButton(props: AngryButtonProps) {
  const money = useSelector((state: RootState) => state.money);
  const multiplier = useSelector((state: RootState) => state.upgrades.clickMultiplier);
  const dispatch = useDispatch();

  const infiniteClicker = () => {
    let setMoney = 0;
    if (money === 0) {
      setMoney = Number.MAX_SAFE_INTEGER;
    }

    dispatch(moneySlice.actions.set(setMoney));
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <button
        data-testid="manual-clicker"
        className={betterStyle.App_button}
        onClick={() => dispatch(moneySlice.actions.add(1 * multiplier))}
      >
        <img src={logo} className={betterStyle.App_logo} alt="logo" />
      </button>
      <button data-testid="infinite-clicker" hidden={true} onClick={() => infiniteClicker()}></button>
      <p className={betterStyle.paragraph}>You have {money} 😡coins</p>
    </div>
  );
}

export default AngryButton;
