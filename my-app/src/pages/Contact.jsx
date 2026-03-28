import React from "react";
import "./Contact.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Header />

      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-header">
            <h1>Contact Us</h1>
            <p>
              Have questions or ready to book your ride? Reach out to us and
              we’ll be happy to help.
            </p>
          </div>

          <div className="contact-cards">
            <div className="contact-card">
              <h2>Phone</h2>
              <p>
                <a href="tel:+15045551234">(504) 555-1234</a>
              </p>
            </div>

            <div className="contact-card">
              <h2>Email</h2>
              <p>
                <a href="mailto:info@wagonbusiness.com">
                  info@wagonbusiness.com
                </a>
              </p>
            </div>

            <div className="contact-card">
              <h2>Hours</h2>
              <p>Open daily</p>
              <p>9:00 AM - 11:00 PM</p>
            </div>
          </div>

          <div className="contact-message-box">
            <h2>Send Us a Message</h2>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea
                placeholder="Write your message here"
                rows="5"
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
