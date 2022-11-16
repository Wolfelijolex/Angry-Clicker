import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AutoClickerId } from "./autoClickers";
import { TarotId } from "./tarots";
import { UpgradeId } from "./upgrades";

const stateFromStorage = JSON.parse(localStorage.getItem("save") ?? "{}");

let initialMoney = 0;
let initialAngrycoin = 0;
let initialUpgrades: { [key in UpgradeId]: number } = {
  clickMultiplier: 1,
};

let initialAutoClickers: { [key in AutoClickerId]: number } = {
  angryBird: 0,
  angryFarm: 0,
  angryFactory: 0,
  angryMine: 0,
  angryPlanet: 0,
  angryGalaxy: 0,
};

let intialTarot: { [key in TarotId]: boolean } = {
  0: true,
  1: false,
  2: false,
  3: false,
  4: false,
};

if (stateFromStorage.money) {
  initialMoney = stateFromStorage.money;
}
if (stateFromStorage.angrycoin) {
  initialAngrycoin = stateFromStorage.angrycoin;
}
if (stateFromStorage.upgrades) {
  initialUpgrades = stateFromStorage.upgrades;
}
if (stateFromStorage.autoClickers) {
  initialAutoClickers = stateFromStorage.autoClickers;
}
if (stateFromStorage.tarot) {
  intialTarot = stateFromStorage.tarot;
}

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

// ----------------- Tarots -----------------
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

export type TarotUpdate = {
  id: TarotId;
  set: boolean;
};
