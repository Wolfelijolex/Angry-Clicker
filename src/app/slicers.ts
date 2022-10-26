import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ----------------- Money -----------------
export const moneySlice = createSlice({
  name: "money",
  initialState: 0,
  reducers: {
    add: (state, action: PayloadAction<number>) => state + action.payload,
    subtract: (state, action: PayloadAction<number>) => state - action.payload,
  },
});

// ----------------- Upgrades -----------------
const initialUpgrades = {
  clickMultiplier: 1,
};

export const upgradesSlice = createSlice({
  name: "upgrades",
  initialState: initialUpgrades,
  reducers: {
    add: (state, action: PayloadAction<UpgradeUpdate>) => {
      return {
        ...state,
        [action.payload.id]: state[action.payload.id] + action.payload.amount,
      };
    },
  },
});

export type UpgradeUpdate = {
  id: keyof typeof initialUpgrades;
  amount: number;
};

// ----------------- Autoclickes -----------------
