
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPageComponent from "./components/MainPageComponent/MainPageComponent";
import AuthorizationPage from "./components/AuthorizationPage/AuthorizationPage";


function App() {
  return (
    <div className="app">
        <Header />
        {/*<MainPageComponent />*/}
        <AuthorizationPage />
        <Footer />
    </div>
  );
}

export default App;
