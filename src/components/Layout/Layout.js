import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useSelector } from 'react-redux';

const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
};

const btn = {
    display: 'block',
    margin: '20px auto',
    textDecoration: 'underline',
    color: '#00C78B',
};

const Layout = () => {
  const {text: {idText}, image: {idImg}} =useSelector(state => state);

  return (
    <div style={wrapper}>
      <Header />
      <Outlet />
      { idText && idImg && (
        <Link style={btn}
              to={`${idText}/${idImg}`}>
          Поделиться открыткой
        </Link>
      )

        }
      }
      <Footer />
    </div>
  );
}

export default Layout;