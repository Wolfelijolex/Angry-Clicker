import React from "react";
import styles from "styles/components/shared/AmountSelector.module.scss";

type AmountSelectorProps = {
  amount: number;
  setAmount: (amount: number) => void;
  values?: number[];
};

export function AmountSelector({ amount, setAmount, values = [1, 10, 100] }: AmountSelectorProps) {
  return (
    <div className="flex justify-around">
      {values.map((value) => {
        return (
          <button
            className={styles.AmountSelectionButton}
            type="button"
            disabled={amount === value}
            onClick={() => setAmount(value)}
            key={`selection-${value}`}
          >
            {value}x
          </button>
        );
      })}
    </div>
  );
}
