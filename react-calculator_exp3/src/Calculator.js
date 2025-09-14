import React, { useState } from "react";

function formatNumber(value) {
  if (value == null || value === "") return "0";
  const [int, frac] = String(value).split(".");
  const intFmt = Number(int).toLocaleString("en-US");
  return frac != null ? `${intFmt}.${frac}` : intFmt;
}

export default function Calculator() {
  const [current, setCurrent] = useState("0");
  const [prev, setPrev] = useState(null);
  const [op, setOp] = useState(null);
  const [overwrite, setOverwrite] = useState(false);

  const inputDigit = (d) => {
    setCurrent((c) => {
      if (overwrite) {
        setOverwrite(false);
        return d;
      }
      if (c === "0") return d;
      return c + d;
    });
  };

  const inputDot = () => {
    setCurrent((c) => {
      if (overwrite) {
        setOverwrite(false);
        return "0.";
      }
      if (c.includes(".")) return c;
      return c + ".";
    });
  };

  const clearAll = () => {
    setCurrent("0");
    setPrev(null);
    setOp(null);
    setOverwrite(false);
  };

  const deleteOne = () => {
    setCurrent((c) => (overwrite ? "0" : c.length > 1 ? c.slice(0, -1) : "0"));
    setOverwrite(false);
  };

  const toggleSign = () => {
    setCurrent((c) => (c.startsWith("-") ? c.slice(1) : c === "0" ? "0" : "-" + c));
  };

  const percent = () => {
    setCurrent((c) => String(parseFloat(c || "0") / 100));
  };

  const chooseOp = (nextOp) => {
    if (op && !overwrite) {
      const result = compute(prev, current, op);
      setPrev(result);
      setCurrent(String(result));
      setOverwrite(true);
      setOp(nextOp);
      return;
    }
    setPrev(current);
    setOp(nextOp);
    setOverwrite(true);
  };

  const equals = () => {
    if (op == null || prev == null) return;
    const result = compute(prev, current, op);
    setCurrent(String(result));
    setPrev(null);
    setOp(null);
    setOverwrite(true);
  };

  return (
    <div className="calc-wrap">
      <div className="display">
        <div className="mini">
          {prev && formatNumber(prev)} {op || ""}
        </div>
        <div className="main">{formatNumber(current)}</div>
      </div>

      <div className="grid">
        <button className="btn utility" onClick={clearAll}>AC</button>
        <button className="btn utility" onClick={deleteOne}>DEL</button>
        <button className="btn utility" onClick={percent}>%</button>
        <button className="btn op" onClick={() => chooseOp("÷")}>÷</button>

        <button className="btn" onClick={() => inputDigit("7")}>7</button>
        <button className="btn" onClick={() => inputDigit("8")}>8</button>
        <button className="btn" onClick={() => inputDigit("9")}>9</button>
        <button className="btn op" onClick={() => chooseOp("×")}>×</button>

        <button className="btn" onClick={() => inputDigit("4")}>4</button>
        <button className="btn" onClick={() => inputDigit("5")}>5</button>
        <button className="btn" onClick={() => inputDigit("6")}>6</button>
        <button className="btn op" onClick={() => chooseOp("−")}>−</button>

        <button className="btn" onClick={() => inputDigit("1")}>1</button>
        <button className="btn" onClick={() => inputDigit("2")}>2</button>
        <button className="btn" onClick={() => inputDigit("3")}>3</button>
        <button className="btn op" onClick={() => chooseOp("+")}>+</button>

        <button className="btn utility" onClick={toggleSign}>±</button>
        <button className="btn" onClick={() => inputDigit("0")}>0</button>
        <button className="btn" onClick={inputDot}>.</button>
        <button className="btn equals" onClick={equals}>=</button>
      </div>
    </div>
  );
}

function compute(aStr, bStr, operator) {
  const a = parseFloat(aStr);
  const b = parseFloat(bStr);
  if (Number.isNaN(a) || Number.isNaN(b)) return "0";
  switch (operator) {
    case "+":
      return round(a + b);
    case "−":
      return round(a - b);
    case "×":
      return round(a * b);
    case "÷":
      if (b === 0) return "∞";
      return round(a / b);
    default:
      return bStr;
  }
}

function round(num) {
  return Math.round((num + Number.EPSILON) * 1e10) / 1e10;
}