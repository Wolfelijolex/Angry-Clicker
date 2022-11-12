import React from "react";
import styles from "styles/components/CreditsPopUp.module.scss";

interface CreditsPopUpProps {
  isOpen: boolean;
  //onClose: () => void;
}

const CreditsPopUp = (props: CreditsPopUpProps) => {
  const isOpen = props.isOpen;
  if (!isOpen) {
    return null;
  } else if (isOpen) {
    return (
      <div className={styles.creditsPopUpBackground} onClick={() => isOpen}>
        <div className={styles.creditsButtonOverLayMenu}>
          <div className={styles.TopBar}>
            <div className={styles.creditsButtonOverLayMenu__header}> Credits </div>
            <button className={styles.closeButton}>x</button>
          </div>
          <div className={styles.creditsButtonOverLayMenu__body}>
            <div>
              <p>Hello</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default CreditsPopUp;
