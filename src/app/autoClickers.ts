export const autoClickers = [
  {
    id: "angryBird",
    name: "Angry Bird",
    basePrice: 10,
    baseAps: 1,
  },
  {
    id: "angryFarm",
    name: "Angry Farm",
    basePrice: 100,
    baseAps: 10,
  },
  {
    id: "angryFactory",
    name: "Angry Factory",
    basePrice: 1000,
    baseAps: 100,
  },
  {
    id: "angryMine",
    name: "Angry Mine",
    basePrice: 5_000,
    baseAps: 5_000,
  },
  {
    id: "angryPlanet",
    name: "Angry Planet",
    basePrice: 10_000,
    baseAps: 20_000,
  },
  {
    id: "angryGalaxy",
    name: "Angry Galaxy",
    basePrice: 100_000,
    baseAps: 100_000,
  },
] as const;

export type AutoClickerId = typeof autoClickers[number]["id"];
