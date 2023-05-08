import { useDispatch } from "react-redux";
import './Header.css'
function LogoutButton() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return <button className="logout-btn_style" onClick={handleLogout}>Выйти</button>;
}

export default LogoutButton;