import React from "react";
import styles from "styles/components/CreditsPopUp.module.scss";

interface CreditsPopUpProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoMenu = (props: CreditsPopUpProps) => {
  const isOpen = props.isOpen;
  const onClose = props.onClose;

  if (!isOpen) {
    return null;
  } else if (isOpen) {
    return (
      <div className={styles.PopUpMenuBackground}>
        <div className={styles.PopUpMenu}>
          <div className={styles.PopUpMenuHeader}>
            <div className={styles.PopUpMenuHeader_TitleBar}> credits </div>
            <button className={styles.PopUpMenuCloseButton} onClick={() => onClose()}>
              x
            </button>
          </div>
          <div className={styles.PopUpMenuBody}>
            <div className={styles.InfoMenuName}>😡😡😡😡😡😡😡😡</div>
            <div className={styles.InfoMenuName}>Wolfgang Schwendtbauer, BSc.</div>
            <div className={styles.InfoMenuName}>Alexander Gärtner, BSc.</div>
            <div className={styles.InfoMenuName}>Johanna Krennhuber, BSc.</div>
            <div className={styles.InfoMenuName}>Felix Rader, BSc.</div>
            <div className={styles.InfoMenuName}>😡😡😡😡😡😡😡😡</div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default InfoMenu;
