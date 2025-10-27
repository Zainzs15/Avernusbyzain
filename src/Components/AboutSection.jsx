import React, { useState } from "react";
import team1 from "../assets/sarosh.jpg";
import team2 from "../assets/aman.jpg";
import team3 from "../assets/asma.jpg";
import team4 from "../assets/qamar.jpg";
import "../index.css";

const AboutSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const team = [
    {
      name: "Mirza Sarosh Baig",
      role: "CEO",
      img: team1,
      info: "Founder and visionary leader of AvernusCorp. With over 15 years in the healthcare management industry, he has successfully built and scaled multiple RCM and automation systems across the United States.",
      details:
        "Mirza Sarosh Baig is a pioneer in healthcare management. Under his leadership, AvernusCorp has grown into one of the most trusted names in the healthcare services industry. He is passionate about automation, innovation, and delivering world-class quality to healthcare providers.",
    },
    {
      name: "Muhammad Aman",
      role: "President",
      img: team2,
      info: "Overseeing all business operations and growth strategy at AvernusCorp, Aman is a key figure driving digital transformation for healthcare clients.",
      details:
        "With a strong background in healthcare administration and strategy, Aman focuses on client satisfaction, sustainable business growth, and operational excellence. His vision is to expand AvernusCorp into new regions through technology-driven RCM services.",
    },
    {
      name: "Asma Siraj Khan",
      role: "Head of Marketing",
      img: team3,
      info: "Asma is the creative force behind AvernusCorp’s brand, leading strategic marketing, communications, and outreach efforts worldwide.",
      details:
        "Asma specializes in healthcare marketing, digital branding, and business communications. Her innovative campaigns have helped AvernusCorp connect with clients and strengthen the company’s global image as a healthcare leader.",
    },
    {
      name: "Qamar",
      role: "Head of Finance",
      img: team4,
      info: "Qamar ensures the financial integrity and long-term growth of AvernusCorp with his vast experience in healthcare accounting and finance management.",
      details:
        "Qamar has over a decade of experience in managing complex financial operations. His leadership has ensured that AvernusCorp maintains transparency, efficiency, and profitability across all divisions.",
    },
  ];

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Our Founder</h2>
          <p>
            AvernusCorp was founded by <strong>Mirza Sarosh Baig</strong>, a
            visionary in the healthcare management industry. With years of
            experience in medical billing, coding, and RCM, he built AvernusCorp
            to empower healthcare providers with seamless, efficient, and
            transparent systems.
          </p>
          <p>
            Our mission is to revolutionize healthcare management through
            innovation, trust, and performance excellence.
          </p>
          <p>
            The inspiring story of Avernus starts from the passion of healthcare
            experts working with US clients for decades. Their belief in
            innovation, leadership, and process development helped them build
            one of the most trusted healthcare management services in the world.
          </p>
          <p>
            Avernus continues to evolve with advanced automation tools and
            data-driven solutions, ensuring our clients stay ahead in the
            healthcare industry.
          </p>
        </div>
      </div>

      <div className="team-section">
        <h2>Meet Our Team Members</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div
              key={index}
              className="team-card"
              onClick={() => setSelectedMember(member)}
            >
              <img src={member.img} alt={member.name} />
              <div className="team-content">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="info">{member.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSelectedMember(null)}
            >
              &times;
            </button>
            <img
              src={selectedMember.img}
              alt={selectedMember.name}
              className="modal-img"
            />
            <h2>{selectedMember.name}</h2>
            <h4>{selectedMember.role}</h4>
            <p>{selectedMember.details}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
