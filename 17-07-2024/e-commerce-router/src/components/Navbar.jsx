import Logo from "../assets/logo.png";
const menuList = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contacts", path: "/contacts" },
];

function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <h1>
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
      </h1>
      <div>
        <ul className="flex gap-6">
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
