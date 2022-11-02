export const autoClickers = [
  {
    id: "angryBird",
    name: "Angry Bird 😡",
    basePrice: 10,
  },
  {
    id: "angryFarm",
    name: "Angry Farm",
    basePrice: 100,
  },
] as const;

export type AutoClickerId = typeof autoClickers[number]["id"];
