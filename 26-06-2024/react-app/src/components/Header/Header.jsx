import "./Header.css";
export function Header() {
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="logo">
            <img src="../src/assets/logo.png" alt="logo apple" />
          </div>
          <Menu />
        </div>
      </div>
    </header>
  );
}
function Menu() {
  const items = [
    { label: "About us" },
    { label: "Blog", href: "https://google.it" },
    { label: "Shop" },
  ];

  return (
    <nav className="nav">
      <ul className="list">
        {items.map((item, index, array) => (
          <MenuItem
            key={`${item.label}-${index}`}
            label={item.label}
            href={item.href}
          />
        ))}
      </ul>
    </nav>
  );
}

export function MenuItem(props) {
  const { label, href = "#" } = props;
  return (
    <li className="item">
      <a href="#">{label}</a>
    </li>
  );
}
