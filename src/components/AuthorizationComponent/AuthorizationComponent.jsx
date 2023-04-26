import './AuthorizationComponent.css';
import {Link} from "react-router-dom";
import MainPageComponent from "../MainPageComponent/MainPageComponent";

function AuthorizationComponent () {
    return (
        <div className="auth-component">
            <div className="wrapper">
                <div className="pic-lock"></div>
                <div className="tabs">
                    <div className="tab">
                        <input type="radio" id="tab1" name="tab-group" checked/>
                            <label htmlFor="tab1" className="tab-title">Войти
                                <div className="auth-separator"></div>
                            </label>

                            <section className="tab-content">
                                <div className="auth-center-side">
                                    <div className="auth-input-title"> Логин или номер телефона:</div>
                                    <input id="input" type="text" size="30"/>
                                    <div className="auth-input-title"> Пароль:</div>
                                    <input id="input" type="password"/>
                                    <div className="auth-button">
                                        <Link to="/" id="auth-text">Войти</Link>
                                    </div>
                                    <div className="auth-restore-pass">
                                        <a href="#" id="text-auth">Восстановить пароль</a>
                                    </div>
                                </div>
                            </section>
                    </div>
                    <div className="tab">
                        <input type="radio" id="tab2" name="tab-group"/>
                            <label htmlFor="tab2"  id="tab-2" className="tab-title">Зарегистрироваться
                                <div className="auth-separator1"></div>
                            </label>
                            <section className="tab-content">Регистрации в задании не было</section>
                    </div>
                </div>
            <div className="auth-lower-side">
                <p id="p">Войти через:</p>
                <div className="auth-logos">
                    <div className="logo-1"></div>
                    <div className="logo-2"></div>
                    <div className="logo-3"></div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default AuthorizationComponent;