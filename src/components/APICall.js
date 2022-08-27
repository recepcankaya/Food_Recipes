import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'

function APICall() {
  const [datum, setDatum] = useState([])

  useEffect(() => {
    axios("https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=84e883fc6e4e41b8b4a031c825a7a917")
    .then(res => setDatum(res.data.products))
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      {datum.map((el, idx) => (
        <div key={idx}>
          <p>{el.id}</p>
        </div>
     ))}
    </div>
  )
}

export default APICall