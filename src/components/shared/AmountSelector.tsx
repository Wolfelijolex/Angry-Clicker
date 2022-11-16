import React from "react";
import styles from "styles/components/shared/AmountSelector.module.scss";

type AmountSelectorProps<AMOUNT> = {
  amount: AMOUNT;
  setAmount: (amount: AMOUNT) => void;
  values: AMOUNT[];
  className?: string;
};

export default function AmountSelector<T = number>({ amount, setAmount, values, className }: AmountSelectorProps<T>) {
  return (
    <div className={`flex justify-around ${className}`}>
      {values.map((value) => {
        return (
          <button
            className={styles.AmountSelectionButton}
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
