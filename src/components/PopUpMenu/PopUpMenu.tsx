import React, { useState } from "react";
import styles from "styles/components/CreditsPopUp.module.scss";
import InfoMenu from "./Menues/InfoMenu";
import SettingsMenu from "./Menues/SettingsMenu";

function PopUpMenu() {
  const [openInfoMenu, setToggleInfoMenu] = useState(false);
  const toggleInfoMenu = () => setToggleInfoMenu(!openInfoMenu);

  const [openSettingsMenu, setSettingsMenu] = useState(false);
  const toggleSettingsMenu = () => setSettingsMenu(!openSettingsMenu);

  return (
    <div>
      <button className={styles.PopUpMenuButton} onClick={() => toggleInfoMenu()}>
        i
      </button>
      <InfoMenu isOpen={openInfoMenu} onClose={toggleInfoMenu}></InfoMenu>

      <button className={styles.PopUpMenuButton} onClick={() => toggleSettingsMenu()}>
        ⚙️
      </button>
      <SettingsMenu isOpen={openSettingsMenu} onClose={toggleSettingsMenu}></SettingsMenu>
    </div>
  );
}

export default PopUpMenu;
