export const tarots = [
  {
    id: 0,
    name: "Tarot 0",
    active: false,
  },
  {
    id: 1,
    name: "Tarot 1",
    active: false,
  },
  {
    id: 2,
    name: "Tarot 2",
    active: false,
  },
] as const;

export type TarotId = typeof tarots[number]["id"];
