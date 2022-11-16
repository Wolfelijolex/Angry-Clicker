import React from "react";
import styles from "styles/components/CreditsPopUp.module.scss";

interface SettingsPopUpProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsPopUpComponent = (props: SettingsPopUpProps) => {
  const isOpen = props.isOpen;
  const onClose = props.onClose;

  if (!isOpen) {
    return null;
  } else if (isOpen) {
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
              Volume:<br></br>
              <input id="typeinp" type="range" min="0" max="100" defaultValue="30" step="1" className={styles.slider}/><br/>
              Angry Ammount:<br></br>
              <input id="typeinp" type="range" min="0" max="100" defaultValue="30" step="1"  className={styles.slider}/><br/>
              <button className={styles.saveButton} onClick={() => onClose()}>save</button>
              <button className={styles.saveButton} onClick={() => onClose()}>cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default SettingsPopUpComponent;
