import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
const GetHello = () => {
  const naam = "Lucas";
  return (
    <>
    <p>Ik <span className="name">ben </span>{naam}</p>
    </>
  )
}

const App = () => {
  const showDislikes = false;
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
  return (
  <>

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
    <GetHello />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
