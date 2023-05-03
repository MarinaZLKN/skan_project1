import { useDispatch } from "react-redux";

function LogoutButton() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return <button onClick={handleLogout}>Выйти</button>;
}

export default LogoutButton;