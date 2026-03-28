import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./BookRide.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function BookRide() {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const prefilledDestination = queryParams.get("destination") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    pickup: "",
    destination: prefilledDestination,
    date: "",
    time: "",
    passengers: "1",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9()+\-\s]{7,20}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }

    if (!formData.pickup.trim()) {
      newErrors.pickup = "Pickup location is required.";
    }

    if (!formData.destination.trim()) {
      newErrors.destination = "Destination is required.";
    }

    if (!formData.date) {
      newErrors.date = "Date is required.";
    }

    if (!formData.time) {
      newErrors.time = "Time is required.";
    }

    if (!formData.passengers) {
      newErrors.passengers = "Please select number of passengers.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    navigate("/confirmation", {
      state: {
        bookingDetails: formData,
      },
    });
  };

  return (
    <>
      <Header />

      <div className="book-ride-page">
        <div className="book-ride-container">
          <div className="book-ride-header">
            <h1>Book a Ride</h1>
            <p>
              Fill out the form below to request your ride. We’ll make your New
              Orleans trip smooth, fun, and easy.
            </p>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <span className="error-text">{errors.fullName}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <span className="error-text">{errors.phone}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="pickup">Pickup Location</label>
              <input
                type="text"
                id="pickup"
                name="pickup"
                placeholder="Enter pickup location"
                value={formData.pickup}
                onChange={handleChange}
              />
              {errors.pickup && (
                <span className="error-text">{errors.pickup}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="destination">Destination</label>
              <input
                type="text"
                id="destination"
                name="destination"
                placeholder="Enter destination"
                value={formData.destination}
                onChange={handleChange}
              />
              {errors.destination && (
                <span className="error-text">{errors.destination}</span>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
                {errors.date && (
                  <span className="error-text">{errors.date}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="time">Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                />
                {errors.time && (
                  <span className="error-text">{errors.time}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="passengers">Passengers</label>
              <select
                id="passengers"
                name="passengers"
                value={formData.passengers}
                onChange={handleChange}
              >
                <option value="1">1 Passenger</option>
                <option value="2">2 Passengers</option>
                <option value="3">3 Passengers</option>
                <option value="4">4 Passengers</option>
                <option value="5">5 Passengers</option>
                <option value="6">6 Passengers</option>
              </select>
              {errors.passengers && (
                <span className="error-text">{errors.passengers}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="notes">Special Notes</label>
              <textarea
                id="notes"
                name="notes"
                rows="4"
                placeholder="Add any extra details here"
                value={formData.notes}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-booking-btn">
              Submit Booking Request
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BookRide;
