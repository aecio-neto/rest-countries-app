import { Header } from "./Header"
import { CoutriesFeed } from "./CoutriesFeed"

export default function IndexPage({ navigate }) {
  return (
    <>
      <Header />
      <CoutriesFeed navigate={navigate} />
    </>
  )
}
