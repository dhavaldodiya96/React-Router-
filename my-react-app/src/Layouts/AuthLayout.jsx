import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="auth-container">
      <h2>Welcome to My App</h2>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
