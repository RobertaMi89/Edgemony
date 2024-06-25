export function Header() {
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="logo">
            <img src="./src/assets/logo.png" alt="logo apple" />
          </div>
          <Menu></Menu>
        </div>
      </div>
    </header>
  );
}
export function Menu() {
  return (
    <nav className="nav">
      <ul className="list">
        <MenuItem label={"About us"} />
        <MenuItem label="Blog" />
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
