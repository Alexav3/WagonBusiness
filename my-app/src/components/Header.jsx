import { useState } from "react";
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
        <a href="#" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#" onClick={() => setMenuOpen(false)}>
          Book
        </a>
        <a href="#" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
