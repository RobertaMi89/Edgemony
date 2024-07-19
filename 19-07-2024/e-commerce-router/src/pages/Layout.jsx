import { Outlet } from "react-router-dom";
import NavBar from "../components/molecules/Navbar";

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
