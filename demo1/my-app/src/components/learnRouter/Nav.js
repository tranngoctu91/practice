import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <Outlet></Outlet>
      <div>
        <div>
          <NavLink
            className={({ isActive }) => (isActive ? "green" : "")}
            to="/"
          >
            home
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) => (isActive ? "green" : "")}
            to="/count"
          >
            count
          </NavLink>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Nav;
