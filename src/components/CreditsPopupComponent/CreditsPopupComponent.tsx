import React from "react";
import styles from "styles/components/CreditsPopUp.module.scss";

interface CreditsPopUpProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreditsPopUpComponent = (props: CreditsPopUpProps) =>  {
  const isOpen = props.isOpen;
  const onClose = props.onClose;

  if (!isOpen) {
    return null;
  } else if (isOpen) {
    return (
      <div className={styles.BehindPopUpBackground}>
        <div className={styles.PopUpButtonOverlayMenu}>
          <div className={styles.PopUpTopBar}>
            <div className={styles.PopUpButtonOverlayMenu__header}> credits </div>
            <button className={styles.PopUpCloseButton} onClick={() => onClose()}>x</button>
          </div>
          <div className={styles.creditsButtonOverLayMenu__body}>
            <div className={styles.CreditsName}>😡😡😡😡😡😡😡😡</div>
            <div className={styles.CreditsName}>Wolfgang Schwendtbauer, BSc.</div>
            <div className={styles.CreditsName}>Alexander Gärtner, BSc.</div>
            <div className={styles.CreditsName}>Johanna Krennhuber, BSc.</div>
            <div className={styles.CreditsName}>Felix Rader, BSc.</div>
            <div className={styles.CreditsName}>😡😡😡😡😡😡😡😡</div>
          </div>
        </div>

      </div>
    );
  }
  return null;
};

export default CreditsPopUpComponent;
