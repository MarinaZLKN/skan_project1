import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPageComponent from "./components/MainPageComponent/MainPageComponent";
import AuthorizationPage from "./components/AuthorizationPage/AuthorizationPage";
import SearchPage from "./components/SearchPage/SearchPage";
import {Route, Routes} from "react-router-dom";
import {useState} from "react";


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
    <div className="app">
        <Header isAuthenticated={isAuthenticated}/>
        <Routes>
            <Route path="/" element={<MainPageComponent />} />
            <Route path="/auth" element={<AuthorizationPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/" element={<MainPageComponent />} />
        </Routes>

        <Footer />
    </div>
  );

}

export default App;
