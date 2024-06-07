import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const navData = [
    {
      title: "About",
      path: "/",
    },
    {
      title: "Skills",
      path: "/skills",
    },
    {
      title: "Projects",
      path: "/projects",
    },
  ];
  return (
    <>
      <nav>
        <div className="nav-container">
          {navData.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <div className="link-text-container">
                <p className="link-text">{item.title}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Nav;
