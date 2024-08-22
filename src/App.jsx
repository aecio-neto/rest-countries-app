import { Header } from "./components/Header"
import { CoutriesFeed } from "./components/CoutriesFeed"
import "@fontsource/nunito-sans"
import "@fontsource/nunito-sans/300.css"
import "@fontsource/nunito-sans/600.css"
import "@fontsource/nunito-sans/800.css"

export default function App() {
  return (
    <>
      <Header />
      <CoutriesFeed />
    </>
  )
}
