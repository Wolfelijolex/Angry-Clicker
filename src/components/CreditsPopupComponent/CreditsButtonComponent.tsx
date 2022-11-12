import React, { useState } from "react";
import styles from "styles/components/CreditsPopUp.module.scss";
import CreditsPopUpComponent from "./CreditsPopUpComponent";

function CreditsButtonComponent() {
  const [openPopup, setOpenPopup] = useState(false);

  const togglePopUp = () => setOpenPopup(!openPopup);


  return (
    <div>
      <button className={styles.CreditsButton} onClick={() => togglePopUp()}>
        i
      </button>
      <CreditsPopUpComponent isOpen={openPopup} onClose={togglePopUp}></CreditsPopUpComponent>
    </div>
  );
}

export default CreditsButtonComponent;
