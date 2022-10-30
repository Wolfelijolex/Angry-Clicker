import React, { useState, useEffect, useRef } from "react";

type StockMarketProps = {
  title: string;
  text: string;
};

function StockMarket(props: StockMarketProps) {
  const [stockPrice, setStockPrice] = useState(0);
  const [stockClasses, setStockClasses] = useState([0, 0, 0, 0]);
  const stockClassesRef = useRef(stockClasses);
  stockClassesRef.current = stockClasses;
  const priceRef = useRef(stockPrice);
  priceRef.current = stockPrice;

  useEffect(() => {
    const interval = setInterval(() => {
      priceRef.current = Math.floor(Math.random() * 100);
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

  return (
    <section>
      <h2>{props.title}</h2>
      {/* Stockmarket animation */}
      <div>
        <div>
          {stockClasses.map((stockClass, index) => (
            <div key={index} className={`stock ${stockClass}`}>
              {stockClass}
            </div>
          ))}
        </div>
        <div>
          <p>{stockPrice}</p>
          <p>owned</p>
        </div>
      </div>
      {/* Stockmarket interface */}
      <div>
        {/* Stockmarket amount flex */}
        <div>
          <p>1</p>
          <p>10</p>
          <p>100</p>
          <p>all</p>
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
