import React, { useContext } from "react";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import CartContext from "../../providers/CartContext";
import {
  ShoppingCartIcon,
  UserIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const menuList = [
  { name: "Home", path: "/" },
  { name: "Donna", path: "/donna" },
  { name: "Uomo", path: "/uomo" },
  { name: "Bambini", path: "/bambini" },
];

function Navbar() {
  const { cartCount } = useContext(CartContext);

  return (
    <nav className="flex items-center justify-between p-4 text-white">
      <h1>
        <a href="#">
          <img src={Logo} alt="logo" className="w-32" />
        </a>
      </h1>
      <div>
        <ul className="flex gap-6 pe-5 text-yellow-600">
          {menuList.map((item, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) => (isActive ? "underline" : "")}
                to={item.path}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/whishlist" className="flex items-center">
              <HeartIcon className="w-6 h-6 text-yellow-600" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="flex items-center">
              <UserIcon className="w-6 h-6 text-yellow-600" />
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="relative">
        <NavLink to="/cart" className="flex items-center">
          <ShoppingCartIcon className="w-6 h-6 text-yellow-600" />
          {cartCount > 0 && (
            <div className="absolute top-0 right-0 -translate-x-1/2 translate-y-1/2 bg-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
              {cartCount}
            </div>
          )}
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
