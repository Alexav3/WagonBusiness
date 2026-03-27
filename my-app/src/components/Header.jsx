import "./Header.css";
import logoImg from "../assets/noBackground.png";

function Header() {
  return (
    <header className="header">
      <h2 className="logo">
        <img src={logoImg} alt="logo" className="logo-img" />
        Pussy Wagon
      </h2>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Book</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
