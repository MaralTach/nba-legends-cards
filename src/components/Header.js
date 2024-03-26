import React from "react";
import Logo from "./assets/nba-logo.png";

const Header = () => {
  return (
    <div>
    
    <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <h2>NBA-Legends</h2>

      
    </div>
  );
};

export default Header;
