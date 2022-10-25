import React from "react";

type MyComponentProps = {
  title: string;
  text: string;
};

function MyComponent(props: MyComponentProps) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
}

export default MyComponent;
