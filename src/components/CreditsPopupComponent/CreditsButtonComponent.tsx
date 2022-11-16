import React, { useState } from "react";
import styles from "styles/components/CreditsPopUp.module.scss";
import CreditsPopUpComponent from "./CreditsPopupComponent";
import SettingsButtonComponent from "./SettingsButtonComponent";

function CreditsButtonComponent() {
  const [openCreditsPopup, setCreditsOpenPopup] = useState(false);
  const toggleCreditsPopUp = () => setCreditsOpenPopup(!openCreditsPopup);

  const [openSettingsPopup, setSettingsOpenPopup] = useState(false);
  const toggleSettingsPopUp = () => setSettingsOpenPopup(!openSettingsPopup);

  return (
    <div>
      <button className={styles.PopUpButton} onClick={() => toggleCreditsPopUp()}>
        i
      </button>
      <CreditsPopUpComponent isOpen={openCreditsPopup} onClose={toggleCreditsPopUp}></CreditsPopUpComponent>
      
      <button className={styles.PopUpButton} onClick={() => toggleSettingsPopUp()}>
        ⚙️
      </button>
      <SettingsButtonComponent isOpen={openSettingsPopup} onClose={toggleSettingsPopUp}></SettingsButtonComponent>
    </div>
  );
}

export default CreditsButtonComponent;
