import React, { useState } from "react";
import { AutoClickerId } from "app/autoClickers";
import { UpgradeId, upgrades } from "app/upgrades";
import { useDispatch, useSelector } from "react-redux";
import { autoClickersSlice, moneySlice, upgradesSlice } from "app/slicers";
import { RootState } from "app/store";

type SingleItemProps = {
  id: UpgradeId | AutoClickerId;
  name: string;
  price: number;
};

const isUpgrade = (id: UpgradeId | AutoClickerId): id is UpgradeId => {
  return upgrades.some((upgrade) => upgrade.id === id);
};

export const SingleItem = (props: SingleItemProps) => {
  const { id, name, price } = props;
  const [amount, setAmount] = useState(1);
  const money = useSelector((state: RootState) => state.money);
  const dispatch = useDispatch();

  const buyItem = () => {
    dispatch(moneySlice.actions.subtract(price));
    if (isUpgrade(id)) {
      dispatch(upgradesSlice.actions.add({ id, amount }));
    } else {
      dispatch(autoClickersSlice.actions.add({ id, amount }));
    }
  };

  const hasEnoughMoney = (): boolean => {
    return money >= price;
  };

  return (
    <div>
      <button type="button" disabled={!hasEnoughMoney()} onClick={() => buyItem()}>
        {name}: {price}$
      </button>
    </div>
  );
};
