import { useState, useEffect } from 'react'
import axios from 'axios'




const ColorScheme = ({ colorSchemeStatus }) => {

  const [colorScheme, setColorScheme] = useState([])


  // generate color scheme from API request
  const getColorScheme = async () => {
    // axios post request
    const options = {
      url: 'http://colormind.io/api/',
      method: 'POST',
      data: JSON.stringify({ "model": "default" })

    };
    axios(options)
      .then(response => {
        console.log(response);

        setColorScheme(response.data.result)

      });

  }


  useEffect(() => {
    getColorScheme()
  }, [colorSchemeStatus])



  return (
    <h2>{colorScheme}</h2>

  )
}

export default ColorScheme