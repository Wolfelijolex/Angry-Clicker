import { configureStore } from "@reduxjs/toolkit";
import { autoClickersSlice, moneySlice, upgradesSlice } from "./slicers";

export const store = configureStore({
  reducer: {
    money: moneySlice.reducer,
    upgrades: upgradesSlice.reducer,
    autoClickers: autoClickersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
