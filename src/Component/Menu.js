import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to={"/home"}>
            Omkar Mane
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            {/* justify-content-end */}
            <ul className="navbar-nav me-auto   ">
              <li className="nav-item ">
                <NavLink className="nav-link" to={"/home"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to={"/experience"}>
                  Experience
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to={"/skills"}>
                  Skills
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to={"/academic"}>
                  Academic
                </NavLink>
              </li>

              <li className="nav-item ">
                <NavLink className="nav-link" to={"/projects"}>
                  Projects
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to={"/contact"}>
                  Contact
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item ">
                <NavLink className="nav-link" to={"/github"}>
                  GitHub
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to={"/resumedownload"}>
                  Resume Download
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
