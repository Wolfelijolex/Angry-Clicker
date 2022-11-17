import React from "react";
import styles from "styles/components/Store.module.scss";
import { AutoClickerId } from "app/autoClickers";
import { UpgradeId } from "app/upgrades";
import { useSelector } from "react-redux";
import { RootState } from "app/store";

type SingleItemProps = {
  id: UpgradeId | AutoClickerId;
  name: string;
  price: number;
  selectedAmount: number;
  onBuy: () => void;
  owned: number;
};

function SingleItem({ id, name, price, selectedAmount, onBuy, owned }: SingleItemProps) {
  const money = useSelector((state: RootState) => state.money);

  const buyItem = () => {
    if (money < price) {
      return;
    }

    onBuy();
  };

  const getWrapperClasses = () => {
    if (money < price || selectedAmount === 0) {
      return `${styles.SingleStoreItemWrapper} ${styles.Disabled}`;
    }
    return styles.SingleStoreItemWrapper;
  };

  return (
    <div data-testid={`shop-item-${id}`} className={getWrapperClasses()} onClick={() => buyItem()}>
      <span>
        {name}
        <br />
        {selectedAmount}x for 😡{price}
      </span>
      <span className="text-xl font-bold">{owned}</span>
    </div>
  );
}

export default SingleItem;
