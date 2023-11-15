import { Outlet } from "react-router-dom";
import AppBar from "./ui/components/home/AppBar";
import { useState } from "react";
import ScrollToTop from "./ui/components/ScrollToTop/ScrollToTop";

function AppLayout() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div>
      <ScrollToTop />
      <AppBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Outlet context={[setCurrentTab]}></Outlet>
    </div>
  );
}

export default AppLayout;
