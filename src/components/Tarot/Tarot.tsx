import React, { useState } from "react";
import { TarotId, tarots } from "app/tarots";
import { moneySlice, tarotSlice, TarotUpdate } from "app/slicers";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/store";
import TarotCard from "./TarotCard/TarotCard";
import styles from "styles/components/Tarot.module.scss";

type TarotProps = {
  title: string;
};

const tarotDuration = 6000;

function Tarot(props: TarotProps) {
  const tarot = useSelector((state: RootState) => state.tarot);
  const money = useSelector((state: RootState) => state.money);
  const dispatch = useDispatch();

  const [currentTarot, setCurrentTarot] = useState<TarotId>(0);
  const [cardFlip, setCardFlip] = useState<boolean>(false);

  const rollNewTarot = () => {
    handleFlip(true);
    handleTarotChange(currentTarot);
    const dice = Math.floor(Math.random() * (Object.keys(tarot).length - 1) + 1);
    setCurrentTarot(dice as TarotId);
    handleTarotChange(dice as TarotId);
    handleCertainTarot(dice as TarotId);
    setTimeout(() => {
      handleTarotChange(dice as TarotId);
      setCurrentTarot(0);
      handleFlip(false);
      dispatch(tarotSlice.actions.set({ id: 0, set: true }));
    }, tarotDuration);
  };

  const handleTarotChange = (updateID: TarotId) => {
    const update: TarotUpdate = {
      id: updateID,
      set: true,
    };
    if (tarot[updateID]) {
      update.set = false;
    }
    dispatch(tarotSlice.actions.set(update));
  };

  const handleFlip = (set: boolean) => {
    setCardFlip(set);
  };

  const handleCertainTarot = (id: TarotId) => {
    const mod = tarots[id].mod;
    switch (id) {
    case 1:
      dispatch(moneySlice.actions.add(Math.round(money * mod)));
      break;
    case 2:
      dispatch(moneySlice.actions.add(Math.round(money * mod)));
      break;
    case 3:
      dispatch(moneySlice.actions.set(mod));
      break;
    case 4:
      dispatch(moneySlice.actions.set(mod));
      break;
    }
  };

  return (
    <section className={styles.Tarot}>
      <h1 className={styles.Tarot__Title}>{props.title}</h1>
      <div className={styles.Tarot__Wrapper}>
        <div
          className={`flex justify-center ${styles.Tarot__Front} ${cardFlip ? styles.flip : ""}`}
          onClick={() => {
            if (tarot[0] === true) {
              rollNewTarot();
            }
          }}
        >
          <TarotCard id={currentTarot}></TarotCard>
        </div>
        <div className={`flex justify-center ${styles.Tarot__Back} ${cardFlip ? styles.flip : ""}`}>
          <TarotCard id={0} back={true}></TarotCard>
        </div>
      </div>
    </section>
  );
}

export default Tarot;
