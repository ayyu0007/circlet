import React from "react";
// import "./MyComponent.css";

const MyComponent = (props) => {
  return (
    <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>
  );
};

export default MyComponent;
