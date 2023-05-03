import './AuthorizationComponent.css';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {useDispatch} from "react-redux";



function AuthorizationComponent () {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const [accountInfo, setAccountInfo] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        //чтобы страница не обоновлялась
        e.preventDefault()
        try {
            const response = await axios.post(
                "https://gateway.scan-interfax.ru/api/v1/account/login",
                {login, password},
                {
                    headers: {
                        "Content-type": "application/json",
                        Accept: "application/json",
                    },
                }
            );
            const { accessToken, expire } = response.data;
            dispatch({ type: "LOGIN_SUCCESS", payload: { token: accessToken } });
            console.log('accessToken', accessToken)
            console.log('expire', expire)
            navigate('/');
            if (accessToken) {
                localStorage.setItem("accessToken", accessToken);
            } else {
                setError("Access token did not found");
            }
        } catch (err) {
            setError(err.response.data.message)
        }
    };

    //функция получания инфы работает, но возвращает 401, поскольку мы еще не авторизированы
    // useEffect(() => {
    //     axios.get('https://gateway.scan-interfax.ru/api/v1/account/info')
    //         .then(response => {
    //         setAccountInfo(response.data);
    //         console.log(response.data)
    //     })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }, []);


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
                                <form className="auth-center-side">
                                    <div className="auth-input-title"> Логин или номер телефона:</div>
                                    <input onChange={(e)=> setLogin(e.target.value)} value={login} id="input-1" type="text" size="30"/>
                                    <div className="auth-input-title"> Пароль:</div>
                                    <input onChange={(e) => setPassword(e.target.value)} value={password} id="input" type="password"/>
                                    <button onClick={handleLogin} type="submit" id="auth-text" className="auth-button"> Войти </button>
                                    <div className="auth-restore-pass">
                                        <a href="#" id="text-auth">Восстановить пароль</a>
                                    </div>
                                </form>
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