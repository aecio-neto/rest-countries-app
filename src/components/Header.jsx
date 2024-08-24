import {ThemeToggle} from "./ThemeToggle"

export function Header() {
  return (
    <header className="p-6 items-center justify-between flex drop-shadow-md bg-very-light-gray dark:bg-dark-blue dark:text-white">
      <h1 className="pl-3 font-bold text-sm">Where in the world</h1>
      <ThemeToggle />
    </header>
  )
}

