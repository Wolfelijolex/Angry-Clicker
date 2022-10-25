import React from "react";
import logo from "../../assets/angryScaled.png";
import "../../styles/pages/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Become angry</p>
        <a
          className="App-link"
          href="https://discord.gg/2hzaK9zPxx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the angry!
        </a>
      </header>
    </div>
  );
}

export default App;
