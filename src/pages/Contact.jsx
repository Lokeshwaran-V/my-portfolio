import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [mode, setMode] = useState("mail");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${mode} form submitted`);
  };

  const handleToggle = (checked) => {
    setMode(checked ? "message" : "mail");
  };

  return (
    <div className="contact" id="Contact">
      <div className="contact__wrapper">
        <div className="contact__card">
          <h1 className="contact__title">Get in Touch</h1>
          <p className="contact__subtitle">Choose your preferred contact method</p>

          <div className="contact__toggle">
            <span
              className={`contact__toggle-label ${
                mode === "mail" ? "contact__toggle-label--active" : ""
              }`}
            >
              Mail
            </span>

            <label className="contact__switch">
              <input
                type="checkbox"
                className="contact__switch-input"
                checked={mode === "message"}
                onChange={(e) => handleToggle(e.target.checked)}
              />
              <span className="contact__switch-slider"></span>
            </label>

            <span
              className={`contact__toggle-label ${
                mode === "message" ? "contact__toggle-label--active" : ""
              }`}
            >
              Message
            </span>
          </div>

          {mode === "mail" && (
            <form onSubmit={handleSubmit} className="contact__form">
              <input
                type="text"
                placeholder="Enter your name"
                required
                className="contact__input"
              />
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="contact__input"
              />
              <input
                type="text"
                placeholder="Subject"
                required
                className="contact__input"
              />
              <textarea
                placeholder="Hi there!"
                rows={5}
                className="contact__textarea"
              ></textarea>
              <button type="submit" className="contact__button">
                Send Email
              </button>
            </form>
          )}

          {mode === "message" && (
            <form onSubmit={handleSubmit} className="contact__form">
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="contact__input"
              />
              <input
                type="text"
                placeholder="Subject"
                required
                className="contact__input"
              />
              <textarea
                placeholder="Hi there!"
                rows={5}
                className="contact__textarea"
              ></textarea>
              <button type="submit" className="contact__button">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
