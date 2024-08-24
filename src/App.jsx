import { useState, Suspense, useTransition } from "react"
import CountryPage from "./components/CountryPage"
import IndexPage from "./components/IndexPage"
import Layout from "./components/Layout"

import "@fontsource/nunito-sans"
import "@fontsource/nunito-sans/300.css"
import "@fontsource/nunito-sans/600.css"
import "@fontsource/nunito-sans/800.css"

export default function App() {
  return (
    <>
      <Suspense>
        <Router />
      </Suspense>
    </>
  )
}

function Router() {
  const [page, setPage] = useState("/")
  const [isPending, startTransition] = useTransition()
  const [selectedCountryName, setSelectedCountryName] = useState(null)

  function navigate(url, countryName = null) {
    startTransition(() => {
      setSelectedCountryName(countryName)
      setPage(url)
    })
  }

  let content
  if (page === "/") {
    content = <IndexPage navigate={navigate} />
  } else if (page.startsWith("/country/")) {
    content = (
      <CountryPage countryName={selectedCountryName} navigate={navigate} />
    )
  }
  return <Layout isPending={isPending}>{content}</Layout>
}
