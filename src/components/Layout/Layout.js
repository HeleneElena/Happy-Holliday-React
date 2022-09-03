import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
};

const Layout = () => {
  return (
    <div style={wrapper}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;