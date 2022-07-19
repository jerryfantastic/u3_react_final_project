import { useState } from "react";
import "./styles/App.css";
import ColorScheme from "./components/ColorScheme";


const App = () => {
  const [colorScheme, setColorScheme] = useState([]);


  return (
    <div className="App">
      <div className="wrapper">

      <header className="main_header">
      <h1>Generate a color scheme</h1>



      </header>

      
            <div className="color_scheme_container">
        
            <ColorScheme />

            </div>

            
      <button className="generator_button" >Generate</button>
      </div>
    </div>
  );
};

export default App;
