import { useEffect, useState } from "react"
import { Header } from "./Header"
export default function CountryPage({ countryName, navigate }) {
  const [country, setCountry] = useState(null)
  const [borderCountryNames, setBorderCountryNames] = useState([])

  useEffect(() => {
    async function fetchCountry() {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
        )
        const data = await response.json()
        setCountry(data[0])

        if (data[0].borders) {
          const borders = data[0].borders.join(",")
          const borderResponse = await fetch(
            `https://restcountries.com/v3.1/alpha?codes=${borders}`
          )
          const borderData = await borderResponse.json()
          setBorderCountryNames(borderData.map(country => country.name.common))
        }
      } catch (error) {
        console.log("Error fetching country data:", error)
      }
    }
    fetchCountry()
  }, [countryName])

  if (!country) {
    return <p>Loading...</p>
  }

  function capitalizeWords(str) {
    return str
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  const {
    name: { common: commonName, nativeName },
    capital,
    continents,
    population,
    flags: { png: flagUrl, alt },
    subregion,
    tld: topLevelDomain,
    currencies,
    languages,
    borders: borderCountries,
  } = country

  console.log(alt)

  const nativeNames = Object.values(nativeName).map(n => n.common)
  const currencyInfo = Object.entries(currencies).map(
    ([code, { name }]) => `${capitalizeWords(name)} (${code})`
  )
  const languageList = Object.values(languages).join(", ")

  return (
    <>
      <Header />
      <section className="p-8 text-dark bg-very-light-gray dark:bg-very-dark-blue min-h-screen">
        <button
          onClick={() => navigate("/")}
          className="bg-white dark:bg-dark-blue dark:text-white p-2 px-6 my-8 rounded shadow-md"
        >
          ← Back
        </button>
        <div className="md:flex pb-10 text-md my-4 font-light bg-transparent">
          <img className="md:w-3/5" src={flagUrl} alt={alt ? alt : countryName + " flag"} />
          <div className="md:m-10 md:px-16 dark:text-white">
            <h3 className="font-bold text-lg py-4">{commonName}</h3>
            <div className="md:flex md:space-x-16 justify-between">
              <ul className="space-y-2 mb-6">
                <li>
                  <strong>Native Name:</strong> {nativeNames}
                </li>
                <li>
                  <strong>Population:</strong>{" "}
                  {population.toLocaleString("en-US")}
                </li>
                <li>
                  <strong>Region:</strong> {continents}
                </li>
                <li>
                  <strong>Sub Region:</strong> {subregion ? subregion : "n/a"}
                </li>
                <li>
                  <strong>Capital:</strong> {capital}
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <strong>Top Level Domain:</strong> {topLevelDomain}{" "}
                </li>
                <li>
                  <strong>Currencies:</strong> {currencyInfo}{" "}
                </li>
                <li>
                  <strong>Languages:</strong> {languageList}
                </li>
              </ul>
            </div>
            <p className="font-bold mt-6">Border Countries:</p>
            <ul className="flex flex-wrap items-cente">
              {borderCountryNames.length > 0
                ? borderCountryNames.map((country, index) => (
                    <li
                      key={index}
                      className="p-1 m-2 ml-0 shadow-lg px-6 bg-white dark:bg-dark-blue rounded"
                    >
                      {country}
                    </li>
                  ))
                : "n/a"}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
