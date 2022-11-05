import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

type TarotProps = {
  title: string;
};

function Tarot(props: TarotProps) {
  const money = useSelector((state: RootState) => state.money);

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{money} money :D</p>
    </div>
  );
}

export default Tarot;
