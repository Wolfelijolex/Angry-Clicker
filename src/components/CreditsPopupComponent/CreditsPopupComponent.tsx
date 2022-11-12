import React, { useState } from "react";
import styles from "styles/components/CreditsPopUp.module.scss";
import CreditsPopUp from "./CreditsPopUp";

function creditsPopupComponent() {
  const [openPopup, setOpenPopup] = useState(false);

  const togglePopUp = () => setOpenPopup(!openPopup);


  return (
    <div>
      <button className={styles.CreditsButton} onClick={() => togglePopUp()}>
        i
      </button>
      <CreditsPopUp isOpen={openPopup} onClose={togglePopUp}></CreditsPopUp>

      {/* <button className={styles.CreditsButton} onClick={settingsButtonClick}>⚙️</button> */}
    </div>
  );
}

export default creditsPopupComponent;
