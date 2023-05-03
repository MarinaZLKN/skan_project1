import './Header.css'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import LogoutButton from "./LogoutButton";
import {useSelector} from "react-redux";

function Header() {
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    const token = useSelector((state) => state.token);
    const [accountInfo, setAccountInfo] = useState(null);

    useEffect(() => {
        console.log('privet')
        if (isAuthenticated) {
            axios.get("https://gateway.scan-interfax.ru/api/v1/account/info", {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
            }).then(response => {
                setAccountInfo(response.data);
                console.log(response.data)
                console.log(accountInfo)
            }).catch(error => {
                console.error(error);
                });
            }
    }, [isAuthenticated]);


    return (
        <div className="header">
            <div className="image"></div>
            <div className="menu">
                <Link to="/" className="main"> Главная </Link>
                <label className="tarif"> Тарифы </label>
                <label className="faq"> FAQ </label>
            </div>
            {isAuthenticated ? (
                <div className="side-menu-auth">
                    {accountInfo && (
                        <div className="tariff-info-auth">
                            <p className="tariff-used">Использовано компаний</p>
                            <p className="tariff-limit">Лимит по компаниям </p>
                        </div>
                    )}

                <div className="account-info">
                    <p className="account-name">Алексей А.</p>
                    <div className="logout-btn">
                        <LogoutButton/>
                    </div>
                    <div className="account-pic"></div>
                </div>
            </div>
            ) : (
                <div className="side-menu">
                <label className="register-name"> Зарегистрироваться</label>
                <div className="separator"></div>
                <Link to="/auth">
                    <button className="header-btn" id="header-btn-text">Войти</button>
                </Link>
            </div>
            )}

        </div>
  );
}

export default Header;
