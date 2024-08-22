export function Filter({ filter, handleFilter }) {
  return (
    <div className="flex m-4 p-3 w-48 text-sm shadow-lg bg-light-gray dark:bg-dark-blue rounded-md">
      <select
        className="w-full bg-light-gray dark:bg-dark-blue focus:outline-none"
        name="select"
        id="coutry-select"
        autoFocus={false}
        value={filter}
        onChange={handleFilter}
      >
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}
