import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'

function APICall() {
  const [datum, setDatum] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchAPI = async () => {
      setLoading(true)
      try {
        const res = await axios("https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=84e883fc6e4e41b8b4a031c825a7a917")
        setDatum(res.data.products)
        console.log(datum)
      }
      catch(err) {
        console.log(err)
      }
      setLoading(false)
    }
    fetchAPI()
  }, [])

  if (loading === true) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {datum.map((el, id) => (
        <div key={id} className="items">
          <img src={el.image} alt={el.title} />
          <p>{el.title}</p>
        </div>
     ))}
    </div>
  )
}

export default APICall