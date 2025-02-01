import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "../Layouts/AuthLayout";
import MainLayouts from "../Layouts/MainLayouts";
import ProtectedRoute from "../Components/ProtectedRoute";

// Lazy Load Pages
const HomePage = lazy(() => import("../Pages/Homepage"));
const LoginPage = lazy(() => import("../Pages/LoginPage"));
const Dashboard = lazy(() => import("../Pages/Dashboard"));
const Profile = lazy(() => import("../pages/Profile"));
// const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<MainLayouts />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/:id"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* 404 Page */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
