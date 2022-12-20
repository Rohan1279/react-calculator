import logo from "./logo.svg";
import "./App.css";
import Body from "./Components/Body";
import Display from "./Components/Display";
import { useState } from "react";

function App() {
  const [firstDigit, setfirstDigit] = useState(null);
  const [secondDigit, setsecondDigit] = useState(null);
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(0);
  const handleResult = () => {
    console.log("get result");
    let rslt = 0;
    if (operator === "+") {
      rslt = firstDigit + secondDigit;
    } else if (operator === "-") {
      rslt = firstDigit - secondDigit;
    } else if (operator === "x") {
      rslt = firstDigit * secondDigit;
    }
    else if(operator === "/")
    {
      rslt = firstDigit / secondDigit;
      
    }
    setResult(rslt);
   
  };
  return (
    <div className="App w-80 h-96 bg-red-200 mx-auto my-40">
      <h3>React Calculator</h3>
      <Display
        firstDigit={firstDigit}
        secondDigit={secondDigit}
        operator={operator}
        result={result}
      />
      <Body
        firstDigit={firstDigit}
        secondDigit={secondDigit}
        setfirstDigit={setfirstDigit}
        setsecondDigit={setsecondDigit}
        setOperator={setOperator}
        setResult={setResult}
        handleResult={handleResult}
      />
    </div>
  );
}

export default App;
