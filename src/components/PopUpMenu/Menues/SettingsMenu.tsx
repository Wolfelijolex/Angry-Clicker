import React from "react";
import styles from "styles/components/CreditsPopUp.module.scss";

interface InfoMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoMenu = (props: InfoMenuProps) => {
  const isOpen = props.isOpen;
  const onClose = props.onClose;

  if (!isOpen) {
    return null;
  } else if (isOpen) {
    return (
      <div className={styles.PopUpMenuBackground}>
        <div className={styles.PopUpMenu}>
          <div className={styles.PopUpMenuHeader}>
            <div className={styles.PopUpMenuHeader_TitleBar}> settings </div>
            <button className={styles.PopUpMenuCloseButton} onClick={() => onClose()}>
              x
            </button>
          </div>
          <div className={styles.PopUpMenuBody}>
            <div>
              Volume:<br></br>
              <input id="typeinp" type="range" min="0" max="100" defaultValue="30" step="1" className={styles.SettingsMenuSlider}/><br/>
              Angry Ammount:<br></br>
              <input id="typeinp" type="range" min="0" max="100" defaultValue="30" step="1"  className={styles.SettingsMenuSlider}/><br/>
              <button className={styles.SettingsMenuSaveButton} onClick={() => onClose()}>save</button>
              <button className={styles.SettingsMenuSaveButton} onClick={() => onClose()}>cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default InfoMenu;
