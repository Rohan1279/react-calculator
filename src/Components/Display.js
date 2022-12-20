import React from "react";

const Display = ({ firstDigit, secondDigit, operator, result }) => {
  return (
    <div className="w-full h-20 bg-blue-300 w">
      <span className="mr-3 text-2xl">{firstDigit}</span>
      <span className="mr-3 text-2xl">{operator}</span>
      <span className="mr-3 text-2xl my-4">{secondDigit}</span>
      <span className="mr-3 text-2xl my-4">=</span>
      <span className="mr-3 text-2xl my-4">{result}</span>
    </div>
  );
};

export default Display;
