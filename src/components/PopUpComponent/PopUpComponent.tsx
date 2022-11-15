import React from "react";
import popUpStyle from "../../styles/components/PopUp.module.scss";

type PopUpComponentProps = {
  title: string;
};

//UWU

function PopUpComponent(props: PopUpComponentProps) {
  const [show, setShow] = React.useState(true);

  return (
    <div className={popUpStyle.popUpAd}>
      <button className={popUpStyle.App_button} onClick={() => setShow(!show)}>
        ✉️😡 X
      </button>
      {show ? (
        <div>
          <div className={popUpStyle.container}>
            <h1 className={popUpStyle.title}>{props.title}</h1>
            <p>Engage the Rage! Be one with the angry!</p>
            <a
              className={popUpStyle.App_link}
              href="https://discord.gg/2hzaK9zPxx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the angry army!
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default PopUpComponent;
