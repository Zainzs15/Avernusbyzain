import React from "react";
import "../index.css";

const ContactForm = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-wrapper">
        <div className="contact-left">
          <h2>Get in Touch with <span>AvernusCorp</span></h2>
          <p>
            Have questions or want to discuss how AvernusCorp can transform your healthcare workflow?
            Our expert team is ready to assist you with tailored solutions that fit your practice.
          </p>

          <div className="contact-details">
            <p><strong>📍 Address:</strong> 1032 E Brandon Blvd 977, Brandon, FL 33511</p>
            <p><strong>📞 Phone:</strong> +1 (813) 555-1122</p>
            <p><strong>📧 Email:</strong> contact@avernuscorp.com</p>
          </div>

          <iframe
            title="AvernusCorp Florida Office"
            src="https://www.google.com/maps?q=1032+E+Brandon+Blvd+977,+Brandon,+FL+33511&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="contact-right">
          <h3>Send Us a Message</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea rows="6" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message ✉️</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
