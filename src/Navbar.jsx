import React, { useState } from "react";
import "/styles/Navbar.css";
import { FaShoppingCart, FaClipboardList } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="/">Smile</a>
      </div>

      {/* Search Bar for Desktop */}
      <div className="navbar__search navbar__search--desktop">
        <input
          type="text"
          placeholder="Search products, 3D views & more..."
        />
        <button type="submit">Search</button>
      </div>

      <button className="navbar__toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div className={`navbar__menu ${menuOpen ? "active" : ""}`}>
        {/* Search Bar for Mobile */}
        <div className="navbar__search navbar__search--mobile">
          <input
            type="text"
            placeholder="Search products, 3D views & more..."
          />
          <button type="submit">Search</button>
        </div>
        <ul>
          <li>
            <a href="/" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="/orders" onClick={() => setMenuOpen(false)}>
              <FaClipboardList />
              <span>Orders</span>
            </a>
          </li>
          <li>
            <a href="/cart" onClick={() => setMenuOpen(false)}>
              <FaShoppingCart />
              <span>Cart</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;