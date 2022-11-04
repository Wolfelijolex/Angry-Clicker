import React from "react";
import styles from "styles/components/shared/AmountSelector.module.scss";

type AmountSelectorProps = {
  amount: number;
  setAmount: (amount: number) => void;
  values?: number[];
  className?: string;
};

export default function AmountSelector({ amount, setAmount, values = [1, 10, 100], className }: AmountSelectorProps) {
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
            {value}x
          </button>
        );
      })}
    </div>
  );
}
