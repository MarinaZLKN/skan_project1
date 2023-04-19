
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPageComponent from "./components/MainPageComponent/MainPageComponent";


function App() {
  return (
    <div className="app">
        <Header />
        <MainPageComponent />
        <Footer />
    </div>
  );
}

export default App;
