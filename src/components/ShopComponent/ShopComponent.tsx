import { autoClickers } from "app/autoClickers";
import { upgrades } from "app/upgrades";
import { RootState } from "app/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import SingleItem from "./SingleItem/SingleItem";
import AmountSelector from "components/shared/AmountSelector";

export default function ShopComponent() {
  const appState = useSelector((state: RootState) => state);
  const [buyAmount, setBuyAmount] = useState(1);

  const calculatePrice = (price: number, owned: number): number => {
    let nextPrice = 0;
    for (let i = 0; i < buyAmount; i++) {
      console.log(i);
      nextPrice += price * (owned + 1 + i);
    }

    return nextPrice;
  };

  return (
    <div className="mx-6">
      <div className="w-100 text-center mb-3 text-2xl font-bold">Angry Shop</div>
      <AmountSelector amount={buyAmount} setAmount={setBuyAmount} />
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
