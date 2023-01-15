import "./App.css";
import GroupIcon from './assets/peoples-group-icon.png';

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
            Tip Amount 
          </p>
          <p className="highlightedAmount"><span className="dollarSign">$</span>4.02</p>
        </section>
        <section className="ui__totalPerPerson--container">
          <p>
            Total Per Person 
          </p>
          <p className="highlightedAmount"><span className="dollarSign">$</span>12.02</p>
        </section>
        <section className="ui__inputs--container">
          <div className="inputs__billAmount--container">
            <p className="divider"><span>$</span> 102.02</p>
            <p>Billl Amount</p>
          </div>
          <div className="inputs__numberOfPeople--container">
            <p className="divider imageInline"><span><img src={GroupIcon} className="input__image--style" alt="" /></span> 25</p>
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
