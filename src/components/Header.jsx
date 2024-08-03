import {ThemeToggle} from "./ThemeToggle"

export function Header() {
  return (
    <header className="p-6 items-center justify-between flex shadow-lg bg-very-light-gray dark:bg-dark-blue dark:text-white">
      <div className="font-bold text-sm">Where in the world</div>
      <ThemeToggle />
    </header>
  )
}

