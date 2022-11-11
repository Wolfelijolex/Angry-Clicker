import React from "react";
import styles from "styles/components/CreditsPopUp.module.scss";



function creditsPopupComponent() {
  return (
    <div>
        <button className={styles.CreditsButton}>⚙️</button>
        <button className={styles.CreditsButton}>ℹ️</button>
    </div>
  );
}

export default creditsPopupComponent;
