import { tarotSlice, TarotUpdate } from "app/slicers";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
//import { tarots } from "app/tarots";

type TarotProps = {
  title: string;
};

function Tarot(props: TarotProps) {
  const dispatch = useDispatch();
  const tarot = useSelector((state: RootState) => state.tarot);

  const handleClick = () => {
    const go: TarotUpdate = {
      id: 0,
      set: true,
    };
    if (tarot[0]) {
      go.set = false;
    }
    dispatch(tarotSlice.actions.set(go));
  };

  return (
    <section>
      <h1>{props.title}</h1>
      <button onClick={() => handleClick()}> tarot0</button>
      {tarot[0] ? <p>tarot0 is active</p> : <p>tarot0 is not active</p>}
    </section>
  );
}

export default Tarot;
