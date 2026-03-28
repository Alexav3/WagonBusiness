import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Ride Around New Orleans</h1>
        <p>
          Experience the best wagon rides in the city. Fast, fun, and reliable.
        </p>
        <p>Kelly I made updates to your website always loving you Alex.</p>

        <div className="hero-buttons">
          <Link to="/book" className="btn-primary">
            Book a Ride
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
