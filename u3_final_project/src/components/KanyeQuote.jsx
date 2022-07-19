import { useState, useEffect } from 'react'
import axios from 'axios'




const KanyeQuote = ({ displayQuote }) => {

  const [quote, setQuote] = useState('')

  const getKanyeQuote = async () => {


    const options = {
      url: 'http://colormind.io/api/',
      method: 'POST',
      data: JSON.stringify({ "model": "default" })

    };

    axios(options)
      .then(response => {
        console.log(response);
      });

  }


  useEffect(() => {
    getKanyeQuote()
  }, [displayQuote])



  return (
    <h2 style={{ fontStyle: 'italic' }}>{quote !== '' && quote}</h2>

  )
}

export default KanyeQuote