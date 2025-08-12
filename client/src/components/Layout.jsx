

import { Outlet, Link } from "react-router-dom";



export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white border-white border-4">
      <header className="navbar w-full">
        <nav className="navbar-inner flex flex-wrap items-center justify-between px-2 sm:px-4 py-2 sm:py-3 w-full">
          <Link to="/" className="navbar-logo flex items-center gap-2 text-base sm:text-lg font-bold min-w-0 flex-shrink">
            <img src="/music-player-control-button.png" alt="Music Player Button" className="w-8 h-8 flex-shrink-0" />
            <span className="truncate">Primitive Music School</span>
          </Link>
          {/* Always visible nav links, responsive layout */}
          <div className="navbar-links flex flex-wrap gap-2 sm:gap-4 md:gap-6 w-full justify-end items-center mt-2 sm:mt-0">
            <Link to="/about" className="navbar-link whitespace-nowrap px-2 py-1 rounded hover:bg-white hover:text-black transition">About</Link>
            <Link to="/lessons" className="navbar-link whitespace-nowrap px-2 py-1 rounded hover:bg-white hover:text-black transition">Lessons</Link>
            <Link to="/contact" className="navbar-link whitespace-nowrap px-2 py-1 rounded hover:bg-white hover:text-black transition">Contact</Link>
            <Link to="/policies" className="navbar-link whitespace-nowrap px-2 py-1 rounded hover:bg-white hover:text-black transition">Policies</Link>
          </div>
        </nav>
      </header>

      <main className="flex-1 max-w-7xl mx-auto p-4 sm:p-10 border-y border-white bg-black w-full">
        <Outlet />
      </main>

      <footer className="bg-black text-center p-4 text-sm text-white border-t border-white">
        © {new Date().getFullYear()} Christopher James Hoke All rights reserved.
      </footer>
    </div>
  )
}