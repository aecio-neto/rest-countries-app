export function Header() {
  return (
    <header className="p-6 items-center justify-between flex shadow-lg bg-very-light-gray">
      <div className="font-bold text-sm">Where in the world</div>
      <button className="border-none text-sm cursor-pointer flex items-center">
        <ion-icon name="moon-outline"></ion-icon>{" "}
        <span className="pl-2">Dark Mode</span>
      </button>
    </header>
  )
}
