import React from 'react';
import '../../styles/Dashboards/stats.css';

const Statistics = () => {
  const numCases = 500;
  const openCases = 250;
  const solvedCases = numCases - openCases;
  const numCitizens = 1000;
  const hotLocations = ['Main St', 'Broadway', '5th Ave'];
  const numRobberyCases = 150;
  const numMurderCases = 50;
  const numTerroristCases = 25;

  return (
    <div>
        <div className="stats-container">
      <div className="stat-box">
        <h2>Number of Cases Registered</h2>
        <p>{numCases}</p>
      </div>
      <div className="stat-box">
        <h2>Open Cases</h2>
        <p>{openCases}</p>
      </div>
      <div className="stat-box">
        <h2>Solved Cases</h2>
        <p>{solvedCases}</p>
      </div>
      <div className="stat-box">
        <h2>Number of Citizens</h2>
        <p>{numCitizens}</p>
      </div>
    </div>
    <div className="stats-container">
      <div className="stat-box">
        <h2>Hot Locations</h2>
        <p>{hotLocations.join(', ')}</p>
      </div>
      <div className="stat-box">
        <h2>Number of Robbery Cases</h2>
        <p>{numRobberyCases}</p>
      </div>
      <div className="stat-box">
        <h2>Number of Murder Cases</h2>
        <p>{numMurderCases}</p>
      </div>
      <div className="stat-box">
        <h2>Number of Terrorist Cases</h2>
        <p>{numTerroristCases}</p>
      </div>
    </div>
    </div>
  );
};

export default Statistics;
