import React, { useState } from "react";
import styles from "styles/components/CreditsPopUp.module.scss";
import CreditsPopUp from "./CreditsPopUpComponent";

function creditsPopupComponent() {
  const [openPopup, setOpenPopup] = useState(false);

  const togglePopUp = () => setOpenPopup(!openPopup);


  return (
    <div>
      <button className={styles.CreditsButton} onClick={() => togglePopUp()}>
        i
      </button>
      <CreditsPopUp isOpen={openPopup} onClose={togglePopUp}></CreditsPopUp>
    </div>
  );
}

export default creditsPopupComponent;
