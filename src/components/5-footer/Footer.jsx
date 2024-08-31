import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#up">About</a>
        </li>
        <li>
          <a href="#projs">Projects</a>
        </li>
      </ul>

      <p>Coded By <span>Ahmed Soliman</span></p>
    </footer>
  );
};

export default Footer;
