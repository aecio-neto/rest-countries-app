import { useRef } from "react"
import '@fontsource/nunito-sans'
import '@fontsource/nunito-sans/300.css' 
import '@fontsource/nunito-sans/600.css' 
import '@fontsource/nunito-sans/800.css' 

export default function App() {
  return <Timer />
}

function Timer() {
  const countRef = useRef(0)

  const increment = () => {
    countRef.current += 1
    console.log(countRef.current)
  }
  return (
    <div className="p-4 font-nunito-sans">
      <p className="text-2xl font-bold">Hello</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}