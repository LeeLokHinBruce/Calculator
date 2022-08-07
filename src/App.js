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
                    id="minus"
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
      <div>
        <h1>Teammate: Bruce, Ari, Double</h1>
      </div>
    </div>
  );
}

export default App;
