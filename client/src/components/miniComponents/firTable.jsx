import React from "react";
import "../../styles/Dashboards/firTable.css"
import '../../styles/IconBox.css';

function downEvidence(evidence){
  console.log(evidence)
  let filename = evidence.slice(8);
  window.open(`http://localhost:1337/api/dashboard/operator/evidence/${filename}`,"_blank");
}
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
            <td>{fir.locations}</td>
            <td>{fir.details}</td>
            <td><a href={`http://localhost:1337/api/dashboard/operator/evidence/${fir.evidence.slice(8)}`}target="_blank">Download Now</a></td>
            <td>{fir.suspects}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FirTable;
