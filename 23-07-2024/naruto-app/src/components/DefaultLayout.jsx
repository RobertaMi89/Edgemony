import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";

function DefaultLayout() {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default DefaultLayout;
