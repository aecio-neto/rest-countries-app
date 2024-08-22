import { useEffect, useState, useRef } from "react"
import { SearchBar } from "./SearchBar"
import { Filter } from "./Filter"
import { CountryItem } from "./CountryItem"

export function CoutriesFeed() {
  const [query, setQuery] = useState("")
  const [countriesData, setCountriesData] = useState([])
  const [filter, setFilter] = useState("All")
  const abortControllerRef = useRef(null)

  function handleSearch(event) {
    event.preventDefault()
    setQuery("")
  }

  function handleFilter(e) {
    const newFilter = e.target.value
    setFilter(newFilter)
    console.log(newFilter)
  }

  useEffect(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }
    abortControllerRef.current = new AbortController()
    const { signal } = abortControllerRef.current

    async function getCountriesData() {
      let URL = `https://restcountries.com/v3.1/all`

      if (filter !== "All") {
        URL = `https://restcountries.com/v3.1/region/${filter}`
      }

      try {
        const response = await fetch(URL, { signal })
        if (!response.ok) {
          setCountriesData({})
          throw new Error(`Response status: ${response.status}`)
        }
        let data = await response.json()
        if (query) {
          data = data.filter(country => {
            const searchTerm = query.toLowerCase()

            const commonNameMatches = country.name.common
              .toLowerCase()
              .includes(searchTerm)

            const altSpellingsMatches = country.altSpellings.some(spelling =>
              spelling.toLowerCase().includes(searchTerm)
            )
            return commonNameMatches || altSpellingsMatches
          })
        }
        setCountriesData(data)
      } catch (error) {
        console.log(error.message)
      }
    }
    getCountriesData()
    return () => {
      abortControllerRef.current.abort()
    }
  }, [query, filter])

  return (
    <main className="p-8 bg-very-light-gray dark:bg-very-dark-blue dark:text-white">
      <div className="md:flex justify-between items-center">
        <SearchBar
          handleSearch={handleSearch}
          query={query}
          setQuery={setQuery}
        />
        <Filter filter={filter} handleFilter={handleFilter} />
      </div>
      <section className="md:flex flex-wrap justify-between justify-items-center">
        {countriesData.length > 0 ? (
          countriesData.map((country, index) => (
            <CountryItem key={index} country={country} />
          ))
        ) : (
          <p>No countries found. Please, enter a country name to search.</p>
        )}
      </section>
    </main>
  )
}
