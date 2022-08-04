// import "./App.css";
import { useEffect, useInsertionEffect, useRef, useState } from "react";
// import { useState } from "react";
import "./style.css";


function App() {
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
        //burcy
      // operation validation
    //   if (value === ".") {
    //     commaClickHandler(e);
    //   } else if (
    //     value === "+" ||
    //     value === "-" ||
    //     value === "*" ||
    //     value === "/"
    //   ) {
    //     signClickHandler(e);
    //   } else if (value === "=") {
    //     euqalClickHanlder();
    //   } else if (value === "+/-") {
    //     invertClickHandler();
    //   } else if (value === "%") {
    //     percentClickHandler();
    //   }
    // } else if (btnType === "btn-number" || btnType === "button0") {
    //   // number button
    //   if (input === 0 || sign) {
    //     // if the screen value is 0 or non-number or sign == true
    //     setInput(value);
    //     setSign("");
    //   } else {
    //     setInput(input.concat(value)); // add number to the screen value
    //  }
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

  const commaClickHandler = (e) => {
    const value = e.target.value;

    setInput(!input.toString().includes(".") ? input + value : input);
    setSign("");
  };

  // operator + - * /
  const signClickHandler = (e) => {
    const value = e.target.value;
    const calcNum = parseFloat(input);

    setSign(value);
    setPreSign(value);
    setResult((prev) => {
      console.log(prev);
      return value === "+"
        ? prev + calcNum
        : value === "-"
        ? prev - calcNum
        : value === "*"
        ? prev * calcNum
        : prev / calcNum;
    });
  };

  const euqalClickHanlder = () => {};

  // invert to + or -
  const invertClickHandler = () => {
    setSign("");
    if (input !== 0) {
      setInput((prev) => prev * -1);
      setResult((prev) => prev * -1);
    }
  };

  const percentClickHandler = () => {
    setSign("");
    if (input !== 0) {
      setInput((prev) => (prev /= Math.pow(100, 1)));
      setResult((prev) => (prev /= Math.pow(100, 1)));
    }
  };

  // clear all values
  const resetClickHandler = () => {
    setInput("0");
    setResult("0");
    setOldInput("0");
    setAddition(false);
    setSubtraction(false);
    setMultiplication(false);
    setDivision(false);
    setSign("");
  };

  return (
    <div className="container">
      {/* Screen */}
      <div className="calculator dark">
        <div className="display-screen">
          <h3 id="display">{input || result}</h3>
          {/* <h1 id="display">{sign ? result : input}</h1> */}
          {console.log("input", input)}
          {console.log("result", result)}
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
                    value={7}
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
                    value={8}
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
                    value={9}
                    onClick={clickHandler}
                  >
                    9
                  </button>
                </td>
                <td>
                  <button
                    // ref={ref}
                    className="btn-operator"
                    id="minus2"
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
                    value={4}
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
                    value={5}
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
                    value={6}
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
                    value={1}
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
                    value={2}
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
                    value={3}
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
                    value={0}
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
      <footer>Teammate: Bruce, Ari, Double</footer>
    </div>
  );
}

export default App;
