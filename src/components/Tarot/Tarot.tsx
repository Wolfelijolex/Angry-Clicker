import { tarotSlice, TarotUpdate } from "app/slicers";
import { TarotId } from "app/tarots";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import TarotCard from "./TarotCard/TarotCard";
import styles from "../../styles/components/Tarot.module.scss";

type TarotProps = {
  title: string;
};

function Tarot(props: TarotProps) {
  const tarotDuration = 5000;
  const tarot = useSelector((state: RootState) => state.tarot);
  const [currentTarot, setCurrentTarot] = React.useState<TarotId>(0);
  const dispatch = useDispatch();

  const [cardFlip, setCardFlip] = React.useState<boolean>(false);

  const rollNewTarot = () => {
    handleFlip(true);
    handleTarotChange(currentTarot);
    const dice = Math.floor(Math.random() * 3 + 1);
    let currTarotId: TarotId = 0;
    if (dice == 1) {
      setCurrentTarot(1);
      handleTarotChange(currentTarot);
      currTarotId = 1;
    } else if (dice == 2) {
      setCurrentTarot(2);
      handleTarotChange(currentTarot);
      currTarotId = 2;
    } else if (dice == 3) {
      setCurrentTarot(3);
      handleTarotChange(currentTarot);
      currTarotId = 3;
    }
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

  const handleNope = () => {
    //da empty? :0
  };

  const handleFlip = (set: boolean) => {
    setCardFlip(set);
  };

  return (
    <section className={styles.Tarot}>
      <h1 className={styles.Tarot__Title}>{props.title}</h1>
      <div className={styles.Tarot__Wrapper}>
        <div
          className={`flex justify-center ${styles.Tarot__Front} ${cardFlip ? styles.flip : ""}`}
          onClick={tarot[0] ? rollNewTarot : handleNope}
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
