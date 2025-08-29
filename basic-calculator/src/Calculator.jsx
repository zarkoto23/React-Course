import { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [display, setDisplay] = useState(""); 
  const [currentValue, setCurrentValue] = useState(""); 
  const [previousValue, setPreviousValue] = useState(""); 
  const [operator, setOperator] = useState(null); 
  const [justCalculated, setJustCalculated] = useState(false); // 👈 ново

  function handleNumber(number) {
    if (number === "." && currentValue.includes(".")) return;

    // ако преди това е имало равно, започваме ново уравнение
    if (justCalculated) {
      setDisplay(number);
      setCurrentValue(number);
      setJustCalculated(false);
    } else {
      const newValue = currentValue + number;
      setCurrentValue(newValue);
      setDisplay(prev => (operator ? previousValue + " " + operator + " " + newValue : newValue));
    }
  }

  function handleOperator(op) {
    if (!currentValue) return;
    setOperator(op);
    setPreviousValue(currentValue);
    setCurrentValue("");
    setDisplay(currentValue + " " + op);
    setJustCalculated(false);
  }

  function handleEquals() {
    if (!previousValue || !currentValue || !operator) return;

    const prev = parseFloat(previousValue);
    const curr = parseFloat(currentValue);
    let result;

    switch (operator) {
      case "+": result = prev + curr; break;
      case "-": result = prev - curr; break;
      case "*": result = prev * curr; break;
      case "/": result = prev / curr; break;
      default: return;
    }

    // 👇 показваме само резултата
    setDisplay(result.toString());
    setCurrentValue(result.toString());
    setPreviousValue("");
    setOperator(null);
    setJustCalculated(true); // отбелязваме, че току-що е пресметнато
  }

  function handleClear() {
    setCurrentValue("");
    setPreviousValue("");
    setOperator(null);
    setDisplay("");
    setJustCalculated(false);
  }

  return (
    <div className="calculator">
      <div className="display">{display || "0"}</div>
      <div className="buttons">
        <button className="clear" onClick={handleClear}>C</button>
        <button onClick={() => handleNumber("9")}>9</button>
        <button onClick={() => handleNumber("8")}>8</button>
        <button className="operator" onClick={() => handleOperator("/")}>/</button>
        <button onClick={() => handleNumber("7")}>7</button>

        <button onClick={() => handleNumber("6")}>6</button>
        <button onClick={() => handleNumber("5")}>5</button>
        <button className="operator" onClick={() => handleOperator("*")}>*</button>
        <button onClick={() => handleNumber("4")}>4</button>

        <button onClick={() => handleNumber("3")}>3</button>
        <button onClick={() => handleNumber("2")}>2</button>
        <button className="operator" onClick={() => handleOperator("-")}>-</button>
        <button onClick={() => handleNumber("1")}>1</button>
        <button onClick={() => handleNumber("0")}>0</button>

        <button onClick={() => handleNumber(".")}>.</button>
        <button className="operator" onClick={() => handleOperator("+")}>+</button>
        <button className="equals" onClick={handleEquals}>=</button>
      </div>
    </div>
  );
}
