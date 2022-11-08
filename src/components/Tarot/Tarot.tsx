import { moneySlice, tarotSlice, TarotUpdate } from "app/slicers";
import { TarotId, tarots } from "app/tarots";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import TarotCard from "./TarotCard/TarotCard";
import styles from "../../styles/components/Tarot.module.scss";

type TarotProps = {
  title: string;
};

function Tarot(props: TarotProps) {
  const tarotDuration = 6000;
  const tarot = useSelector((state: RootState) => state.tarot);
  const [currentTarot, setCurrentTarot] = React.useState<TarotId>(0);
  const [cardFlip, setCardFlip] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const money = useSelector((state: RootState) => state.money);

  const rollNewTarot = () => {
    handleFlip(true);
    handleTarotChange(currentTarot);
    const dice = Math.floor(Math.random() * (Object.keys(tarot).length - 1) + 1);
    let currTarotId: TarotId = 0;
    if (dice == 1) {
      currTarotId = 1;
    } else if (dice == 2) {
      currTarotId = 2;
    } else if (dice == 3) {
      currTarotId = 3;
    } else if (dice == 4) {
      currTarotId = 4;
    }
    setCurrentTarot(currTarotId);
    handleTarotChange(currTarotId);
    handleCertainTarot(currTarotId);
    setTimeout(() => {
      handleTarotChange(currTarotId);
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
    switch (id) {
    case 1:
      dispatch(moneySlice.actions.add(Math.round(money * tarots[1].mod)));
      break;
    case 2:
      dispatch(moneySlice.actions.add(Math.round(money * tarots[2].mod)));
      break;
    case 3:
      break;
    case 4:
      break;
    }
  };

  return (
    <section className={styles.Tarot}>
      <h1 className={styles.Tarot__Title}>{props.title}</h1>
      <div className={styles.Tarot__Wrapper}>
        <div
          className={`flex justify-center ${styles.Tarot__Front} ${cardFlip ? styles.flip : ""}`}
          onClick={
            tarot[0]
              ? rollNewTarot
              : () => {
                /*nothing happens*/
              }
          }
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
