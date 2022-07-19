import { useState, useEffect } from 'react'
import axios from 'axios'
import ColorSwatch from "./ColorSwatch";




const ColorScheme = ({ colorSchemeStatus }) => {
  const [colorScheme, setColorScheme] = useState([
  ])


  // generate color scheme from API request
  const getColorScheme = async () => {

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

          setColorScheme(response.data.result)

        });
    } catch (err) {
      console.log(err)
    }

  }


  useEffect(() => {
    getColorScheme()
  }, [colorSchemeStatus])



  return (
    <div>
      {colorScheme.map((colorSwatch) => (
        <ColorSwatch colorSwatch={colorSwatch} key={colorSwatch} />


      ))}

    </div>

  )
}

export default ColorScheme