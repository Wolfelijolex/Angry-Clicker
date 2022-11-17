import React from "react";
import styles from "styles/components/CreditsPopUp.module.scss";

interface InfoMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoMenu = (props: InfoMenuProps) => {
  const { isOpen, onClose } = props;

  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.PopUpMenuBackground}>
      <div className={styles.PopUpMenu}>
        <div className={styles.PopUpMenuHeader}>
          <div className={styles.PopUpMenuHeader_TitleBar}>settings</div>
          <button className={styles.PopUpMenuCloseButton} onClick={() => onClose()}>x</button>
        </div>

        <div className={styles.PopUpMenuBody}>
          <div>
            <label htmlFor="input-volume" className="text-black">Volume:</label>
            <input id="input-volume" type="range" min="0" max="100" defaultValue="30" step="1" className={styles.SettingsMenuSlider} />

            <label htmlFor="input-angryAmount" className="text-black">Angry Amount:</label>
            <input id="input-angryAmount" type="range" min="0" max="100" defaultValue="30" step="1" className={styles.SettingsMenuSlider} />

            <button className={styles.SettingsMenuSaveButton} onClick={() => onClose()}>save</button>
            <button className={styles.SettingsMenuSaveButton} onClick={() => onClose()}>cancel</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InfoMenu;
