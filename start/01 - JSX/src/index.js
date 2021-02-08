import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const divStyle = {
  color: 'blue',
  fontSize: 70
};

const App = () => {
  const list = [
    "pasta bolognese",
    "pizza",
    "chinees"
  ];
  const naam = "Lucas";
  return (
  <>
  <p style={divStyle}>Ik <span className="name">ben </span>{naam}</p>
  <ul>{list.map(item =>
    <li key={item}> {item} </li>)}
  </ul>
  </>);
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
