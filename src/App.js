// import "./App.css";
import "./style.css";

function App() {
  return (
    <div class="container">
      <div class="calculator dark">
        <div class="display-screen">
          <div id="display"></div>
        </div>
        <div class="buttons">
          <table>
            <tr>
              <td>
                <button class="buttonClear" id="ac">
                  AC
                </button>
              </td>
              <td>
                <button class="btn-operator" id="percent">
                  %
                </button>
              </td>
              <td>
                <button class="btn-operator" id="minus">
                  +/-
                </button>
              </td>
              <td>
                <button class="btn-operator" id="plus">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button class="btn-number" id="7">
                  7
                </button>
              </td>
              <td>
                <button class="btn-number" id="8">
                  8
                </button>
              </td>
              <td>
                <button class="btn-number" id="9">
                  9
                </button>
              </td>
              <td>
                <button class="btn-operator" id="minus">
                  -
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button class="btn-number" id="4">
                  4
                </button>
              </td>
              <td>
                <button class="btn-number" id="5">
                  5
                </button>
              </td>
              <td>
                <button class="btn-number" id="6">
                  6
                </button>
              </td>
              <td>
                <button class="btn-operator" id="mul">
                  x
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button class="btn-number" id="1">
                  1
                </button>
              </td>
              <td>
                <button class="btn-number" id="2">
                  2
                </button>
              </td>
              <td>
                <button class="btn-number" id="3">
                  3
                </button>
              </td>
              <td>
                <button class="btn-operator" id="divided">
                  ÷
                </button>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <button class="button0" id="0">
                  0
                </button>
              </td>
              <td>
                <button class="btn-operator" id="doc">
                  .
                </button>
              </td>
              <td>
                <button class="btn-operator" id="equal">
                  =
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
