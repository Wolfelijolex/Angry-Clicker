import React from "react";
import styles from "styles/components/shared/AmountSelector.module.scss";

type AmountSelectorProps = {
  amount: number;
  setAmount: (amount: number) => void;
  values?: number[];
  hasAll?: boolean;
  className?: string;
};

export default function AmountSelector({
  amount,
  setAmount,
  values = [1, 10, 100],
  hasAll = false,
  className,
}: AmountSelectorProps) {
  values = hasAll ? [...values, -1] : values;
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
            {value === -1 ? "ALL" : value + "x"}
          </button>
        );
      })}
    </div>
  );
}
