import React from "react";
import { useNavigate } from "react-router-dom";
import "./PopularStops.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const stops = [
  {
    name: "Bourbon Street",
    area: "French Quarter",
    description:
      "One of the most famous nightlife spots in New Orleans, full of music, bars, and energy.",
  },
  {
    name: "Jackson Square",
    area: "French Quarter",
    description:
      "A historic landmark surrounded by artists, musicians, and beautiful architecture.",
  },
  {
    name: "Café du Monde",
    area: "French Quarter",
    description:
      "A classic New Orleans stop known for coffee and beignets, popular with both locals and tourists.",
  },
  {
    name: "Canal Street",
    area: "Downtown",
    description:
      "A major street in the city with shopping, hotels, and easy access to many attractions.",
  },
  {
    name: "Riverwalk",
    area: "Downtown",
    description:
      "A scenic shopping and walking area by the river, great for visitors and quick stops.",
  },
  {
    name: "Caesars Superdome",
    area: "Downtown",
    description:
      "A major destination for sports events, concerts, and large gatherings in New Orleans.",
  },
  {
    name: "Magazine Street",
    area: "Uptown",
    description:
      "A lively area with restaurants, boutiques, and a relaxed New Orleans atmosphere.",
  },
  {
    name: "City Park",
    area: "Mid-City",
    description:
      "A large and beautiful park with walking paths, attractions, and family-friendly spaces.",
  },
  {
    name: "Mardi Gras World",
    area: "Warehouse District",
    description:
      "A fun stop where visitors can explore parade floats and learn about Mardi Gras history.",
  },
  {
    name: "Audubon Park",
    area: "Uptown",
    description:
      "A peaceful park perfect for relaxing, sightseeing, and enjoying the outdoors.",
  },
  {
    name: "French Market",
    area: "French Quarter",
    description:
      "A popular open-air market with food, shopping, and a unique New Orleans vibe.",
  },
  {
    name: "Smoothie King Center",
    area: "Downtown",
    description:
      "A major arena for concerts, basketball games, and entertainment events.",
  },
];

function PopularStops() {
  const navigate = useNavigate();

  const handleBookRide = (stopName) => {
    navigate(`/book?destination=${encodeURIComponent(stopName)}`);
  };

  return (
    <>
      <Header />

      <div className="popular-stops-page">
        <section className="popular-stops-hero">
          <h1>Popular Stops in New Orleans</h1>
          <p>
            Explore some of the most popular destinations around the city and
            book your ride with ease.
          </p>
        </section>

        <section className="popular-stops-grid-section">
          <div className="popular-stops-grid">
            {stops.map((stop, index) => (
              <div className="stop-card" key={index}>
                <div className="stop-card-content">
                  <span className="stop-area">{stop.area}</span>
                  <h2>{stop.name}</h2>
                  <p>{stop.description}</p>
                </div>

                <button
                  className="book-stop-btn"
                  onClick={() => handleBookRide(stop.name)}
                >
                  Book a Ride Here
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default PopularStops;
