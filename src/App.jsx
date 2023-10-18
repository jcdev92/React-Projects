import { useState } from "react";
import "./App.css";
import Circle from "./assets/components/Circle";
import Multilamps from "./assets/components/Multilamps";

function App() {
  const [onOff, setCount] = useState("off");

  const toggleOffOn = () => {
    if (onOff === "off") {
      setCount("on");
    } else {
      setCount("off");
    }
  };

  return (
    <>
    <div className="App">
      <Circle toggleOffOn={toggleOffOn} onOff={onOff}/>
    </div>
    <div className="Multilamps">
      <Multilamps />
      <Multilamps />
      <Multilamps />
    </div>
    </>
  );
}

export default App;
