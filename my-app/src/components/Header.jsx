import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h2 className="logo">Pussy Wagon</h2>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Book</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
