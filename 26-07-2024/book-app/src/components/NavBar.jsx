import React from "react";
import { NavLink } from "react-router-dom";
import { labels } from "../data/labels";
import Logo from "../assets/1.png";

const menuList = [{ name: labels.navHome, path: "/" }];

const NavBar = () => {
  return (
    <nav className="bg-primary-beige border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <NavLink to={"/"}>
          <img
            src={Logo}
            className="flex items-center space-x-3 rtl:space-x-reverse h-40"
            alt="Book Club Logo"
          />
        </NavLink>
        <div className="md:flex md:items-center md:justify-between">
          <ul className="flex gap-7 items-center">
            {menuList.map((item, index) => (
              <li key={index}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-bold underline" : ""
                  }
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
