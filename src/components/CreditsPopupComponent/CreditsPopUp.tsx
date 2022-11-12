import React from "react";
import styles from "styles/components/CreditsPopUp.module.scss";

interface CreditsPopUpProps {
  isOpen: boolean;
  //onClose: () => void;
}

const CreditsPopUp = (props: CreditsPopUpProps) => {
  const isOpen = props.isOpen;
  if (!isOpen) {
    return null;
  } else if (isOpen) {
    return <button className={styles.creditsPopUp}></button>;
  }
  return null;
};

export default CreditsPopUp;
