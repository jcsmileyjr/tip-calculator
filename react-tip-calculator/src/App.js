import "./App.css";
import GroupIcon from "./assets/peoples-group-icon.png";
import React, { useState } from "react";
/**
 * React app that displays a tip Calculator.
 * Todo:
 * 1. DONE- Setup basic UI architecture with initial responsive design
 * 2. DONE- Add intial rough UI layout with dummy content with no styling
 * 3. DONE- Add initial styling to match frontend design
 * 4. DONE- Update responsive design for mobile and desktop
 * 5. DONE- Refactor to add state for bill amount and number of people
 * 6. DONE- Refactor to add functionality to update tip amount and total per person
 * 7. DONE- Refactor to change the above based on tip percentage
 * 8. DONE- Refactor to add accessibilty features
 */
function App() {
  const [billAmount, setBillAmount] = useState(100.02);
  const [numberOfPeople, setNumberOfPeople] = useState(25);
  const [tipPercentage, setTipPercentage] = useState(.05);

  let tip = parseFloat(billAmount) * tipPercentage;
  let amount;
  if (numberOfPeople === "") {
    amount = "error";
  } else {
    amount = ((parseFloat(billAmount) + tip) / numberOfPeople).toFixed(2);
  }
  return (
    <div className="App">
      <main>
        <section className="ui__tipAmount--container">
          <p>Tip Amount</p>
          <p className="highlightedAmount">
            <span className="dollarSign">$</span>
            {tip.toFixed(2)}
          </p>
        </section>
        <section className="ui__totalPerPerson--container">
          <p>Total Per Person</p>
          <p className="highlightedAmount">
            <span className="dollarSign">$</span>
            {amount}
          </p>
        </section>
        <section className="ui__inputs--container">
          <div className="inputs__billAmount--container">
            <div className="divider">
              <span className="inputsDollarSign">$</span>
              <input
                onChange={(e) => setBillAmount(e.target.value)}
                className="input__billAmount--style"
                type="text"
                value={billAmount}
                id="billAmount"
              />
            </div>
            <label htmlFor="billAmount">Billl Amount</label>
          </div>
          <div className="inputs__numberOfPeople--container">
            <div className="divider imageInline">
              <span>
                <img src={GroupIcon} className="input__image--style" alt="" />
              </span>
              <input
                type="number"
                className="input__numberOfPeople--style"
                onChange={(e) => setNumberOfPeople(e.target.value)}
                value={numberOfPeople}
                id="numberOfPeople"
              />
            </div>
            <label htmlFor="numberOfPeople">Number of People</label>
          </div>
        </section>
        <section className="ui__tipPercentage--container">
          <button className={`ui__tipButton--style ${tipPercentage===.05?"selected":""}`} type="button" onClick={() => setTipPercentage(.05)}>5%</button>
          <button className={`ui__tipButton--style ${tipPercentage===.1?"selected":""}`} type="button" onClick={() => setTipPercentage(.1)}>10%</button>
          <button className={`ui__tipButton--style ${tipPercentage===.15?"selected":""}`} type="button" onClick={() => setTipPercentage(.15)}>15%</button>
          <button className={`ui__tipButton--style ${tipPercentage===.2?"selected":""}`} type="button" onClick={() => setTipPercentage(.2)}>20%</button>
        </section>
        <section className="ui__calculateButton--container">
          <button onClick={() => alert("This is really needed but was in the design")} className="calculateButton--style" type="button">
            Calculate
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
