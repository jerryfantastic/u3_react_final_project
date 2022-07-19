import { useState } from "react";
import "./styles/App.css";
import ColorPalette from "./components/ColorPalette";


const App = () => {
  const [colorPaletteStatus, setcolorPaletteStatus] = useState(false);

  const refreshPalette = () => {
    if (colorPaletteStatus === false) {
      setcolorPaletteStatus(true);
    } else {
      setcolorPaletteStatus(false);
    }
  };


  return (
    <div className="App">
      <div className="wrapper">

      <header className="main_header">

      <h3>Unit 3 Project</h3>

      <h1>Random color palette API</h1>



      </header>

      
            <div className="color_scheme_container">
        
            <ColorPalette colorPaletteStatus={colorPaletteStatus} /></div>

            
      <button className="generator_button" onClick={refreshPalette}>Refresh</button>
      </div>
    </div>
  );
};

export default App;
