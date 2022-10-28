import { autoClickers } from "app/autoClickers";
import { upgrades } from "app/upgrades";
import { RootState } from "app/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SingleItem } from "./SingleItem/SingleItem";

export const ShopComponent = () => {
  const appState = useSelector((state: RootState) => state);
  const [buyAmount, setBuyAmount] = useState(1);

  const calculatePrice = (price: number, owned: number): number => {
    return Math.ceil(price * Math.pow(1.15, owned)) * buyAmount;
  };

  return (
    <div>
      <div>
        <button type="button" disabled={buyAmount === 1} onClick={() => setBuyAmount(1)}>
          1x
        </button>
        <button type="button" disabled={buyAmount === 10} onClick={() => setBuyAmount(10)}>
          10x
        </button>
        <button type="button" disabled={buyAmount === 100} onClick={() => setBuyAmount(100)}>
          100x
        </button>
      </div>
      <div>Upgrade Shop</div>
      {upgrades.map((upgrade) => {
        return (
          <SingleItem
            id={upgrade.id}
            name={upgrade.name}
            price={calculatePrice(upgrade.basePrice, appState.upgrades[upgrade.id])}
            amount={buyAmount}
            key={upgrade.id}
          />
        );
      })}
      <div>Autoclicker Shop (wip)</div>
      {autoClickers.map((clicker) => {
        return (
          <SingleItem
            id={clicker.id}
            name={clicker.name}
            price={calculatePrice(clicker.basePrice, appState.autoClickers[clicker.id])}
            amount={buyAmount}
            key={clicker.id}
          />
        );
      })}
    </div>
  );
};
