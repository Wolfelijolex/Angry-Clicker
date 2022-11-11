import React from "react";
import styles from "styles/components/CreditsPopUp.module.scss";

function creditsButtonClick() {
  alert("credits");
}
function settingsButtonClick() {
  alert("Congratulations! You won a free iPhone 12 Pro Max! Please send your address to the following email: angry.advertisment@gmail.com. For shipping we will need your credit card number, expiration date, and security code.");
}

function creditsPopupComponent() {
  return (
    <div>
      <button className={styles.CreditsButton} onClick={settingsButtonClick}>⚙️</button>
      <button className={styles.CreditsButton} onClick={creditsButtonClick}>i</button>
    </div>
  );
}

export default creditsPopupComponent;
