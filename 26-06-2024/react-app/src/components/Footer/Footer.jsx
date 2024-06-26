import "./Footer.css";
import { MenuItem } from "../Header/Header";
export function Footer() {
  return (
    <>
      <div className="footer-logo">
        <img src="../src/assets/logo.png" alt="logo apple" />
        <MenuItem label={"Contact"} />
        <MenuItem label={"Careers"} />
        <MenuItem label={"Legal"} />
        <MenuItem label={"United States"} />
      </div>
    </>
  );
}
