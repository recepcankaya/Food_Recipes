function Filter({ datum, datumFiltered, setDatumFiltered }) {
  const handleFilter = (e) => {
    const filterText = e.target.value.toLowerCase()
    const wordsToFilter = filterText.split(" ")
    datumFiltered = datum.filter((item) => {
      return wordsToFilter.every((word) =>
        item.title.toLowerCase().includes(word)
      )
    })
    setDatumFiltered(datumFiltered)
  }

  return (
    <div className="container">
      <h2 id="header">Search</h2>
      <input
        type="text"
        placeholder="Please enter the name of the the food"
        onChange={handleFilter}
      />

      {datumFiltered.map((el, id) => (
        <div key={id} className="items">
          <img src={el.image} alt={el.title} />
          <p>{el.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Filter
