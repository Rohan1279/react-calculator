import React from "react";

const Body = ({
  setfirstDigit,
  setsecondDigit,
  setOperator,
  setResult,
  handleResult,
  firstDigit,
  secondDigit,
}) => {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operators = ["+", "-", "x", "/"];
  return (
    <div>
      <h2>Body</h2>
      <div>
        <div className="grid grid-cols-3 ">
          {digits.map((digit, idx) => (
            <div
              className="w-10 h-10 bg-gray-300 rounded-full cursor-pointer text-center mx-auto"
              key={idx}
              onClick={() => {
                if (!firstDigit) {
                  setfirstDigit(digit);
                  return;
                }
                if (!secondDigit) {
                  setsecondDigit(digit);
                  return;
                }
              }}
            >
              {digit}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 my-3">
          {operators.map((operator, idx) => (
            <div
              className="w-10 h-10 bg-blue-300 rounded-full cursor-pointer text-center mx-auto"
              key={idx}
              onClick={() => setOperator(operator)}
            >
              {operator}
            </div>
          ))}
          <span
            onClick={handleResult}
            className="text-2xl w-10 h-10 bg-indigo-400 cursor-pointer"
          >
            =
          </span>
          <span
            onClick={() => {
              setfirstDigit(null);
              setsecondDigit(null);
              setOperator(null);
              setResult(null);
            }}
            className="text-2xl w-10 h-10 bg-indigo-400 cursor-pointer"
          >
            C
          </span>
        </div>
      </div>
    </div>
  );
};

export default Body;
