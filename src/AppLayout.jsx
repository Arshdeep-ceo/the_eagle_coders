import { Outlet } from "react-router-dom";
import AppBar from "./ui/components/home/AppBar";

function AppLayout() {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
