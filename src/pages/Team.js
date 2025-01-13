import React, { useState } from "react";
import TeamCard from "../components/TeamCard";
import "../styles/Team.css";
// import teamData from "../data/data"; // Import the team data
// console.log("Loaded teamData:", teamData);

import member1 from '../data/Picture.png'; // Adjust the path as needed
const teamData = [
  {
    title: "Previous Club Coordinators",
    members: [
      {
        name: 'Aditya',
        image: member1,
        links: { instagram: "#", linkedin: "#" },
      },
      {
        name: "Himanshu",
        image: member1,
        links: { instagram: "#", linkedin: "#" },
      },
      // Add more coordinators
    ],
  },
  {
    title: "Pre-Final Year",
    members: [
      {
        name: "Krishna Narzary",
        image: member1,
        links: { instagram: "#", linkedin: "#" },
      },
      // Add more pre-final year members
    ],
  },
  {
    title: "2nd Year",
    members: [
      {
        name: "Aditya Sangal",
        image: member1,
        links: {
          instagram: "https://www.linkedin.com/in/prince-khandelwal-06147a1b1",
          linkedin: "#",
        },
      },
      {
        name: "Aditya Sangal",
        image: member1,
        links: {
          instagram: "https://www.linkedin.com/in/prince-khandelwal-06147a1b1",
          linkedin: "#",
        },
      },
      {
        name: "Aditya Sangal",
        image: member1,
        links: {
          instagram: "https://www.linkedin.com/in/prince-khandelwal-06147a1b1",
          linkedin: "#",
        },
      },
      {
        name: "Aditya Sangal",
        image: member1,
        links: {
          instagram: "https://www.linkedin.com/in/prince-khandelwal-06147a1b1",
          linkedin: "#",
        },
      },
      {
        name: "Aditya Sangal",
        image: member1,
        links: {
          instagram: "https://www.linkedin.com/in/prince-khandelwal-06147a1b1",
          linkedin: "#",
        },
      },
      {
        name: "Aditya Sangal",
        image: member1,
        links: {
          instagram: "https://www.linkedin.com/in/prince-khandelwal-06147a1b1",
          linkedin: "#",
        },
      },
      {
        name: "Aditya Sangal",
        image: member1,
        links: {
          instagram: "https://www.linkedin.com/in/prince-khandelwal-06147a1b1",
          linkedin: "#",
        },
      },
      {
        name: "Aditya Sangal",
        image: member1,
        links: {
          instagram: "https://www.linkedin.com/in/prince-khandelwal-06147a1b1",
          linkedin: "#",
        },
      },
      {
        name: "Aditya Sangal",
        image: member1,
        links: {
          instagram: "https://www.linkedin.com/in/prince-khandelwal-06147a1b1",
          linkedin: "#",
        },
      },
      {
        name: "Aditya Sangal",
        image: member1,
        links: {
          instagram: "https://www.linkedin.com/in/prince-khandelwal-06147a1b1",
          linkedin: "#",
        },
      },
      // Add more 2nd-year members
    ],
  },
];

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