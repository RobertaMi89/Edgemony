import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../providers/ProductContext";
import CartContext from "../providers/CartContext";

const menuList = [
  { name: "Home", path: "/" },
  { name: "Donna", path: "/donna" },
  { name: "Uomo", path: "/uomo" },
  { name: "Bambini", path: "/bambini" },
  { name: "Login", path: "/login" },
  { name: "Whislist", path: "/whishlist" },
  { name: "Cart", path: "/cart" },
];

function Navbar() {
  const { cartCount } = useContext(CartContext);

  return (
    <nav className="flex items-center justify-between ">
      <h1>
        <a href="#">
          <img src={Logo} alt="logo" className="w-32" />
        </a>
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
      <div className="bg-green-400 w-12 h-12 rounded-full flex justify-center items-center">
        {cartCount}
      </div>
    </nav>
  );
}

export default Navbar;
