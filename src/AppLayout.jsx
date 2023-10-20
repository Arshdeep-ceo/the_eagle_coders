import { Outlet } from "react-router-dom";
import AppBar from "./ui/components/home/AppBar";
import { useState } from "react";

function AppLayout() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div>
      <AppBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Outlet />
    </div>
  );
}

export default AppLayout;
