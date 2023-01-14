
import './App.css';

/**
 * React app that displays a tip Calculator. 
 * Todo:
 * 1. DONE- Setup basic UI architecture with initial responsive design
 * 2. Add intial rough UI layout with dummy content with no styling
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
        <section> tip amount</section>
        <section> tip per person</section>
        <section>
          <div> Bill amount</div>
          <div> Number of People</div>
        </section>
        <section>
          Tip percentage
        </section>
        <section> Calculate button</section>
      </main>
    </div>
  );
}

export default App;
