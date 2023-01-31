import { useState } from "react";
import { GiHamburger } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";

function HamburgerMenu() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <h1>Hamburger Menu</h1>
      <h2 className="desktop">Click Hamburger Logo</h2>
      <h2 className="mobile">Tap Hamburger Logo</h2>
      <nav className="nav-bar">
        <button onClick={handleToggle}>
          {navbarOpen ? (
            <GrClose style={{ width: "40px", height: "40px" }} />
          ) : (
            <GiHamburger style={{ width: "60px", height: "60px" }} />
          )}
        </button>
        <ul className={`menu-nav ${navbarOpen ? " show-menu" : ""}`}>
          <li>
            <NavLink
              to="/pageone"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Page One
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pagetwo"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Page Two
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pagethree"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Page Three
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HamburgerMenu;
