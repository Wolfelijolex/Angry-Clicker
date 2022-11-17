import React, { useState } from "react";
import { TarotId, tarots } from "app/tarots";
import { moneySlice } from "app/slicers";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/store";
import TarotCard from "./TarotCard/TarotCard";
import styles from "styles/components/Tarot.module.scss";

type TarotProps = {
  title: string;
};

const tarotDuration = 6000;

const isTarotId = (id: number): id is TarotId => {
  return id >= 0 && id < tarots.length;
};

function Tarot(props: TarotProps) {
  const money = useSelector((state: RootState) => state.money);
  const dispatch = useDispatch();

  const [currentTarot, setCurrentTarot] = useState<TarotId>(0);
  const [cardFlip, setCardFlip] = useState<boolean>(false);

  const rollNewTarot = () => {
    handleFlip(true);
    const dice = Math.floor(Math.random() * (tarots.length - 1) + 1);
    
    if (!isTarotId(dice)) {
      return;
    }

    setCurrentTarot(dice);
    handleTarotAction(dice);
    setTimeout(() => {
      setCurrentTarot(0);
      handleFlip(false);
    }, tarotDuration);
  };

  const handleFlip = (set: boolean) => {
    setCardFlip(set);
  };

  const handleTarotAction = (id: TarotId) => {
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
            if (currentTarot === 0) {
              rollNewTarot();
            }
          }}
        >
          <TarotCard id={currentTarot} />
        </div>
        <div className={`flex justify-center ${styles.Tarot__Back} ${cardFlip ? styles.flip : ""}`}>
          <TarotCard id={0} back={true} />
        </div>
      </div>
    </section>
  );
}

export default Tarot;
