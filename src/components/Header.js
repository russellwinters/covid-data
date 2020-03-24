import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <h3>COVID Data</h3>
      </Link>
      {/* <span className="header__tag">Made with ♥ in Vancouver</span> */}
    </header>
  );
}
