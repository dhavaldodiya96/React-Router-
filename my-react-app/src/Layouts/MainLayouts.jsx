import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayouts = () => {
  return (
    <div className="app-container">
      {/* <Sidebar /> */}
      <div className="main-content">
        <Header />
        <Outlet /> {/* Renders child route components */}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayouts;
