import React, { useEffect } from "react";
import styles from "styles/pages/App.module.scss";
import AngryButton from "components/AngryButton/AngryButtonComponent";
import PopUp from "components/PopUpComponent/PopUpComponent";
import ShopComponent from "components/ShopComponent/ShopComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/store";
import { moneySlice } from "app/slicers";
import StockMarket from "components/StockMarket/StockMarket";
import { autoClickers } from "app/autoClickers";
import Tarot from "components/Tarot/Tarot";
import { saveGame } from "app/storageHandler";
import CreditsPopupComponent from "components/PopUpMenu/PopUpMenu";
import GambleComponent from "components/GambleComponent/GambleButton";

function App() {
  const rootState = useSelector((state: RootState) => state);
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

  useEffect(() => {
    saveGame(rootState);
  }, [rootState]);

  return (
    <div className="overflow-hidden">
      <PopUp title="Become Angry!!!"></PopUp>
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
              <AngryButton title="Click the Angry!!! 😡"></AngryButton>
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
