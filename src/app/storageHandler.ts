import { AutoClickerId } from "./autoClickers";
import { RootState } from "./store";
import { TarotId } from "./tarots";
import { UpgradeId } from "./upgrades";

const SAVE_KEY = "save";

export function saveGame(save: RootState) {
  localStorage.setItem(SAVE_KEY, JSON.stringify(save));
}

export function loadGameState() {
  const stateFromStorage = JSON.parse(localStorage.getItem(SAVE_KEY) ?? "{}");

  const initialMoney = stateFromStorage.money ?? 0;
  const initialAngrycoin = stateFromStorage.angryCoin ?? 0;
  const initialUpgrades: { [key in UpgradeId]: number } = stateFromStorage.upgrades ?? { clickMultiplier: 1, };

  const initialAutoClickers: { [key in AutoClickerId]: number } = stateFromStorage.autoClickers ?? {
    angryBird: 0,
    angryFarm: 0,
    angryFactory: 0,
    angryMine: 0,
    angryPlanet: 0,
    angryGalaxy: 0,
  };

  const intialTarot: { [key in TarotId]: boolean } = stateFromStorage.tarot ?? {
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
  };

  return {
    initialMoney,
    initialAngrycoin,
    initialUpgrades,
    initialAutoClickers,
    intialTarot,
  };
}
