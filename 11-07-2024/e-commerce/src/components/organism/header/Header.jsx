import styles from "./header.module.css";
import NavBar from "../../molecules/navbar/NavBar";

function Header({ count }) {
  return (
    <div>
      <NavBar count={count} />
    </div>
  );
}

export default Header;
