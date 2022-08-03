// import "./App.css";
import { useEffect, useRef, useState } from "react";
import "./style.css";

function App() {
  const [result, setResult] = useState("0");
  const [input, setInput] = useState("0");

  // handle the input value that show on the screen
  const clickHandler = (e) => {
    const btnType = e.target.className;
    if (btnType === "btn-operator") {
      console.log(btnType, e.target.value);
      setInput(e.target.value);
    } else if (btnType === "btn-number" || btnType === "button0") {
      console.log(btnType, e.target.value);
      if (input === "0" || isNaN(Number(input))) {
        // if the screen value is 0 or non-number
        setInput(e.target.value);
      } else {
        setInput(input.concat(e.target.value)); // add number to the screen value
      }
    }
  };

  // let ref = useRef(null);

  // useEffect(() => {
  //   const button = ref.current;

  //   const handleClick = (btn) => {
  //     if (btn.className === "btn-operator") {
  //       console.log(`${btn.value} operator Click!`);
  //     } else if (btn.className === "btn-number") {
  //       console.log(`${btn.value} number Click!`);
  //     }
  //   };

  //   button.addEventListener("click", handleClick(button));

  //   return () => button.removeEventListener("click", handleClick(button));
  // }, []);

  const resetClickHandler = () => {
    setInput("0");
    setResult("0");
  };

  return (
    <div className="container">
      {/* Screen */}
      <div className="calculator dark">
        <div className="display-screen">
          <h1 id="display">{input}</h1>
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
                    // ref={ref}
                    className="btn-operator"
                    id="percent"
                    value="%"
                    onClick={clickHandler}
                  >
                    %
                  </button>
                </td>
                <td>
                  <button
                    // ref={ref}
                    className="btn-operator"
                    id="minus"
                    value="+/-"
                    onClick={clickHandler}
                  >
                    +/-
                  </button>
                </td>
                <td>
                  <button
                    // ref={ref}
                    className="btn-operator"
                    id="plus"
                    value="+"
                    onClick={clickHandler}
                  >
                    +
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    // ref={ref}
                    className="btn-number"
                    id="7"
                    value="7"
                    onClick={clickHandler}
                  >
                    7
                  </button>
                </td>
                <td>
                  <button
                    // ref={ref}
                    className="btn-number"
                    id="8"
                    value="8"
                    onClick={clickHandler}
                  >
                    8
                  </button>
                </td>
                <td>
                  <button
                    // ref={ref}
                    className="btn-number"
                    id="9"
                    value="9"
                    onClick={clickHandler}
                  >
                    9
                  </button>
                </td>
                <td>
                  <button
                    // ref={ref}
                    className="btn-operator"
                    id="minus"
                    value="-"
                    onClick={clickHandler}
                  >
                    -
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    // ref={ref}
                    className="btn-number"
                    id="4"
                    value="4"
                    onClick={clickHandler}
                  >
                    4
                  </button>
                </td>
                <td>
                  <button
                    // ref={ref}
                    className="btn-number"
                    id="5"
                    value="5"
                    onClick={clickHandler}
                  >
                    5
                  </button>
                </td>
                <td>
                  <button
                    // ref={ref}
                    className="btn-number"
                    id="6"
                    value="6"
                    onClick={clickHandler}
                  >
                    6
                  </button>
                </td>
                <td>
                  <button
                    // ref={ref}
                    className="btn-operator"
                    id="mul"
                    value="*"
                    onClick={clickHandler}
                  >
                    x
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    // ref={ref}
                    className="btn-number"
                    id="1"
                    value="1"
                    onClick={clickHandler}
                  >
                    1
                  </button>
                </td>
                <td>
                  <button
                    // ref={ref}
                    className="btn-number"
                    id="2"
                    value="2"
                    onClick={clickHandler}
                  >
                    2
                  </button>
                </td>
                <td>
                  <button
                    // ref={ref}
                    className="btn-number"
                    id="3"
                    value="3"
                    onClick={clickHandler}
                  >
                    3
                  </button>
                </td>
                <td>
                  <button
                    // ref={ref}
                    className="btn-operator"
                    id="divided"
                    value="/"
                    onClick={clickHandler}
                  >
                    ÷
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button
                    // ref={ref}
                    className="button0"
                    id="0"
                    value="0"
                    onClick={clickHandler}
                  >
                    0
                  </button>
                </td>
                <td>
                  <button
                    // ref={ref}
                    className="btn-operator"
                    id="doc"
                    value="."
                    onClick={clickHandler}
                  >
                    .
                  </button>
                </td>
                <td>
                  <button
                    // ref={ref}
                    className="btn-operator"
                    id="equal"
                    value="="
                    onClick={clickHandler}
                  >
                    =
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
