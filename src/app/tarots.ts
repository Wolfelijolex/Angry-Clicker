import { tarot0, tarot1, tarot2, tarot3 } from "../assets/Tarots/tarotImg";
export const tarots = [
  {
    id: 0,
    name: "Tarot 0",
    active: false,
    desc: "Tarot 0 description",
    img: tarot0,
  },
  {
    id: 1,
    name: "Tarot 1",
    active: false,
    desc: "Tarot 1 description",
    img: tarot1,
  },
  {
    id: 2,
    name: "Tarot 2",
    active: false,
    desc: "Tarot 2 description",
    img: tarot2,
  },
  {
    id: 3,
    name: "Tarot 3",
    active: false,
    desc: "Tarot 3 description",
    img: tarot3,
  },
] as const;

export type TarotId = typeof tarots[number]["id"];
