import { useState } from "react"

export function SearchBar({ handleSearch, query, setQuery }) {
  return (
    <form
      className="mb-4 borde bg-very-light-gray drop-shadow-md md:w-96 dark:bg-very-dark-blue dark:text-white"
      action="submit"
      onSubmit={handleSearch}
    >
      <div className="flex pl-4 items-center bg-very-light-gray dark:bg-dark-blue dark:text-white rounded-md">
        <button type="submit" onClick={handleSearch}>
          <ion-icon name="search"></ion-icon>
        </button>
        <input
          className="p-3 w-full bg-transparent dark:text-white focus:outline-none font-light text-sm"
          autoFocus={true}
          type="search"
          placeholder="Pesquise por um país..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
    </form>
  )
}
