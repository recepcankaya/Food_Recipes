import React from 'react'
import {useState} from "react"

function Filter({datum}) {
  const [filterText, setFilterText] = useState({text: ""})

  const handleInput = (e) => {
    setFilterText({text: e.target.value})
  }

  // const handleFilter = datum.filter(item => {
  //   return Object.keys(item).some(key => {
  //     return item[key]
  //       .toString()
  //       .toLowerCase()
  //       .includes(filterText.toLocaleLowerCase())
  //   }) 
  // })

  // console.log(handleFilter)

  return (
    <div>
      <input type="text" placeholder="Please enter the name of the the food" onChange={handleInput}  />
    </div>
  )
}

export default Filter