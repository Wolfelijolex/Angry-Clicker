import React, { useState } from "react";
import popUpStyle from "styles/components/PopUp.module.scss";

type PopUpComponentProps = {
  title: string;
};

function PopUpComponent(props: PopUpComponentProps) {
  const [show, setShow] = useState(true);

  return (
    <div className={popUpStyle.PopUpComponent_popUpAd}>
      <button className={popUpStyle.PopUpComponent_button} onClick={() => setShow(!show)}>
        ✉️😡 X
      </button>
      {!show ? null : (
        <div>
          <div className={popUpStyle.PopUpComponent_container}>
            <h1 className={popUpStyle.PopUpComponent_title}>{props.title}</h1>
            <p>Engage the Rage! Be one with the angry!</p>
            <a
              className={popUpStyle.PopUpComponent_link}
              href="https://discord.gg/2hzaK9zPxx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the angry army!
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopUpComponent;
