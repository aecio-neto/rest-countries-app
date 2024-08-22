export function CountryItem({ country }) {
  const {
    name: { common: countryName },
    capital,
    continents,
    population,
    flags: { png: flagUrl, alt: alt },
  } = country;

  //  const {capital} = countries
  return (
    <div className="p-4 text-md mb-4 bg-dark-blue rounded-md">
      <img className="mb-4"src={flagUrl} alt={alt} />
      <h3 className="font-bold text-lg py-2">Name: {countryName}</h3>
      <p>Region: {continents}</p>
      <p>Population: {population.toFixed(2)} hab</p>
      <p>Capital: {capital}</p>
    </div>
  )
}
