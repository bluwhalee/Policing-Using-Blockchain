import React from 'react'
import IconBox from '../miniComponents/box'

const operatorDash = () => {
  return (
    <div>
        <div className="icon-box-container">
            <IconBox icon="fas fa-chart-line" title="Analytics" description="View important statistics and data about your business." />
            <IconBox icon="fas fa-envelope" title="Messages" description="Communicate with your customers and team members." />
            <IconBox icon="fas fa-calendar" title="Calendar" description="Schedule and manage appointments and events." />
            <IconBox icon="fas fa-cog" title="Settings" description="Customize and configure your account settings." />
            <IconBox icon="fas fa-shopping-cart" title="E-commerce" description="Manage your online store and process orders." />
        </div>
    </div>
  )
}

export default operatorDash