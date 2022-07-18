import { useState } from "react";
import "./styles/App.css";
import KanyeQuote from "./components/KanyeQuote";

const App = () => {
  const [displayQuote, setDisplayQuote] = useState(false);

  const toggleQuotes = () => {
    if (displayQuote === false) {
      setDisplayQuote(true);
    } else {
      setDisplayQuote(false);
    }
  };

  return (
    <div className="App">
      <header className="kanye-header"></header>
      <main>
        <div className="quote-container">
          {/* conditional rendering; depending on if displayQuote true or false, something different is displayed */}
          {displayQuote === false ? (
            <h2>Need some inspiration? See what Kanye thinks.</h2>
          ) : (
            <KanyeQuote displayQuote={displayQuote} />
          )}
        </div>
        <button onClick={toggleQuotes}>
          {displayQuote === false ? "New Quote" : "Clear Quote"}
        </button>
      </main>
    </div>
  );
};

export default App;
