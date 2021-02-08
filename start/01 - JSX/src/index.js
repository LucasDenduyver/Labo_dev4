import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const divStyle = {
  color: 'blue',
  fontSize: 70
};

const App = () => {
  const naam = "Lucas";
  return <p style={divStyle}>Ik ben {naam}</p>;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
