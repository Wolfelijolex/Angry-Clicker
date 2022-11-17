import React from "react";
import styles from "styles/components/Selector.module.scss";

type Selector<AMOUNT> = {
  amount: AMOUNT;
  setAmount: (amount: AMOUNT) => void;
  values: AMOUNT[];
  className?: string;
};

export default function Selector<T = number>({ amount, setAmount, values, className }: Selector<T>) {
  return (
    <div className={`flex justify-around ${className}`}>
      {values.map((value) => {
        return (
          <button
            className={styles.SelectorButton}
            type="button"
            disabled={amount === value}
            onClick={() => setAmount(value)}
            key={`selection-${value}`}
          >
            {String(value)}
          </button>
        );
      })}
    </div>
  );
}
