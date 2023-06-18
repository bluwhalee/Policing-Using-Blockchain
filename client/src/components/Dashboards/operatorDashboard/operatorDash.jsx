import React from 'react'
import IconBox from '../../miniComponents/box'
import "../../../styles/dashboard.css"

const operatorDash = () => {
  return (
    <div>
        <div className="icon-box-container">
            <IconBox icon="fas fa-chart-line" url="/dashboard/registerfir" title="Register FIR" description="View important statistics and data about your business." onclick=""/>
            <IconBox icon="fas fa-envelope" url="/dashboard/allcases" title="Cases" description="Communicate with your customers and team members." />
            <IconBox icon="fas fa-calendar" url="/dashboard/allcitizens" title="Citizens" description="Schedule and manage appointments and events." />
            
        </div>
        <div className='icon-box-container'>
            <IconBox icon="fas fa-cog" url="/dashboard/stats" title="Stats" description="Customize and configure your account settings." />
            <IconBox icon="fas fa-shopping-cart" title="E-commerce" description="Manage your online store and process orders." />
            <IconBox icon="fas fa-cog" title="Settings" description="Customize and configure your account settings." />
            
        </div>
    </div>
  )
}

export default operatorDash