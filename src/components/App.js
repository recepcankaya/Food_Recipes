import "../App.css"
import APICall from "./APICall.js"
import Filter from "./Filter.js"
import { useState } from "react"

function App() {
  const [datum, setDatum] = useState([])
  const [datumFiltered, setDatumFiltered] = useState([])

  return (
    <div className="App">
      <Filter
        datum={datum}
        datumFiltered={datumFiltered}
        setDatumFiltered={setDatumFiltered}
      />
      <APICall setDatum={setDatum} setDatumFiltered={setDatumFiltered} />
    </div>
  )
}

export default App
