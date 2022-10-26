import { configureStore } from "@reduxjs/toolkit";
import { moneySlice, upgradesSlice } from "./slicers";

export const store = configureStore({
  reducer: {
    money: moneySlice.reducer,
    upgrades: upgradesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
