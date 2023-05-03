import './Header.css'
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {

    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    const token = useSelector((state) => state.token);

  return (
      <div className="header">
              <div className="image"></div>
              <div className="menu">
                  <Link to="/" className="main"> Главная </Link>
                  <label className="tarif"> Тарифы </label>
                  <label className="faq"> FAQ </label>
              </div>
              <div className="side-menu">
                  <label className="register-name"> Зарегистрироваться</label>
                  <div className="separator"></div>
                  <Link to="/auth">
                      <button className="header-btn" id="header-btn-text">Войти</button>
                  </Link>
              </div>
          </div>
  );
}

export default Header;
