import React, { useState, useEffect, useRef } from "react";
//import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import styles from "../../styles/components/StockMarket.module.scss";
import "../../styles/components/Stock.scss";
import source from "../../assets/angryScaled.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { moneySlice, angryCoinSlice } from "../../app/slicers";

type StockMarketProps = {
  title: string;
  text: string;
  className?: string;
};

function StockMarket(props: StockMarketProps) {
  //Global state
  const coins = useSelector((state: RootState) => state.angryCoin);
  const money = useSelector((state: RootState) => state.money);
  const dispatch = useDispatch();
  //STATES
  const [stockPrice, setStockPrice] = useState(Math.floor(Math.random() * 200));
  const [stockClasses, setStockClasses] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [buyAmount, setBuyAmount] = useState(0);
  //REFS
  const stockClassesRef = useRef(stockClasses);
  const priceRef = useRef(stockPrice);
  stockClassesRef.current = stockClasses;
  priceRef.current = stockPrice;
  props.className ? props.className : "nope";

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.floor(Math.random() * 2) && priceRef.current > 20) {
        priceRef.current = priceRef.current - Math.floor(Math.random() * 20);
      } else {
        priceRef.current = priceRef.current + Math.floor(Math.random() * 20);
      }
      setStockPrice(priceRef.current);
      handleClassChange();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClassChange = () => {
    for (let i = 0; i < stockClassesRef.current.length; i++) {
      if (i == stockClassesRef.current.length - 1) {
        stockClassesRef.current[i] = priceRef.current;
      } else {
        stockClassesRef.current[i] = stockClassesRef.current[i + 1];
      }
    }
    setStockClasses(stockClassesRef.current);
  };

  const handleCoinBuy = () => {
    if (money >= stockPrice * buyAmount) {
      dispatch(moneySlice.actions.subtract(stockPrice * buyAmount));
      dispatch(angryCoinSlice.actions.add(buyAmount));
    }
  };
  const handleCoinSell = () => {
    if (coins >= buyAmount) {
      dispatch(moneySlice.actions.add(stockPrice * buyAmount));
      dispatch(angryCoinSlice.actions.subtract(buyAmount));
    }
  };

  return (
    <section className={`${props.className ? props.className : ""}  ${styles.StockMarket}`}>
      <h2 className={styles.StockMarket__title}>{props.title}</h2>
      <div className={styles.StockMarket__Content}>
        {/* Stockmarket animation */}
        <div className={` ${styles.StockMarket__graph}`}>
          {stockClasses.map((stockClass, index) => (
            <div key={`stock-${index}`} id={`stock-${index}`} className={`stock-${stockClass}`}>
              <img src={source} />
            </div>
          ))}
          {}
        </div>
        <div className={`${styles.StockMarket__stockPrice}`}>
          <p>value: </p>
          <p className={"w-7"}>{stockPrice}</p>
        </div>
        <div className={`${styles.StockMarket__stockOwned}`}>
          <p>owned: </p>
          <p className={"w-7"}>{coins}</p>
        </div>
        {/* Stockmarket interface */}

        {/* Stockmarket amount flex */}
        <div className={`flex justify-around ${styles.StockMarket__amount}`}>
          {[1, 10, 100].map((value) => {
            return (
              <button
                className={""}
                type="button"
                disabled={buyAmount === value}
                onClick={() => setBuyAmount(value)}
                key={`buy-${value}`}
              >
                {value}x
              </button>
            );
          })}
        </div>
        {/* Stockmarket button flex */}
        <div className={`flex justify-around ${styles.StockMarket__buttons}`}>
          <button onClick={handleCoinBuy}>BUY</button>
          <button onClick={handleCoinSell}>SELL</button>
        </div>
      </div>
    </section>
  );
}

export default StockMarket;
