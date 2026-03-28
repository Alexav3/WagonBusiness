import { useState } from "react";
import { Link } from "react-router-dom"; // 👈 ADD THIS
import "./Header.css";
import logoImg from "../assets/noBackground.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <h2 className="logo">
        <img src={logoImg} alt="logo" className="logo-img" />
        Pussy Wagon
      </h2>

      {/* Burger button (mobile only) */}
      <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Nav */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <Link to="/book" onClick={() => setMenuOpen(false)}>
          Book
        </Link>

        <Link to="/popular-stops" onClick={() => setMenuOpen(false)}>
          Popular Stops
        </Link>

        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
