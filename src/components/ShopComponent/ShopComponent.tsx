import { autoClickers } from "app/autoClickers";
import { upgrades } from "app/upgrades";
import { RootState } from "app/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import SingleItem from "./SingleItem/SingleItem";
import styles from "styles/components/Store.module.scss";

function ShopComponent() {
  const appState = useSelector((state: RootState) => state);
  const [buyAmount, setBuyAmount] = useState(1);

  const calculatePrice = (price: number, owned: number): number => {
    return Math.ceil(price * Math.pow(1.15, owned)) * buyAmount;
  };

  return (
    <div className="mx-6">
      <div className="w-100 text-center mb-3 text-2xl font-bold">Angry Shop</div>
      <div className="flex justify-around">
        {[1, 10, 100].map((value) => {
          return (
            <button
              className={styles.AmountSelectionButton}
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
      <div className="w-100 text-center mt-4 mb-2 text-xl">Upgrade Shop</div>
      {upgrades.map((upgrade) => {
        return (
          <SingleItem
            id={upgrade.id}
            name={upgrade.name}
            price={calculatePrice(upgrade.basePrice, appState.upgrades[upgrade.id])}
            amount={buyAmount}
            owned={appState.upgrades[upgrade.id]}
            key={upgrade.id}
          />
        );
      })}
      <div className="w-100 text-center mt-4 mb-2 text-xl">Autoclicker Shop</div>
      {autoClickers.map((clicker) => {
        return (
          <SingleItem
            id={clicker.id}
            name={clicker.name}
            price={calculatePrice(clicker.basePrice, appState.autoClickers[clicker.id])}
            amount={buyAmount}
            owned={appState.autoClickers[clicker.id]}
            key={clicker.id}
          />
        );
      })}
    </div>
  );
}

export default ShopComponent;
