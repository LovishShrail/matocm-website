import React, { useState } from "react";
import TeamCard from "../components/TeamCard";
import "../styles/Team.css";
import HackerText from "../components/HackerText";
// import teamData from "../data/data"; // Import the team data
// console.log("Loaded teamData:", teamData);

import teamData from '../data/devData';
import Footer from "../components/Footer";



const Team = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterYear, setFilterYear] = useState("");

  const filteredData = teamData.filter((category) =>
    filterYear ? category.title === filterYear : true
  );

  return (
    <div className="team-section">
      <div className="team-header">
        <input
          type="text"
          className="search-bar"
          placeholder="Search by Name"
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
        <select
          className="filter-dropdown"
          onChange={(e) => setFilterYear(e.target.value)}
        >
          <option value="">Filter by Year</option>
          {teamData.map((category, index) => (
            <option key={index} value={category.title}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      {filteredData.map((category, index) => (
        <div key={index} className="team-category">
          <p className="year-heading" style={{
            background: "linear-gradient(-45deg, #ff69b4, #e890e8, #b19cd9,rgb(90, 27, 216), #8a2be2)",
            backgroundSize: "200% 200%",
            animation: "gradient 15s ease infinite",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}> <HackerText text={category.title} /></p>
          <div className="team-grid">
            {category.members
              .filter((member) =>
                member.name.toLowerCase().includes(searchTerm)
              )
              .map((member, idx) => (
                <TeamCard
                  key={idx}
                  name={member.name}
                  image={member.image}
                  links={member.links}
                />
              ))}
          </div>
        </div>
      ))}

      <div className="footer">

        <Footer />

      </div>
    </div>
  );
};

export default Team;
















