import React from "react";
import FirTable from "../miniComponents/firTable";

function App() {
  const firList = [
    {
      status: "Open",
      name: "John Doe",
      cnic: "1234567890123",
      locations: ["Karachi", "Lahore"],
      details: "Robbery in progress",
      initialEvidences: ["CCTV footage", "Fingerprints"],
      suspects: ["Mike Smith", "Emily Jones"],
    },
    {
      status: "Closed",
      name: "Jane Smith",
      cnic: "9876543210987",
      locations: ["Islamabad"],
      details: "Burglary reported",
      initialEvidences: ["Footprints"],
      suspects: ["Unknown"],
    },
    {
        id: 2,
        status: 'Closed',
        name: 'Mary Smith',
        cnic: '34567-8901234-5',
        locations: ['Market Street'],
        details: 'An assault occurred on the premises',
        initialEvidences: ['Witness testimony', 'Medical records'],
        suspects: ['Joe Johnson']
      },
      {
        id: 3,
        status: 'Open',
        name: 'David Lee',
        cnic: '56789-0123456-7',
        locations: ['Main Street'],
        details: 'A burglary occurred on the premises',
        initialEvidences: ['Broken window', 'Footprints'],
        suspects: ['Unknown']
      }
    
  ];

  return (
    <div>
      
      <FirTable firList={firList} />
    </div>
  );
}

export default App;
