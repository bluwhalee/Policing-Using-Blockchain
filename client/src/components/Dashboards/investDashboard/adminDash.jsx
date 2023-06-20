import React from 'react'
import IconBox from "../../miniComponents/box"
import "../../../styles/dashboard.css"

const adminDash = () => {
  return (
    <div>
        <div className="icon-box-container">
            <IconBox icon="fas fa-chart-line" url="/dashboard/registeruser" title="Register User" description="View important statistics and data about your business." onclick=""/>
        </div>
        
    </div>
  )
}

export default adminDash