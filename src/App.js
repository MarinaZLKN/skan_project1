
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPageComponent from "./components/MainPageComponent/MainPageComponent";
import AuthorizationPage from "./components/AuthorizationPage/AuthorizationPage";
import SearchPage from "./components/SearchPage/SearchPage";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="app">
        <Header />
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
