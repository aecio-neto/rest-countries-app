import { useState } from "react"


export function Filter() {
  const [filter, setFilter] = useState('Selecione um país')

  function handleFilter(e) {
    const newFilter = e.target.value
    setFilter(newFilter) 
    console.log(newFilter)
  }

  return (
    <div className="flex m-4 p-2 w-44 shadow-lg bg-light-gray dark:bg-dark-blue rounded-md">
      <select
        className="w-full bg-light-gray dark:bg-dark-blue focus:outline-none"
        name="select"
        id="coutry-select"
        autoFocus={false}
        value={filter}
        onChange={handleFilter}
      >
        <option value="Selecione um país" disabled>
          Selecione um país
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}
