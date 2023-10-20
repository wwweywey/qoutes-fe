import "../styles/footer.css";
import React, { useState } from "react";

const Footer = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="footer">
      <h2>Copyright 2023</h2>
      <div>
        <span className="toggle" onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </span>
      </div>
      <ul>
        <li>Facebook</li>
        <li>Github</li>
        <li>Instagram</li>
      </ul>
    </div>
  );
};

export default Footer;
