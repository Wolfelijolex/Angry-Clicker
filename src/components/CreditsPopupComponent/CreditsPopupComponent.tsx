import React, { useState } from "react";
import styles from "styles/components/CreditsPopUp.module.scss";
import CreditsPopUp from "./CreditsPopUp";

function creditsPopupComponent() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div>
      <button className={styles.CreditsButton} onClick={() => setOpenPopup(true)}>
        i
      </button>
      <CreditsPopUp isOpen={openPopup}></CreditsPopUp>

      {/* <button className={styles.CreditsButton} onClick={settingsButtonClick}>⚙️</button> */}
    </div>
  );
}

export default creditsPopupComponent;
