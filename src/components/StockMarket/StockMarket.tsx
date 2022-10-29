import React, { useState, useEffect } from "react";

type StockMarketProps = {
  title: string;
  text: string;
};

function StockMarket(props: StockMarketProps) {
  const [stockPrice, setStockPrice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStockPrice(Math.floor(Math.random() * 100));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <h2>{props.title}</h2>
      {/* Stockmarket animation */}
      <div>
        <div>
          <p></p>
          <p></p>
          <p></p>
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
