import React, { useState } from 'react';
import '../../../styles/Dashboards/registerFIR.css';
import axios from 'axios';

const registerFIR = () => {
  const [name, setName] = useState('');
  const [cnic, setCnic] = useState('');
  const [locations, setLocations] = useState('');
  const [details, setDetails] = useState('');
  const [evidence, setEvidence] = useState(null);
  const [suspects, setSuspects] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('cnic', cnic);
    formData.append('locations', locations);
    formData.append('details', details);
    formData.append('evidence', evidence);
    formData.append('suspects', suspects);

    try {
      await axios.post('http://localhost:1337/api/dashboard/operator/fir', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // Handle success
      console.log('FIR submitted successfully');
      // Reset form fields
      setName('');
      setCnic('');
      setLocations('');
      setDetails('');
      setEvidence(null);
      setSuspects('');
    } catch (error) {
      // Handle error
      console.error('Failed to submit FIR', error);
    }
  };

  const handleFileChange = (e) => {
    setEvidence(e.target.files[0]);
  }

  return (
    <form onSubmit={handleSubmit} className="report-form">
      <div className="input-group">
        <label htmlFor="name" className="input-label">Name</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="input-field" />
      </div>
      <div className="input-group">
        <label htmlFor="cnic" className="input-label">CNIC (Person reporting)</label>
        <input type="text" id="cnic" value={cnic} onChange={(e) => setCnic(e.target.value)} placeholder="Enter your CNIC" className="input-field" />
      </div>
      <div className="input-group">
        <label htmlFor="locations" className="input-label">Location(s)</label>
        <input type="text" id="locations" value={locations} onChange={(e) => setLocations(e.target.value)} placeholder="Enter location(s)" className="input-field" />
      </div>
      <div className="input-group">
        <label htmlFor="details" className="input-label">Details</label>
        <textarea id="details" value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Enter details" className="input-field"></textarea>
      </div>
      <div className="input-group">
        <label htmlFor="evidence" className="input-label">Initial Evidences (Any type)</label>
        <input type="file" id="evidence" onChange={handleFileChange} className="input-field" />
      </div>
      <div className="input-group">
        <label htmlFor="suspects" className="input-label">Suspects (persons)</label>
        <textarea id="suspects" value={suspects} onChange={(e) => setSuspects(e.target.value)} placeholder="Enter suspects" className="input-field"></textarea>
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
}

export default registerFIR;
