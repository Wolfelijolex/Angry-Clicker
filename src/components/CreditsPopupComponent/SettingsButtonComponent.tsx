import React from "react";
import styles from "styles/components/CreditsPopUp.module.scss";

interface SettingsPopUpProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsPopUpComponent = (props: SettingsPopUpProps) => {
  const { isOpen, onClose } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.BehindPopUpBackground}>
      <div className={styles.PopUpButtonOverlayMenu}>
        <div className={styles.PopUpTopBar}>
          <div className={styles.PopUpButtonOverlayMenu__header}> settings </div>
          <button className={styles.PopUpCloseButton} onClick={() => onClose()}>
            x
          </button>
        </div>
        <div className={styles.creditsButtonOverLayMenu__body}>
          <div>
            Volume:
            <br />
            <input id="typeinp" type="range" min="0" max="100" defaultValue="30" step="1" className={styles.slider} />
            <br />
            Angry Ammount:
            <br />
            <input id="typeinp" type="range" min="0" max="100" defaultValue="30" step="1" className={styles.slider} />
            <br />
            <button className={styles.saveButton} onClick={() => onClose()}>
              save
            </button>
            <button className={styles.saveButton} onClick={() => onClose()}>
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPopUpComponent;
