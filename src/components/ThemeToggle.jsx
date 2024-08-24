import { useState, useEffect } from "react"
export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("dark-mode") === "true"
  )

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", isDarkMode)
    localStorage.setItem("dark-mode", isDarkMode)
  }, [isDarkMode])

  function toggleDarkMode() {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  return (
    <button
      className="border-none text-sm cursor-pointer flex items-center"
      onClick={toggleDarkMode}
    >
      <ion-icon name={isDarkMode ? "sunny-outline" : "moon-outline"} alt={isDarkMode ? "moon icon" : "sunny icon"}></ion-icon>
      <span className="pl-2">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
    </button>
  )
}
