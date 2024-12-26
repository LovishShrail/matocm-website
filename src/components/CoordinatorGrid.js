import React from 'react';
import CoordinatorCard from './CoordinatorCard';

const coordinatorsData = [
  { name: "Coordinator 1", image: "path/to/image1.jpg" },
  { name: "Coordinator 2", image: "path/to/image2.jpg" },
  // ... add more coordinators here
];

const CoordinatorGrid = () => {
  return (
    <div className="coordinator-grid">
      {coordinatorsData.map((coordinator, index) => (
        <CoordinatorCard key={index} name={coordinator.name} image={coordinator.image} />
      ))}
    </div>
  );
};

export default CoordinatorGrid;