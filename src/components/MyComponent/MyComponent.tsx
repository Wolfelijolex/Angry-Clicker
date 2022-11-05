import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

type MyComponentProps = {
  title: string;
  text: string;
};

function MyComponent(props: MyComponentProps) {
  const money = useSelector((state: RootState) => state.money);

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <p>{money} angry</p>
    </div>
  );
}

export default MyComponent;
