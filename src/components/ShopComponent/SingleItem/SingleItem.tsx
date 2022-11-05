import React from "react";
import styles from "styles/components/Store.module.scss";
import { AutoClickerId } from "app/autoClickers";
import { UpgradeId, upgrades } from "app/upgrades";
import { useDispatch, useSelector } from "react-redux";
import { autoClickersSlice, moneySlice, upgradesSlice } from "app/slicers";
import { RootState } from "app/store";

type SingleItemProps = {
  id: UpgradeId | AutoClickerId;
  name: string;
  price: number;
  amount: number;
  owned: number;
};

const isUpgrade = (id: UpgradeId | AutoClickerId): id is UpgradeId => {
  return upgrades.some((upgrade) => upgrade.id === id);
};

function SingleItem({ id, name, price, amount, owned }: SingleItemProps) {
  const money = useSelector((state: RootState) => state.money);
  const dispatch = useDispatch();

  const buyItem = () => {
    if (money < price) {
      return;
    }

    dispatch(moneySlice.actions.subtract(price));
    if (isUpgrade(id)) {
      dispatch(upgradesSlice.actions.add({ id, amount }));
    } else {
      dispatch(autoClickersSlice.actions.add({ id, amount }));
    }
  };

  const getWrapperClasses = () => {
    const classes = `TA-shop-item-${id} ${styles.SingleStoreItemWrapper}`;
    if (money < price) {
      return `${classes} ${styles.Disabled}`;
    }
    return classes;
  };

  return (
    <div className={getWrapperClasses()} onClick={() => buyItem()}>
      <span>
        {name}
        <br />€{price}
      </span>
      <span className="text-xl font-bold">{owned}</span>
    </div>
  );
}

export default SingleItem;
