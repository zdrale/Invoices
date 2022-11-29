import React from "react";
import "./module.navigation.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navigation = ({ active }) => {
  const [style, setStyle] = useState("active");

  const setActive = () => {
    if (active == "invoice") {
      setStyle("active");
    }
  };

  return (
    <div className="navigation">
      <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li onClick={setActive} className={style}>
            Invoices
          </li>
        </Link>

        <Link to="/sellers" style={{ textDecoration: "none" }}>
          <li onClick={setActive} className={style}>
            Sellers
          </li>
        </Link>
        <Link to="/customers" style={{ textDecoration: "none" }}>
          <li onClick={setActive} className={style}>
            Customers
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
