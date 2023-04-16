import React from 'react';
import CitizenTable from '../miniComponents/citizenTable';

const CitizenTableContainer = () => {
  const citizenList = [
    {
      name: 'Alice',
      cnic: '1234567890123',
      address: '123 Main St',
      details: 'Lorem ipsum dolor sit amet',
      seeCases: 'Yes',
    },
    {
      name: 'Bob',
      cnic: '2345678901234',
      address: '456 Elm St',
      details: 'Consectetur adipiscing elit',
      seeCases: 'No',
    },
    {
      name: 'Charlie',
      cnic: '3456789012345',
      address: '789 Oak St',
      details: 'Sed do eiusmod tempor incididunt',
      seeCases: 'Yes',
    },
  ];

  return <CitizenTable citizenList={citizenList} />;
};

export default CitizenTableContainer;
