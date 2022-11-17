import React, { useState, useEffect, useRef } from "react";
import styles from "styles/components/StockMarket.module.scss";
import "styles/components/Stock.scss";
import source from "assets/angryScaled.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/store";
import { moneySlice, angryCoinSlice } from "app/slicers";
import Selector from "components/Selector/Selector";

type StockMarketProps = {
  title: string;
  className?: string;
};

type Amount = "MAX" | number;

function StockMarket(props: StockMarketProps) {
  //Global state
  const coins = useSelector((state: RootState) => state.angryCoin);
  const money = useSelector((state: RootState) => state.money);
  const dispatch = useDispatch();
  //STATES
  const [stockPrice, setStockPrice] = useState(Math.floor(Math.random() * 200));
  const [stockClasses, setStockClasses] = useState(new Array(38).fill(0));
  const [buyAmount, setBuyAmount] = useState<Amount>(1);
  //REFS
  const stockClassesRef = useRef(stockClasses);
  const priceRef = useRef(stockPrice);
  stockClassesRef.current = stockClasses;
  priceRef.current = stockPrice;

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.floor(Math.random() * 2) && priceRef.current > 20) {
        priceRef.current = priceRef.current - Math.floor(Math.random() * 20 - 1);
      } else {
        priceRef.current = priceRef.current + Math.floor(Math.random() * 20 + 1);
        if (priceRef.current > 200) {
          priceRef.current = 200;
        }
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

  const getAllAmount = () => {
    return Math.floor(money / stockPrice);
  };

  const handleCoinBuy = () => {
    if (buyAmount === "MAX") {
      dispatch(moneySlice.actions.subtract(getAllAmount() * stockPrice));
      dispatch(angryCoinSlice.actions.add(getAllAmount()));
    } else if (money >= stockPrice * buyAmount || money >= stockPrice * buyAmount * -1) {
      dispatch(moneySlice.actions.subtract(stockPrice * buyAmount));
      dispatch(angryCoinSlice.actions.add(buyAmount));
    }
  };

  const handleCoinSell = () => {
    if (buyAmount === "MAX" || coins < buyAmount) {
      dispatch(moneySlice.actions.add(coins * stockPrice));
      dispatch(angryCoinSlice.actions.subtract(coins));
    } else {
      dispatch(moneySlice.actions.add(stockPrice * buyAmount));
      dispatch(angryCoinSlice.actions.subtract(buyAmount));
    }
  };

  return (
    <section data-testid="stockmarket" className={`${props.className ?? ""}  ${styles.StockMarket}`}>
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
          <p data-testid="stockmarket-price" className={"w-7"}>
            {stockPrice}
          </p>
        </div>
        <div className={`${styles.StockMarket__stockOwned}`}>
          <p>owned: </p>
          <p className={"w-7"}>{coins}</p>
        </div>
        {/* Stockmarket interface */}
        <Selector<Amount>
          amount={buyAmount}
          setAmount={setBuyAmount}
          values={[1, 10, 100, "MAX"]}
          className={`${styles.StockMarket__amount}`}
        />
        {/* Stockmarket button flex */}
        <div className={`${styles.StockMarket__buttons}`}>
          <button
            data-testid="stockmarket-buy"
            disabled={(buyAmount !== "MAX" && buyAmount * stockPrice > money) || getAllAmount() == 0}
            className={`${styles.StockMarket__buttons__buy}`}
            onClick={handleCoinBuy}
          >
            BUY
          </button>
          <button
            data-testid="stockmarket-sell"
            disabled={coins === 0 || (buyAmount !== "MAX" && coins < buyAmount)}
            className={`${styles.StockMarket__buttons__sell}`}
            onClick={handleCoinSell}
          >
            SELL
          </button>
        </div>
      </div>
    </section>
  );
}

export default StockMarket;
