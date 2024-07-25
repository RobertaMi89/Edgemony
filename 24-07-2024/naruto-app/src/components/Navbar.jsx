import { NavLink } from "react-router-dom";
import logo from "../assets/narutologo.png";
import { labels } from "../data/labels";

const menuList = [{ name: labels.navHome, path: "/" }];

function Navbar() {
  return (
    <nav className="flex items-center justify-between  bg-black">
      <h1>
        <img src={logo} alt="logo" className="w-44 m-5" />
      </h1>
      <div>
        <ul className="flex gap-6 pe-5 text-yellow-600">
          {menuList.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  className={({ isActive }) => (isActive ? "underline" : "")}
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
