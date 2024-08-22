import { useState } from "react"

export function SearchBar({ handleSearch, query, setQuery }) {
  return (
    <form
      className="p-4 bg-very-light-gray dark:bg-very-dark-blue dark:text-white"
      action="submit"
      onSubmit={handleSearch}
    >
      <div className="flex my-2 pl-4 items-center bg-very-light-gray dark:bg-dark-blue dark:text-white rounded-md">
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
