import React, { useEffect } from "react";
import logo from "../../assets/angryScaled.png";
import styles from "../../styles/pages/App.module.scss";
import MyComponent from "../../components/MyComponent/MyComponent";
import ShopComponent from "components/ShopComponent/ShopComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { moneySlice } from "../../app/slicers";
import StockMarket from "../../components/StockMarket/StockMarket";
import { autoClickers } from "app/autoClickers";
import Tarot from "components/Tarot/Tarot";
import CreditsPopupComponent from "components/CreditsPopupComponent/CreditsButtonComponent";
import GambleComponent from "components/GambleComponent/GambleComponent";

function App() {
  const rootState = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const {
    money,
    upgrades: { clickMultiplier: multiplier },
    autoClickers: autoClickersState,
  } = rootState;

  useEffect(() => {
    const interval = setInterval(() => {
      let autoClickerMoney = 0;
      autoClickers.forEach((clicker) => {
        autoClickerMoney += autoClickersState[clicker.id] * clicker.baseAps;
      });

      dispatch(moneySlice.actions.add(autoClickerMoney));
    }, 1000);

    return () => clearInterval(interval);
  }, [autoClickersState]);

  useEffect(() => {
    localStorage.setItem("save", JSON.stringify(rootState));
  }, [rootState]);

  const infiniteClicker = () => {
    let setMoney = 0;
    if (money === 0) {
      setMoney = Number.MAX_SAFE_INTEGER;
    }

    dispatch(moneySlice.actions.set(setMoney));
  };

  return (
    <div className={styles.LayoutGrid}>
      {/* LEFT COLUMN */}

      <div className={`flex flex-col bg-red-300 h-screen ${styles.LayoutGrid__Left}`}>
        <StockMarket title="ANGRY Coin"></StockMarket>
        <GambleComponent></GambleComponent>
        <Tarot title={"TAR0T"}></Tarot>
      </div>

      {/* MIDDLE COLUMN */}
      <div className={`border-slate-300 border-solid border-x-2  h-screen ${styles.LayoutGrid__Mid}`}>
        <CreditsPopupComponent></CreditsPopupComponent>

        <div className={styles.App}>
          <header className={styles.App_header}>
            <img src={logo} className={styles.App_logo} alt="logo" />
            <p className="text-3xl font-bold">Become angry</p>
            <a
              className={styles.App_link}
              href="https://discord.gg/2hzaK9zPxx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the angry!
            </a>
            <MyComponent title="Title of MyComponent" text="Text of MyComponent"></MyComponent>
            <button
              data-testid="manual-clicker"
              className="text-amber-400 font-sans"
              onClick={() => dispatch(moneySlice.actions.add(1 * multiplier))}
            >
              Click me to get Money! you have {money} coins
            </button>
            <button data-testid="infinite-clicker" hidden={true} onClick={() => infiniteClicker()}></button>
          </header>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className={`h-screen ${styles.LayoutGrid__Right}`}>
        <ShopComponent />
      </div>
    </div>
  );
}

export default App;
