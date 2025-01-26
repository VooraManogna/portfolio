import React, { useState } from "react";
import "./Contact.css";
import contact_img from "./contact img.jpeg";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formsubmit.co/ajax/manognavoora@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _replyto: formData.email,
      }),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-wrapper">
        <form onSubmit={handleSubmit} className="contact-form">
          <h2>Contact Me</h2>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-submit">Send</button>
        </form>
        <div className="contact-photo">
          <img src={contact_img} alt="Contact" />
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
     