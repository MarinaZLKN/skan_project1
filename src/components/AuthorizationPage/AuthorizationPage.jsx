import './AuthorizationPage.css';
import AuthorizationComponent from "../AuthorizationComponent/AuthorizationComponent";

function AuthorizationPage () {
    return (
        <div className="auth-content">
            <div className="auth-left_side-content">
                <div className="auth-title">
                    <span>Для оформления подписки на тариф, необходимо авторизироваться</span>
                </div>
                <div className="auth-image"></div>
            </div>
            <div className="auth-form">
                <AuthorizationComponent />
            </div>

        </div>
    )
}

export default AuthorizationPage;