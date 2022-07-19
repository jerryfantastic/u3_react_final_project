import { useState } from "react";
import "./styles/App.css";
import ColorScheme from "./components/ColorScheme";

const App = () => {
  const [colorScheme, setColorScheme] = useState([]);


  return (
    <div className="App">

      <header className="main_header">
      <h1>Get a random color scheme</h1>

      <button>
        Click here
      </button>



      </header>

      <main>

            <div className="color_scheme_container">
        
            <ColorScheme />

            </div>
        
      </main>
    </div>
  );
};

export default App;
