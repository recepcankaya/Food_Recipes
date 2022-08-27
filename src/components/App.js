import "../App.css"
import APICall from "./APICall.js"
import Filter from "./Filter.js"
import {useState} from "react"

function App() {
  const [datum, setDatum] = useState([])
  
  return (
    <div className="App">
      <Filter datum={datum} />
      <APICall datum={datum} setDatum={setDatum} />
    </div>
  )
}

export default App
