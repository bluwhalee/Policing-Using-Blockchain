import React, { useState } from 'react';
import jwtDecode from 'jwt-decode';
import OperaterDashboard from './Dashboards/operatorDashboard/operatorDash'
import AminDash from './Dashboards/adminDashboard/adminDash';

function Form() {

  let userType = localStorage.getItem('user');
  userType = jwtDecode(userType).userType;

  return (
    <div>
      {(userType==4) && <OperaterDashboard/>}
      {(userType==1) && <AminDash/>}
    </div>
    
  );
}

export default Form;
