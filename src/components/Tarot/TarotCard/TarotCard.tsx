import React from "react";
import { TarotId } from "app/tarots";
import { tarots } from "app/tarots";
import styles from "styles/components/TarotCard.module.scss";

type TarotCardProps = {
  id: TarotId;
  back?: boolean;
};

function TarotCard(props: TarotCardProps) {
  const back = props.back ? true : false;
  const tarot = !back ? tarots[props.id] : tarots[0];

  return (
    <>
      {back ? (
        <section className={`${styles.tarotCard} ${styles.tarotCard__back}`}>
          <img src={tarot.img} className={`${styles.tarotCard__Image} ${styles.tarotCard__Image__back}`} />
        </section>
      ) : (
        <section className={styles.tarotCard}>
          <div className={styles.tarotCard__ImageWrapper}>
            <img src={tarot.img} className={styles.tarotCard__Image} />
          </div>
          <h2 className={styles.tarotCard__Name}>{tarot.name} </h2>
          <p className={styles.tarotCard__Desc}> {tarot.desc}</p>
        </section>
      )}
    </>
  );
}

export default TarotCard;
