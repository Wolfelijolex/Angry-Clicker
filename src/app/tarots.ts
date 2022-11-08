import { tarot0, tarot1, tarot2, tarot3, tarot4 } from "../assets/Tarots/tarotImg";
export const tarots = [
  {
    id: 0,
    name: "Tarot Available",
    active: false,
    desc: "Flip the card to reveal your fate 😡",
    img: tarot0,
    mod: 0,
  },
  {
    id: 1,
    name: "The Man",
    active: false,
    desc: "Let the angry be released! \n Become 10% more angry.",
    img: tarot1,
    mod: 0.1,
  },
  {
    id: 2,
    name: "The Nerd",
    active: false,
    desc: "Uhm actually... With the power of the nerd you are able to come up with more ways to make people angry\nAngry increased by... a mathematical constant?",
    img: tarot2,
    mod: 3.1415,
  },
  {
    id: 3,
    name: "The Fool",
    active: false,
    desc: "You fell off \nLose all angry",
    img: tarot3,
    mod: 0,
  },
  {
    id: 4,
    name: "The Cat",
    active: false,
    desc: "Party Time!",
    img: tarot4,
    mod: 1337,
  },
] as const;

export type TarotId = typeof tarots[number]["id"];
