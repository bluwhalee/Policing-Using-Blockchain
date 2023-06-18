import React from "react";
import FirTable from "../../miniComponents/firTable";
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const firList1 = [
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
  const [firList, setFIRList] = useState([]);

  useEffect(() => {
    const fetchFIRList = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/dashboard/operator/firs'); // Replace '/firs' with your API endpoint to fetch FIR data
        setFIRList(response.data);
      } catch (error) {
        console.error('Failed to fetch FIR data', error);
      }
    };

    fetchFIRList();
  }, []);


  return (
    <div>
      
      <FirTable firList={firList} />
    </div>
  );
}

export default App;
