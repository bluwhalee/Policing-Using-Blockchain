import React from 'react';
import '../../styles/IconBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { redirect } from 'react-router-dom';

const IconBox = ({ url, title, icon, description }) => {

  const url1 = "http://localhost:5173"+ url;

  return (
    <div className="icon-box">
      <div className="icon">
        <FontAwesomeIcon icon={icon} />
        <FontAwesomeIcon icon="fa-solid fa-house" />
      </div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <a href={url1}>
        <button className="button">Click Here</button>
      </a>
    </div>
  );
}

export default IconBox;