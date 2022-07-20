import { useState, useEffect } from 'react'
import axios from 'axios'
import ColorSwatch from "./ColorSwatch";




const ColorPalette = ({ colorPaletteStatus }) => {
  const [colorPalette, setColorPalette] = useState([
  ])


  // generate color scheme from API request
  const getColorPalette = async () => {

    // axios post request
    try {

      const options = {
        url: 'http://colormind.io/api/',
        method: 'POST',
        data: JSON.stringify({ "model": "default" })

      };
      axios(options)
        .then(response => {
          console.log(response.data.result);

          setColorPalette(response.data.result)

        });
    } catch (err) {
      console.log(err)
    }

  }


  useEffect(() => {
    getColorPalette()
  }, [colorPaletteStatus])



  return (
    <div>
      {colorPalette.map((colorSwatch) => (
        <ColorSwatch colorSwatchRed={colorSwatch[0]} colorSwatchGreen={colorSwatch[1]} colorSwatchBlue={colorSwatch[2]} key={colorSwatch} />
      ))}

    </div>

  )
}

export default ColorPalette