import React, { useState, useEffect, useRef } from "react";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";

type StockMarketProps = {
  title: string;
  text: string;
};

function StockMarket(props: StockMarketProps) {
  //STATES
  const [stockPrice, setStockPrice] = useState(0);
  const [stockClasses, setStockClasses] = useState([0, 0, 0, 0]);
  const [buyAmount, setBuyAmount] = useState(0);
  //REFS
  const stockClassesRef = useRef(stockClasses);
  const priceRef = useRef(stockPrice);
  stockClassesRef.current = stockClasses;
  priceRef.current = stockPrice;
  //XARROW
  const updateXarrow = useXarrow();

  useEffect(() => {
    const interval = setInterval(() => {
      priceRef.current = Math.floor(Math.random() * 100);
      setStockPrice(priceRef.current);
      handleClassChange();
      updateXarrow();
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

  return (
    <section>
      <h2>{props.title}</h2>
      {/* Stockmarket animation */}
      <div>
        <div className="flex justify-around">
          <Xwrapper>
            {stockClasses.map((stockClass, index) => (
              <div key={`stock-${index}`} id={`stock-${index}`} className={`stock ${stockClass}`}></div>
            ))}

            <Xarrow key={`xarrow-${0}`} showHead={false} start={`stock-${0}`} end={`stock-${1}`} />
            <Xarrow key={`xarrow-${1}`} showHead={false} start={`stock-${1}`} end={`stock-${2}`} />
            <Xarrow key={`xarrow-${2}`} showHead={false} start={`stock-${2}`} end={`stock-${3}`} />
          </Xwrapper>
        </div>
        <div>
          <p>{stockPrice}</p>
          <p>owned</p>
        </div>
      </div>
      {/* Stockmarket interface */}
      <div>
        {/* Stockmarket amount flex */}
        <div className="flex justify-around">
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
        <div>
          <button>BUY</button>
          <button>SELL</button>
        </div>
      </div>
    </section>
  );
}

export default StockMarket;
