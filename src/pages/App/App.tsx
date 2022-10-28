import React from "react";
import logo from "../../assets/angryScaled.png";
import "../../styles/pages/App.css";
import MyComponent from "../../components/MyComponent/MyComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { moneySlice } from "../../app/slicers";

function App() {
  const money = useSelector((state: RootState) => state.money);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Become angry</p>
        <a className="App-link" href="https://discord.gg/2hzaK9zPxx" target="_blank" rel="noopener noreferrer">
          Join the angry!
        </a>
        <MyComponent title="Title of MyComponent" text="Text of MyComponent"></MyComponent>
        <button onClick={() => dispatch(moneySlice.actions.add(1))}>
          Click me to get Money! you have {money} coins
        </button>
      </header>
    </div>
  );
}

export default App;
