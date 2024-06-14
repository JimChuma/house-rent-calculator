import { useState } from "react";
import "./App.css";
import AmountCalc from "./components/AmountCalc";
import Select from "./components/Select";

function App() {
  const [select, setSelect] = useState(2);
  return (
    <main className="full-container">
      <div className="box-width">
        <div className="content">
          <div className="app">
          <h2 className="app-title">House Rent Calculator</h2>
            <Select select={select} setSelect={setSelect} />
            {select === 2 ? (
              <AmountCalc select={select} setSelect={setSelect} />
            ) : null}
            {select === 0 ? (
              <AmountCalc select={select} setSelect={setSelect} />
            ) : null}
            {select === 1 ? (
              <AmountCalc select={select} setSelect={setSelect} />
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
