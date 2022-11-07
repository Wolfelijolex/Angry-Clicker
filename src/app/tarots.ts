import { tarot0, tarot1, tarot2, tarot3 } from "../assets/Tarots/tarotImg";
export const tarots = [
  {
    id: 0,
    name: "Tarot Available",
    active: false,
    desc: "Flip the card to reveal your fate 😡",
    img: tarot0,
  },
  {
    id: 1,
    name: "The Man",
    active: false,
    desc: `Let the angry be released! \n 
    Angry production increased by 10%.`,
    img: tarot1,
  },
  {
    id: 2,
    name: "The Nerd",
    active: false,
    desc: `Uhm actually... \n 
    With the power of the nerd you are able to come up with more ways to make people angry \n 
    Angry production increased by... 20%?`,
    img: tarot2,
  },
  {
    id: 3,
    name: "Waltuh",
    active: false,
    desc: "Tarot 3 description",
    img: tarot3,
  },
] as const;

export type TarotId = typeof tarots[number]["id"];
