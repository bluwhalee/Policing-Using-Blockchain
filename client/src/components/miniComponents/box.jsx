import React from 'react';
import '../../styles/IconBox.css';

const IconBox = ({ icon, title, description }) => {
  return (
    <div className="icon-box">
      <div className="icon-box__icon">
        <i className={icon}></i>
      </div>
      <h3 className="icon-box__title">{title}</h3>
      <p className="icon-box__description">{description}</p>
    </div>
  );
}

export default IconBox;
