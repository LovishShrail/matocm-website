import React, { useState } from "react";
import TeamCard from "../components/TeamCard";
import "../styles/Team.css";
// import teamData from "../data/data"; // Import the team data
// console.log("Loaded teamData:", teamData);

import teamData from '../data/teamData'; 



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
          <h2 className="year-heading">{category.title}</h2>
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
    </div>
  );
};

export default Team;
















