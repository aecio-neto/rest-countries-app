export function Filter({ filter, handleFilter }) {
  return (
    <div className="flex w-48 p-3 items-center text-sm shadow-md bg-light-gray dark:bg-dark-blue rounded-md">
      <select
        className="w-full bg-transparent focus:outline-none"
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
