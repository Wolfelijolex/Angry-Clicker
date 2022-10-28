import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AutoClickerId } from "./autoClickers";
import { UpgradeId } from "./upgrades";

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
const initialUpgrades: { [key in UpgradeId]: number } = {
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
  id: UpgradeId;
  amount: number;
};

// ----------------- Autoclickes -----------------
const initialAutoClickers: { [key in AutoClickerId]: number } = {
  angryBird: 0,
  angryFarm: 0,
};

export const autoClickersSlice = createSlice({
  name: "autoClickers",
  initialState: initialAutoClickers,
  reducers: {
    add: (state, action: PayloadAction<AutoClickerUpdate>) => {
      return {
        ...state,
        [action.payload.id]: state[action.payload.id] + action.payload.amount,
      };
    },
    remove: (state, action: PayloadAction<AutoClickerUpdate>) => {
      return {
        ...state,
        [action.payload.id]: state[action.payload.id] - action.payload.amount,
      };
    },
  },
});

export type AutoClickerUpdate = {
  id: AutoClickerId;
  amount: number;
};
