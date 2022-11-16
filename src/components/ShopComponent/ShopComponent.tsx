import { autoClickers } from "app/autoClickers";
import { upgrades } from "app/upgrades";
import { RootState } from "app/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleItem from "./SingleItem/SingleItem";
import AmountSelector from "components/shared/AmountSelector";
import { autoClickersSlice, moneySlice, upgradesSlice } from "app/slicers";

type Amount = 1 | 10 | 100 | "MAX";

function getSingleItemPrice(basePrice: number, owned: number): number {
  return Math.floor(basePrice * Math.pow(1.15, owned));
}

function getPrice(buyAmount: number, basePrice: number, owned: number): number {
  let nextPrice = 0;
  for (let i = 0; i < buyAmount; i++) {
    nextPrice += getSingleItemPrice(basePrice, owned + i);
  }
  return nextPrice;
}

function getAmount(amount: Amount, basePrice: number, owned: number, totalMoney: number): number {
  if (amount !== "MAX") {
    return amount;
  }

  let nextPrice = 0;
  let nextAmount = 0;
  while (nextPrice <= totalMoney) {
    nextPrice += getSingleItemPrice(basePrice, owned + nextAmount);
    nextAmount++;
  }
  return nextAmount - 1;
}

export default function ShopComponent() {
  const appState = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const [buyAmount, setBuyAmount] = useState<Amount>(1);

  return (
    <div data-testid="shop" className="mx-6">
      <div className="w-100 text-center mb-3 text-2xl font-bold">Angry Shop</div>
      <AmountSelector<Amount> amount={buyAmount} setAmount={setBuyAmount} values={[1, 10, 100, "MAX"]} />
      <div className="w-100 text-center mt-4 mb-2 text-xl">Upgrade Shop</div>
      {upgrades.map((upgrade) => {
        const amount = getAmount(buyAmount, upgrade.basePrice, appState.upgrades[upgrade.id], appState.money);
        const price = getPrice(amount, upgrade.basePrice, appState.upgrades[upgrade.id]);
        return (
          <SingleItem
            id={upgrade.id}
            name={upgrade.name}
            price={price}
            selectedAmount={amount}
            onBuy={() => {
              dispatch(moneySlice.actions.subtract(price));
              dispatch(upgradesSlice.actions.add({ id: upgrade.id, amount }));
            }}
            owned={appState.upgrades[upgrade.id]}
            key={upgrade.id}
          />
        );
      })}
      <div className="w-100 text-center mt-4 mb-2 text-xl">Autoclicker Shop</div>
      {autoClickers.map((clicker) => {
        const amount = getAmount(buyAmount, clicker.basePrice, appState.autoClickers[clicker.id], appState.money);
        const price = getPrice(amount, clicker.basePrice, appState.autoClickers[clicker.id]);
        return (
          <SingleItem
            id={clicker.id}
            name={clicker.name}
            price={price}
            selectedAmount={amount}
            onBuy={() => {
              dispatch(moneySlice.actions.subtract(price));
              dispatch(autoClickersSlice.actions.add({ id: clicker.id, amount }));
            }}
            owned={appState.autoClickers[clicker.id]}
            key={clicker.id}
          />
        );
      })}
    </div>
  );
}
