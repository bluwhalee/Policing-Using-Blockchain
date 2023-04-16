import React, {useState, useEffect} from 'react';
import '../styles/header.css';
import jwtDecode from 'jwt-decode';

const Header = () => {
  const [signedin, setSignedin] = useState(false);
  const handleSignOut = () => {
    localStorage.clear();
    setSignedin(false)
    window.location.reload(false);
  };
  
  
  
  return (
    <header className="header">
      <div className="header__title">PoliceChain</div>
      { localStorage.getItem('user')? 
      <button className="header__sign-out-btn" onClick={handleSignOut}>
        Sign Out
      </button>:null}
    </header>
  );
};

export default Header;
