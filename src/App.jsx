import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RentRoom from "./pages/RentRoom";
import Rooms from "./pages/Rooms";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
              <Main />
              <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
            </div>
          }
        />
        <Route
          path="/rentRoom"
          element={
            <div className="container">
              <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
              <RentRoom />
              <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
            </div>
          }
        />
        <Route
          path="/rooms"
          element={
            <div className="container">
              <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
              <Rooms />
              <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
