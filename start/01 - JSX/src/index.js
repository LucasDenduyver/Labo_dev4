import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
const showDislikes = false;

const divStyle = {
  color: 'blue',
  fontSize: 70
};

const App = () => {
  const favFood = [
    "pasta bolognese",
    "pizza",
    "chinees"
  ];
  const badFood = [
    "spruiten sws",
    "schorseneren",
    "rode kool",
    "risotto",
    "koolsla",
    "te droog vlees",
    "ebde nog efkes?"
  ];
  const naam = "Lucas";
  return (
  <>
  <p style={divStyle}>Ik <span className="name">ben </span>{naam}</p>

  {showDislikes ?
    <ul>
      {favFood.map(item =><li key={item}> {item} </li>)}
    </ul>
    :
    <ul>
      {badFood.map(item =><li key={item}> {item} </li>)}
  </ul>
  }
  </>);
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
