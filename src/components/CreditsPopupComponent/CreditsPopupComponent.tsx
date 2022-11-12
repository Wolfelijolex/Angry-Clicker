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
      <div className={styles.creditsPopUpBackground}>
        <div className={styles.creditsButtonOverLayMenu}>
          <div className={styles.TopBar}>
            <div className={styles.creditsButtonOverLayMenu__header}> credits </div>
            <button className={styles.closeButton} onClick={() => onClose()}>x</button>
            
          </div>
          <div className={styles.creditsButtonOverLayMenu__body}>
            <div className={styles.name}>😡😡😡😡😡😡😡😡</div>
            <div className={styles.name}>Wolfgang Schwendtbauer, BSc.</div>
            <div className={styles.name}>Alexander Gärtner, BSc.</div>
            <div className={styles.name}>Johanna Krennhuber, BSc.</div>
            <div className={styles.name}>Felix Rader, BSc.</div>
            <div className={styles.name}>😡😡😡😡😡😡😡😡</div>
          </div>
        </div>
        
      </div>
    );
  }
  return null;
};

export default CreditsPopUpComponent;
