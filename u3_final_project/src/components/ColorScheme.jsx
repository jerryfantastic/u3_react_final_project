import { useState, useEffect } from 'react'
import axios from 'axios'
import ColorSwatch from "./ColorSwatch";




const ColorScheme = ({ colorSchemeStatus }) => {

  const [colorScheme, setColorScheme] = useState([
    [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]
  ])


  console.log(colorScheme[0])

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
      <ColorSwatch colorSwatch={colorScheme[0]} />
      <ColorSwatch colorSwatch={colorScheme[1]} />
      <ColorSwatch colorSwatch={colorScheme[2]} />
      <ColorSwatch colorSwatch={colorScheme[3]} />
      <ColorSwatch colorSwatch={colorScheme[4]} />
    </div>

  )
}

export default ColorScheme