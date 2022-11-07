import React from "react";
import { TarotId } from "app/tarots";
import { tarots } from "../../../app/tarots";

type TarotCardProps = {
  id: TarotId;
};

function TarotCard(props: TarotCardProps) {
  const tarot = tarots[props.id];
  return (
    <section>
      <img src={tarot.img} />
      <h2>{tarot.name} </h2>
      <p> {tarot.desc}</p>
    </section>
  );
}

export default TarotCard;
