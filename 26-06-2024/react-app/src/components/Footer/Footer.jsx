import "./Footer.css";
export function Footer() {
  return (
    <>
      <div className="footer-logo">
        <img src="../src/assets/logo.png" alt="logo apple" />
        <div className="container">
          <div className="wrapper"></div>
        </div>
        <MenuList />
      </div>
    </>
  );
}
function MenuList() {
  const menus = [
    {
      id: 1,
      label: "Shop and Learn",
      items: [
        { label: "Company info" },
        { label: "Careers" },
        { label: "Other Stuff" },
      ],
    },

    {
      id: 2,
      label: "Account",
      items: [
        { label: "Company info" },
        { label: "Careers" },
        { label: "Other Stuff", items: [{ label: "Stuff" }] },
      ],
    },

    {
      id: 3,
      label: "Account",
    },
  ];

  return (
    <ul className="menu">
      {menus.map((menu) => (
        <Menu key={menu.id} menu={menu} />
      ))}
    </ul>
  );
}

function Menu(props) {
  const { label, items = [], href = "#" } = props.menu;

  return (
    <li className="item">
      <a href={href}>{label}</a>

      {Boolean(items.length) && (
        <ul>
          {items.map((item, index) => (
            <Menu key={index} menu={item} />
          ))}
        </ul>
      )}
    </li>
  );
}
