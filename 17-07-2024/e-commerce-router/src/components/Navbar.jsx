import Logo from "../assets/logo.png";

const menuList = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contacts", path: "/contacts" },
  { name: "Cart", path: "/cart" },
];

function Navbar() {
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
                <a href={item.path}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
