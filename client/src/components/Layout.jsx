
import { Outlet, Link } from "react-router-dom"


export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white border-white border-4">
      <header className="navbar">
        <nav className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <img src="/music-player-control-button.png" alt="Music Player Button" />
            Primitive Music School
          </Link>
          <div className="navbar-links">
            <Link to="/about" className="navbar-link">About</Link>
            <Link to="/lessons" className="navbar-link">Lessons</Link>
            <Link to="/contact" className="navbar-link">Contact</Link>
            <Link to="/policies" className="navbar-link">Policies</Link>
          </div>
        </nav>
      </header>

      <main className="flex-1 max-w-7xl mx-auto p-10 border-y border-white bg-black">
        <Outlet />
      </main>

      <footer className="bg-black text-center p-4 text-sm text-white border-t border-white">
        © {new Date().getFullYear()} Christopher James Hoke All rights reserved.
      </footer>
    </div>
  )
}