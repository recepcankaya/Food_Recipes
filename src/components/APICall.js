import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"

function APICall({ setDatum, setDatumFiltered }) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchAPI = async () => {
      setLoading(true)
      try {
        let datum = await axios(
          "https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=84e883fc6e4e41b8b4a031c825a7a917"
        )
        setDatum(datum.data.products)
        setDatumFiltered(datum.data.products)
      } catch (err) {
        console.log(err)
      }
      setLoading(false)
    }
    fetchAPI()
  }, []) //eslint-disable-line

  if (loading === true) {
    return <div>Loading...</div>
  }
}

export default APICall
