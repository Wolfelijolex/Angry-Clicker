import React, { useEffect } from "react";
import styles from "../../styles/pages/App.module.scss";
import AngryButton from "../../components/AngryButton/AngryButtonComponent";
import ShopComponent from "components/ShopComponent/ShopComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { moneySlice } from "../../app/slicers";
import StockMarket from "../../components/StockMarket/StockMarket";
import { autoClickers } from "app/autoClickers";
import Tarot from "components/Tarot/Tarot";

function App() {
  const autoClickersState = useSelector((state: RootState) => state.autoClickers);
  const dispatch = useDispatch();

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

  return (
    <div className={styles.Popup}>
      <div className={styles.LayoutGrid}>
        {/* LEFT COLUMN */}
        <div className={`flex flex-col bg-red-300 h-screen ${styles.LayoutGrid__Left}`}>
          <StockMarket title="ANGRY Coin"></StockMarket>
          <Tarot title={"TAR0T"}></Tarot>
        </div>

        {/* MIDDLE COLUMN */}
        <div className={`border-slate-300 border-solid border-x-2  h-screen ${styles.LayoutGrid__Mid}`}>
          <div className={styles.App}>
            <header className={styles.App_header}>
              <AngryButton title="Click the Angry!!! 😡"></AngryButton>
              <p className="text-3xl font-bold">Become angry</p>
              <a
                className={styles.App_link}
                href="https://discord.gg/2hzaK9zPxx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the angry!
              </a>
            </header>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className={`h-screen ${styles.LayoutGrid__Right}`}>
          <ShopComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
