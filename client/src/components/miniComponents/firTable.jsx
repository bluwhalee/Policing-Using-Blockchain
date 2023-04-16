import React from "react";
import "../../styles/Dashboards/firTable.css"

function FirTable({ firList }) {
    let num = 1;
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Status</th>
          <th>Name</th>
          <th>CNIC</th>
          <th>Location</th>
          <th>Details</th>
          <th>Initial Evidences</th>
          <th>Suspects</th>
        </tr>
      </thead>
      <tbody>
        {firList.map((fir, index) => (
          <tr key={index}>
            <td>{index+1}</td>
            
            <td>{fir.status}</td>
            <td>{fir.name}</td>
            <td>{fir.cnic}</td>
            <td>{fir.locations.join(", ")}</td>
            <td>{fir.details}</td>
            <td>{fir.initialEvidences.join(", ")}</td>
            <td>{fir.suspects.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FirTable;
