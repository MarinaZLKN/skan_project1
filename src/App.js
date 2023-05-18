import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPageComponent from "./components/MainPageComponent/MainPageComponent";
import AuthorizationPage from "./components/AuthorizationPage/AuthorizationPage";
import SearchPage from "./components/SearchPage/SearchPage";
import {Route, Routes} from "react-router-dom";
import {useState} from "react";
import ResultPage from "./components/ResultPage/ResultPage";


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
    <div className="app">
        <header>
            <Header isAuthenticated={isAuthenticated}/>
        </header>
        <main>
             <Routes>
                <Route path="/" element={<MainPageComponent />} />
                <Route path="/auth" element={<AuthorizationPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/" element={<MainPageComponent />} />
                <Route path="/resultpage" element={<ResultPage/>} />
            </Routes>
        </main>
        <footer>
             <Footer />
        </footer>

    </div>
  );

}

export default App;
