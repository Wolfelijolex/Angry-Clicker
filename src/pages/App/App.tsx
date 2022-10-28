import React from "react";
import logo from "../../assets/angryScaled.png";
import "../../styles/pages/App.scss";
import MyComponent from "../../components/MyComponent/MyComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Become angry</p>
        <a className="App-link" href="https://discord.gg/2hzaK9zPxx" target="_blank" rel="noopener noreferrer">
          Join the angry!
        </a>
        <MyComponent title="Title of MyComponent" text="Text of MyComponent"></MyComponent>
      </header>
    </div>
  );
}

export default App;
