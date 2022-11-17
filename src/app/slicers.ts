import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AutoClickerId } from "./autoClickers";
import { loadGameState } from "./storageHandler";
import { TarotId } from "./tarots";
import { UpgradeId } from "./upgrades";

const { initialMoney, initialAngrycoin, initialUpgrades, initialAutoClickers, intialTarot } = loadGameState();

// ----------------- Money -----------------
export const moneySlice = createSlice({
  name: "money",
  initialState: initialMoney,
  reducers: {
    add: (state, action: PayloadAction<number>) => state + action.payload,
    subtract: (state, action: PayloadAction<number>) => state - action.payload,
    set: (state, action: PayloadAction<number>) => action.payload,
  },
});

// ----------------- AngryCoin -----------------
export const angryCoinSlice = createSlice({
  name: "angrycoin",
  initialState: initialAngrycoin,
  reducers: {
    add: (state, action: PayloadAction<number>) => state + action.payload,
    subtract: (state, action: PayloadAction<number>) => state - action.payload,
  },
});

// ----------------- Upgrades -----------------
type UpgradeUpdate = {
  id: UpgradeId;
  amount: number;
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

// ----------------- Autoclickes -----------------
type AutoClickerUpdate = {
  id: AutoClickerId;
  amount: number;
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

// ----------------- Tarots -----------------
export type TarotUpdate = {
  id: TarotId;
  set: boolean;
};

export const tarotSlice = createSlice({
  name: "tarots",
  initialState: intialTarot,
  reducers: {
    set: (state, action: PayloadAction<TarotUpdate>) => {
      return {
        ...state,
        [action.payload.id]: action.payload.set,
      };
    },
  },
});
