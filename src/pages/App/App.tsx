import React from "react";
import logo from "../../assets/angryScaled.png";
import styles from "../../styles/pages/App.module.scss";
import MyComponent from "../../components/MyComponent/MyComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { moneySlice } from "../../app/slicers";
import StockMarket from "../../components/StockMarket/StockMarket";
function App() {
  const money = useSelector((state: RootState) => state.money);
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-3">
      {/* LEFT COLUMN */}
      <div className="grid grid-rows-3 bg-red-300 gap-3">
        <StockMarket  title="ANGRY Coin"></StockMarket>
        <div>Casino</div>
        <div>Tarot</div>
      </div>

      {/* MIDDLE COLUMN */}
      <div>
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
            <button className="text-amber-400 font-sans" onClick={() => dispatch(moneySlice.actions.add(1))}>
              Click me to get Money! you have {money} coins
            </button>
          </header>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div></div>
    </div>
  );
}

export default App;
