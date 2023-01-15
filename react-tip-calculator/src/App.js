import "./App.css";

/**
 * React app that displays a tip Calculator.
 * Todo:
 * 1. DONE- Setup basic UI architecture with initial responsive design
 * 2. DONE- Add intial rough UI layout with dummy content with no styling
 * 3. Add initial styling to match frontend design
 * 4. Update responsive design for mobile and desktop
 * 5. Refactor to add state for bill amount and number of people
 * 6. Refactor to add functionality to update tip amount and total per person
 * 7. Refactor to change the above based on tip percentage
 * 8. Refactor to add accessibilty features
 * @returns
 */
function App() {
  return (
    <div className="App">
      <main>
        <section className="ui__tipAmount--container">
          <p>
            Tip Amount <span>$</span>
            <span>4.02</span>
          </p>
        </section>
        <section className="ui__totalPerPerson--container">
          <p>
            Total Per Person <span>$</span>
            <span>12.02</span>
          </p>
        </section>
        <section className="ui__inputs--container">
          <div className="inputs__billAmount--container">
            <p><span>$</span> 102.02</p>
            <p>Billl Amount</p>
          </div>
          <div className="inputs__numberOfPeople--container">
            <p><span>icon</span> 25</p>
            <p>Number of People</p>
          </div>
        </section>
        <section className="ui__tipPercentage--container">
          <button type="button">5%</button>
          <button type="button">10%</button>
          <button type="button">15%</button>
          <button type="button">20%</button>
        </section>
        <section className="ui__calculateButton--container">
          <button type="button">Calculate</button>
        </section>
      </main>
    </div>
  );
}

export default App;
