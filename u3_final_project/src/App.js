import { useState } from "react";
import "./styles/App.css";
import ColorScheme from "./components/ColorScheme";


const App = () => {
  const [colorScheme, setColorScheme] = useState([]);

  const refreshPage = () => {
    window.location.reload();
  };


  return (
    <div className="App">
      <div className="wrapper">

      <header className="main_header">

      <h3>Unit 3 Project</h3>

      <h1>Color palette inspiration</h1>



      </header>

      
            <div className="color_scheme_container">
        
            <ColorScheme /></div>

            
      <button className="generator_button" onClick={refreshPage}>Refresh</button>
      </div>
    </div>
  );
};

export default App;
