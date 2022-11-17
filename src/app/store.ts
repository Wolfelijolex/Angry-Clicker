import { configureStore } from "@reduxjs/toolkit";
import { autoClickersSlice, moneySlice, upgradesSlice, angryCoinSlice } from "./slicers";

export const store = configureStore({
  reducer: {
    money: moneySlice.reducer,
    upgrades: upgradesSlice.reducer,
    autoClickers: autoClickersSlice.reducer,
    angryCoin: angryCoinSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
