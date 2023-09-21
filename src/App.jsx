import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RentRoom from "./pages/RentRoom";
import Rooms from "./pages/Rooms";
import TaskPage from "./pages/tasks/TaskPage";

//context
import { AuthProvider } from "./context/AuthContext";
import { Taskprovider } from "./context/TaskContext";
import { RoomProvider } from "./context/RoomContext";
import { ServiceProvider } from "./context/ServiceContext";
import { ResumeServiceTurnoProvider } from "./context/ResumeServiceTurnoContext";
import { SaleProvider } from "./context/SaleContext";
import { ProductProvider } from "./context/ProductContext";

//pages
import RoomFormPage from "./pages/rooms/RoomFormPage";
import ServiceFormPage from "./pages/servicios/ServiceFormPage";
import SaleFormPage from "./pages/sales/SaleFormPage";
import AddProductPage from "./pages/products/AddProductPage";
import ProductPage from "./pages/products/ProductPage";

import AdminPage from "./pages/administrador/AdminPage";
import AdminReceptionPage from "./pages/adminTurnoRecepcionista/AdminTurnoRecepcionistaPage";
import EntregaReceptionPage from "./pages/adminTurnoRecepcionista/EntregaTurnoRecepcionistaPage";
// import RegisterPage from "./pages/RentRoom";

//imports for Auths
import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";

import ProtectedRoute from "./ProtectetRoute";

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
        <ProductProvider>
          <SaleProvider>
            <ResumeServiceTurnoProvider>
              <ServiceProvider>
                <Taskprovider>
                  <BrowserRouter>
                    <Routes>
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
                      <Route element={<ProtectedRoute />}>
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
                          path="/admin-reception"
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
                              <AdminReceptionPage />
                            </div>
                          }
                        />

                        <Route
                          path="/entrega-reception"
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
                              <EntregaReceptionPage />
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

                        <Route
                          path="/add-sale"
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
                              <SaleFormPage />
                            </div>
                          }
                        />

                        <Route
                          path="/add-product"
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
                              <AddProductPage />
                            </div>
                          }
                        />

                        <Route
                          path="/products"
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
                              <ProductPage />
                            </div>
                          }
                        />
                        <Route
                          path="/products/:id"
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
                              <AddProductPage />
                            </div>
                          }
                        />
                      </Route>
                    </Routes>
                  </BrowserRouter>
                </Taskprovider>
              </ServiceProvider>
            </ResumeServiceTurnoProvider>
          </SaleProvider>
        </ProductProvider>
      </RoomProvider>
    </AuthProvider>
  );
};

export default App;
