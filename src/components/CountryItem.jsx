export function CountryItem({ country }) {
  const {
    name: { common: countryName },
    capital,
    continents,
    population,
    flags: { png: flagUrl, alt },
  } = country;

  return (
    <a href="#" className="cursor-pointer">
      <div className="md:max-w-80 p-4 pb-10 text-md my-4 font-light shadow-md bg-white dark:bg-dark-blue rounded-md">
        <img src={flagUrl} alt={alt} />
        <h3 className="font-bold text-lg py-4">Name: {countryName}</h3>
          <p>Region: {continents}</p>
          <p>Population: {population.toLocaleString('en-US')}</p>
          <p>Capital: {capital}</p>
      </div>
    </a>
  )
}
