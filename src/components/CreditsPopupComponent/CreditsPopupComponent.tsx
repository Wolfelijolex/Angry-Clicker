import React, { useState } from "react";
import styles from "styles/components/CreditsPopUp.module.scss";
import CreditsPopUp from "./CreditsPopUp";

let settings = false;

function creditsButtonClick() {
  settings = true;
  alert(settings);
}
function settingsButtonClick() {
  settings = false;

  alert(
    "Congratulations! You won a free iPhone 12 Pro Max! Please send your address to the following email: angry.advertisment@gmail.com. For shipping we will need your credit card number, expiration date, and security code."
  );
}

function creditsPopupComponent() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div>
      <button className={styles.CreditsButton} onClick={creditsButtonClick}>
        i
      </button>
      <CreditsPopUp isOpen={openPopup}></CreditsPopUp>

      {/* <button className={styles.CreditsButton} onClick={settingsButtonClick}>⚙️</button> */}
    </div>
  );
}

export default creditsPopupComponent;
