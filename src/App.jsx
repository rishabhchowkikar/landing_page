import React from "react";
import DashboardComponent from "./components/DashboardComponent";
import NavbarComponent from "./components/NavbarComponent";
import SidebarComponent from "./components/SidebarComponent";
function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <NavbarComponent />
        <div className="flex flex-col lg:flex-row">
          <SidebarComponent />
          <DashboardComponent />
        </div>
      </div>
    </>
  );
}

export default App;
