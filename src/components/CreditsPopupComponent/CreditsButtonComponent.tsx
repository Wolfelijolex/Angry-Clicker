import React, { useState } from "react";
import styles from "styles/components/CreditsPopUp.module.scss";
import CreditsPopUpComponent from "./CreditsPopUpComponent";

function CreditsButtonComponent() {
  const [openPopup, setOpenPopup] = useState(false);
  const [isCredits, setIsCredits] = useState(true);

  const togglePopUp = () => setOpenPopup(!openPopup);

  return (
    <div>
      <button className={styles.PopUpButton} onClick={() => togglePopUp()}>
        i
      </button>
      <CreditsPopUpComponent isCredits= {isCredits} isOpen={openPopup} onClose={togglePopUp}></CreditsPopUpComponent>
      
      <button className={styles.PopUpButton} onClick={() => togglePopUp()}>
        ⚙️
      </button>
      <CreditsPopUpComponent isCredits={isCredits} isOpen={openPopup} onClose={togglePopUp}></CreditsPopUpComponent>
    </div>
  );
}

export default CreditsButtonComponent;
