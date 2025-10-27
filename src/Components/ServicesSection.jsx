import React from "react";
import "../index.css";

const ServicesSection = () => {
  const services = [
    { title: "Medical Billing", desc: "Streamlined billing for faster payments." },
    { title: "Credentialing", desc: "End-to-end provider credentialing services." },
    { title: "RCM Solutions", desc: "Comprehensive revenue cycle management." },
    { title: "Analytics", desc: "Data-driven insights for smart decisions." },
        { title: "Medical coding", desc: "Medical Coding Made Easy" },
        { title: "Credentialing and contracting", desc: "One-Stop Solution for Healthcare Credentialing and Contracting" },
        { title: " Front Office Management", desc: "Creating Better Patient Experiences With Front Office Management" },
        { title: "Medical Record Summarization", desc: "Get Better Insight Into Your Medical Record With Our Summarization System and Experts" },
        { title: "MIS Reporting", desc: "MIS Reporting Made Simpler, Easier, and Smoother" },
        { title: "RCM", desc: "Comprehensive, Innovative, and Effective RCM Solutions" },

  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
