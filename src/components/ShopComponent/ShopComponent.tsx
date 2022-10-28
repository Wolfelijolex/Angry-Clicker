import { autoClickers } from "app/autoClickers";
import { upgrades } from "app/upgrades";
import { RootState } from "app/store";
import React from "react";
import { useSelector } from "react-redux";
import { SingleItem } from "./SingleItem/SingleItem";

const calculatePrice = (price: number, owned: number): number => {
  return Math.ceil(price * Math.pow(1.15, owned));
};

export const ShopComponent = () => {
  const appState = useSelector((state: RootState) => state);

  return (
    <div>
      <div>Upgrade Shop</div>
      {upgrades.map((upgrade) => {
        return (
          <SingleItem
            id={upgrade.id}
            name={upgrade.name}
            price={calculatePrice(upgrade.basePrice, appState.upgrades[upgrade.id])}
            key={upgrade.id}
          />
        );
      })}
      <div>Autoclicker Shop</div>
      {autoClickers.map((clicker) => {
        return (
          <SingleItem
            id={clicker.id}
            name={clicker.name}
            price={calculatePrice(clicker.basePrice, appState.autoClickers[clicker.id])}
            key={clicker.id}
          />
        );
      })}
    </div>
  );
};
