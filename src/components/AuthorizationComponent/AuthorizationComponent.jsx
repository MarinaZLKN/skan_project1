import './AuthorizationComponent.css';

function AuthorizationComponent () {
    return (
        <div className="auth-component">
            <div className="wrapper">
                <div className="pic-lock"></div>
            <div className="auth-upper-side">
                <div className="auth-enter_div">
                    <a id="auth-enter">Войти</a>
                <div className="auth-separator"></div>
                </div>
                <div className="auth-reg">
                    <a id="auth-reg">Зарегистрироваться</a>
                <div className="auth-separator1"></div>
                </div>
            </div>
            <div className="auth-center-side">
                <div className="auth-input-title"> Логин или номер телефона:</div>
                <input id="input" type="text" size="30"/>
                <div className="auth-input-title"> Пароль:</div>
                <input id="input" type="password"/>
                <div className="auth-button">
                    <a href="#" id="auth-text">Войти</a>
                </div>
                {/*<button className="auth-button"><span id="auth-text">Войти</span></button>*/}
                <div className="auth-restore-pass">
                    <a href="#" id="text-auth">Восстановить пароль</a>
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