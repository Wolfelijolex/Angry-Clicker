import React from "react";
import styles from "styles/components/CreditsPopUp.module.scss";

interface CreditsPopUpProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreditsPopUp = (props: CreditsPopUpProps) =>  {
  const isOpen = props.isOpen;
  const onClose = props.onClose;
  
  if (!isOpen) {
    return null;
  } else if (isOpen) {
    return (
      <div className={styles.creditsPopUpBackground} onClick={() => onClose()}>
        <div className={styles.creditsButtonOverLayMenu} onClick={() => isOpen}> {/* Sorry des is schwindlig*/}
          <div className={styles.TopBar}>
            <div className={styles.creditsButtonOverLayMenu__header}> credits </div>
            <button className={styles.closeButton} onClick={() => onClose()}>x</button>
          </div>
          <div className={styles.creditsButtonOverLayMenu__body}>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default CreditsPopUp;
