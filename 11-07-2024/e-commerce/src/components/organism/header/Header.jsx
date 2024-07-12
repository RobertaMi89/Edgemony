import styles from "./header.module.css";
import NavBar from "../../molecules/navbar/NavBar";

function Header({ count }) {
  return (
    <header>
      <NavBar count={count} />
    </header>
  );
}

export default Header;
