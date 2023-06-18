import React, { useState } from 'react';
import jwtDecode from 'jwt-decode';
import OperaterDashboard from './Dashboards/operatorDashboard/operatorDash'

function Form() {

  let userType = localStorage.getItem('user');
  userType = jwtDecode(userType).userType;

  return (
    <div>
      {(userType==4) && <OperaterDashboard/>}
    </div>
    
  );
}

export default Form;
