import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RentRoom from "./pages/RentRoom";
import Rooms from "./pages/Rooms";
import TaskPage from "./pages/tasks/TaskPage";

import { Taskprovider } from "./context/TaskContext";
import { RoomProvider } from "./context/RoomContext";
import { ServiceProvider } from "./context/ServiceContext";

import RoomFormPage from "./pages/rooms/RoomFormPage";
import ServiceFormPage from "./pages/servicios/ServiceFormPage";

import AdminPage from "./pages/administrador/AdminPage";
// import RegisterPage from "./pages/RentRoom";

//imports for Auths
import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from './ProtectetRoute'

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <AuthProvider>
      <RoomProvider>
        <ServiceProvider>
          <Taskprovider>
            <BrowserRouter>
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="container">
                      <Navbar
                        sidebarOpen={sidebarOpen}
                        openSidebar={openSidebar}
                      />
                      <Main />
                      <Sidebar
                        sidebarOpen={sidebarOpen}
                        closeSidebar={closeSidebar}
                      />
                    </div>
                  }
                />

                <Route
                  path="/register"
                  element={
                    <div className="auth__container">
                      <RegisterPage />
                    </div>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <div className="auth__container">
                      <LoginPage />
                    </div>
                  }
                />
                <Route element={<ProtectedRoute/>}>
                  <Route
                    path="/rentRoom"
                    element={
                      <div className="container">
                        <Navbar
                          sidebarOpen={sidebarOpen}
                          openSidebar={openSidebar}
                        />
                        <RentRoom />
                        <Sidebar
                          sidebarOpen={sidebarOpen}
                          closeSidebar={closeSidebar}
                        />
                      </div>
                    }
                  />
                  <Route
                    path="/admin-rooms"
                    element={
                      <div className="container">
                        <Navbar
                          sidebarOpen={sidebarOpen}
                          openSidebar={openSidebar}
                        />
                        <Rooms />
                        <Sidebar
                          sidebarOpen={sidebarOpen}
                          closeSidebar={closeSidebar}
                        />
                      </div>
                    }
                  />
                  <Route
                    path="/tasks"
                    element={
                      <div className="container">
                        <Navbar
                          sidebarOpen={sidebarOpen}
                          openSidebar={openSidebar}
                        />
                        <Sidebar
                          sidebarOpen={sidebarOpen}
                          closeSidebar={closeSidebar}
                        />

                        <TaskPage />
                      </div>
                    }
                  />

                  <Route
                    path="/add-room"
                    element={
                      <div className="container">
                        <Navbar
                          sidebarOpen={sidebarOpen}
                          openSidebar={openSidebar}
                        />
                        <Sidebar
                          sidebarOpen={sidebarOpen}
                          closeSidebar={closeSidebar}
                        />
                        <RoomFormPage />
                      </div>
                    }
                  />

                  <Route
                    path="/admin"
                    element={
                      <div className="container">
                        <Navbar
                          sidebarOpen={sidebarOpen}
                          openSidebar={openSidebar}
                        />
                        <Sidebar
                          sidebarOpen={sidebarOpen}
                          closeSidebar={closeSidebar}
                        />
                        <AdminPage />
                      </div>
                    }
                  />

                  <Route
                    path="/add-service"
                    element={
                      <div className="container">
                        <Navbar
                          sidebarOpen={sidebarOpen}
                          openSidebar={openSidebar}
                        />
                        <Sidebar
                          sidebarOpen={sidebarOpen}
                          closeSidebar={closeSidebar}
                        />
                        <ServiceFormPage />
                      </div>
                    }
                  />
                </Route>
              </Routes>
            </BrowserRouter>
          </Taskprovider>
        </ServiceProvider>
      </RoomProvider>
    </AuthProvider>
  );
};

export default App;
