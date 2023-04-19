import './Header.css'

function Header() {
  return (
      <div className="header">
              <div className="image"></div>
              <div className="menu">
                  <label className="main"> Главная </label>
                  <label className="tarif"> Тарифы </label>
                  <label className="faq"> FAQ </label>
              </div>
              <div className="side-menu">
                  <label className="register-name"> Зарегистрироваться</label>
                  <div className="separator"></div>
                  <button className="btn">Войти</button>
              </div>
          </div>
  );
}

export default Header;
