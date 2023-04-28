import {makeAutoObservable, makeObservable} from "mobx";
import AuthService from "../services/AuthService";

export default class Store {
    //принимает значение true, если авторизированы и false, если нет
    isAuth = false;

    constructor(){
        makeAutoObservable(this);
    }

    //заменяем текущее значение в параметрах
    setAuth(bool){
        this.isAuth = bool;
    }

    async login(username, password) {
        try {
            const response = await AuthService.login(username, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}