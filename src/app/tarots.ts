export const tarots = [
  {
    id: "tarot0",
    name: "Tarot 0",
    active: false,
  },
  {
    id: "tarot1",
    name: "Tarot 1",
    active: false,
  }
] as const;

export type TarotId = typeof tarots[number]["id"];
