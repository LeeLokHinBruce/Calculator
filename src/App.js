// import { useEffect, useInsertionEffect, useRef, useState } from "react";

import "./style.css";
import { useEffect, useState } from "react";
import NumberFormat from "react-number-format";

function App() {
  const [preState, setPreState] = useState(""); // previous value
  const [curState, setCurState] = useState(""); // current value
  const [input, setInput] = useState("0"); // input value
  const [operator, setOperator] = useState(null); // operation + - * /
  const [total, setTotal] = useState(false); // the boolean of total value, the total will set to True after clicked =

  useEffect(() => {
    setInput(curState);
  }, [curState]);

/*
  const [oldInput, setOldInput] = useState("");
  const [result, setResult] = useState(0);
  const [input, setInput] = useState(0);
  const [sign, setSign] = useState(""); // operation + - * /
  const [preSign, setPreSign] = useState(""); // store for check what operator is executed when clicked =

  // handle the input value that show on the screen
  const clickHandler = (e) => {
    // e.preventDefault();
    const btnType = e.target.className;
    const value = e.target.value;

    if (btnType === "btn-operator") {
      console.log(btnType, e.target.value);
      Operation(e.target.value);
      // setInput(e.target.value);
    } else if (btnType === "btn-number" || btnType === "button0") {
      console.log(btnType, e.target.value);
      if (input === "0" || isNaN(Number(input))) {
        // if the screen value is 0 or non-number
        setInput(e.target.value);
        // console.log(e.target.value)
      } else {
        setInput(input.concat(e.target.value)); // add number to the screen value
        // console.log(input)
      }
    }
  };



  const [addition, setAddition] = useState(false);
  const [subtraction, setSubtraction] = useState(false);
  const [multiplication, setMultiplication] = useState(false);
  const [division, setDivision] = useState(false);
  const [choose, setChoose] = useState("");


  function Operation(symbol) {
    if(symbol == "*" && oldInput != ""){
      setInput(Number(result));
      setMultiplication(true);
      // setInput("");
      console.log(input)
    }

    if (choose == "") {
      setChoose(symbol);
    } else if (choose != symbol) {
      setChoose(symbol);
    }
    if (symbol == "+" && addition) {
      setResult(Number(result) + Number(input));
      setInput("");
    } else if (symbol == "-" && subtraction) {
      setResult(Number(result) - Number(input));
      setInput("");
    } else if (symbol == "*" && multiplication) {
      setResult(Number(input) * Number(result));
      setInput("");
    } else if (symbol == "/" && division) {
      setResult(Number(input) / Number(result));
      setInput("");
    }

    if (symbol == "=") {
      if (addition) {
        setResult(Number(result) + Number(input));
        setAddition(false);
      } else if (subtraction) {
        setResult(Number(result) - Number(input));
        setSubtraction(false);
      } else if (multiplication) {
        setResult(Number(input) * Number(result));
        setMultiplication(false);
        console.log(result)
        setOldInput(result);
      } else if (division) {
        setResult(Number(result) / Number(input));
        setDivision(false);
      }
      setInput("");
    }

    if (symbol == "+" && !addition) {
      setAddition(true);
      setResult(Number(input));
      setInput("");
    } else if (symbol == "-" && !subtraction) {
      setSubtraction(true);
      setResult(Number(input));
      setInput("");
    } else if (symbol == "*" && !multiplication) {
      setMultiplication(true);
      setResult(Number(input));
      setInput("");
    } else if (symbol == "/" && !division) {
      setDivision(true);
      setResult(Number(input));
      setInput("");
    }


  }
  // let ref = useRef(null);
*/

  useEffect(() => {
    setInput("0");
  }, []);

  // handle the input value that show on the screen
  const inputNum = (e) => {
    if (curState.includes(".") && e.target.value === ".") return;

    // calculate new formular
    if (total) {
      setPreState("");
    }

    if (curState !== "0") {
      setCurState((prev) => prev + e.target.value);
    } else {
      e.target.value === "."
        ? setCurState((prev) => prev + e.target.value) // 0.
        : setCurState(e.target.value);
    }
  };

  // set operator
  const operatorClickHandler = (e) => {
    setTotal(false);
    setOperator(e.target.value);
    if (curState === "") return; // require enter number before opertor
    if (preState !== "") {
      // won't execute with clicked first operator
      euqalClickHanlder(e);
      calculator();
    } else {
      setPreState(curState);
      setCurState("");
    }
  };

  // operator + - * /
  const calculator = () => {
    let calc;
    switch (operator) {
      case "+":
        calc = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "-":
        calc = String(parseFloat(preState) - parseFloat(curState));
        break;
      case "*":
        calc = String(parseFloat(preState) * parseFloat(curState));
        break;
      case "/":
        calc = String(parseFloat(preState) / parseFloat(curState));
        break;
      default:
        return;
    }
    setInput("");
    setPreState(calc);
    setCurState("");
  };

  // =
  const euqalClickHanlder = (e) => {
    if (e.target.value === "=") {
      setTotal(true);
    }
  };

  // invert to + or -
  const invertClickHandler = () => {
    if (curState === "0") return;

    if (curState === "") {
      preState.charAt(0) === "-"
        ? setPreState(preState.substring(1))
        : setPreState("-" + preState);
    } else {
      curState.charAt(0) === "-"
        ? setCurState(curState.substring(1))
        : setCurState("-" + curState);
    }
  };

  // %
  const percentClickHandler = () => {
    if (!preState && !curState) return;
    if (curState) {
      setCurState(String(parseFloat(curState) / 100));
    } else {
      setPreState(String(parseFloat(preState) / 100));
    }
  };

  // clear all values
  const resetClickHandler = () => {
    setPreState("");
    setCurState("0");
    setInput("0");
    setOperator(null);
    setTotal(false);
    
/*
    setInput("0");
    setResult("0");
    setOldInput("0");
    setAddition(false);
    setSubtraction(false);
    setMultiplication(false);
    setDivision(false);
    setSign("");
*/
  };

  return (
    <div className="container">
      {/* Screen */}
      <div className="calculator dark">
        <div className="display-screen">
          <h1 id="display">
            {input !== "" || input === "0" ? (
              <NumberFormat
                value={input}
                displayType={"text"}
                thousandSeparator={true}
              />
            ) : (
              <NumberFormat
                value={preState}
                displayType={"text"}
                thousandSeparator={true}
              />
            )}
          </h1>

/*
          <h3 id="display">{input || result}</h3>
          {/* <h1 id="display">{sign ? result : input}</h1> */}
          {console.log("input", input)}
          {console.log("result", result)}
          */
          
        </div>
        {/* Buttons Box */}
        <div className="buttons">
          <table>
            <tbody>
              <tr>
                <td>
                  <button
                    className="buttonClear"
                    id="ac"
                    onClick={resetClickHandler}
                  >
                    AC
                  </button>
                </td>
                <td>
                  <button
                    className="btn-operator"
                    id="percent"
                    value="%"
                    onClick={percentClickHandler}
                  >
                    %
                  </button>
                </td>
                <td>
                  <button
                    className="btn-operator"
                    id="minus"
                    value="+/-"
                    onClick={invertClickHandler}
                  >
                    +/-
                  </button>
                </td>
                <td>
                  <button
                    className="btn-operator"
                    id="plus"
                    value="+"
                    onClick={operatorClickHandler}
                  >
                    +
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="btn-number"
                    id="7"
                    value={7}
                    onClick={inputNum}
                  >
                    7
                  </button>
                </td>
                <td>
                  <button
                    className="btn-number"
                    id="8"
                    value={8}
                    onClick={inputNum}
                  >
                    8
                  </button>
                </td>
                <td>
                  <button
                    className="btn-number"
                    id="9"
                    value={9}
                    onClick={inputNum}
                  >
                    9
                  </button>
                </td>
                <td>
                  <button
                    className="btn-operator"
                    id="minus2"
                    value="-"
                    onClick={operatorClickHandler}
                  >
                    -
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="btn-number"
                    id="4"
                    value={4}
                    onClick={inputNum}
                  >
                    4
                  </button>
                </td>
                <td>
                  <button
                    className="btn-number"
                    id="5"
                    value={5}
                    onClick={inputNum}
                  >
                    5
                  </button>
                </td>
                <td>
                  <button
                    className="btn-number"
                    id="6"
                    value={6}
                    onClick={inputNum}
                  >
                    6
                  </button>
                </td>
                <td>
                  <button
                    className="btn-operator"
                    id="mul"
                    value="*"
                    onClick={operatorClickHandler}
                  >
                    x
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="btn-number"
                    id="1"
                    value={1}
                    onClick={inputNum}
                  >
                    1
                  </button>
                </td>
                <td>
                  <button
                    className="btn-number"
                    id="2"
                    value={2}
                    onClick={inputNum}
                  >
                    2
                  </button>
                </td>
                <td>
                  <button
                    className="btn-number"
                    id="3"
                    value={3}
                    onClick={inputNum}
                  >
                    3
                  </button>
                </td>
                <td>
                  <button
                    className="btn-operator"
                    id="divided"
                    value="/"
                    onClick={operatorClickHandler}
                  >
                    ÷
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button
                    className="button0"
                    id="0"
                    value={0}
                    onClick={inputNum}
                  >
                    0
                  </button>
                </td>
                <td>
                  <button
                    className="btn-operator"
                    id="doc"
                    value="."
                    onClick={inputNum}
                  >
                    .
                  </button>
                </td>
                <td>
                  <button
                    className="btn-operator"
                    id="equal"
                    value="="
                    onClick={operatorClickHandler}
                  >
                    =
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <footer>Teammate: Bruce, Ari, Double</footer>
    </div>
  );
}

export default App;
