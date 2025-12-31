import React from "react";
import { NAV_ITEMS } from "../../constants/navigation";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>

      <p>Coded By <span>Ahmed Soliman</span></p>
    </footer>
  );
};

export default Footer;
