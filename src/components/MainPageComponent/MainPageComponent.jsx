import './MainPageComponent.css';
import Carousel from "../Slider/Slider";
import {Link} from "react-router-dom";


function MainPageComponent (){
    return (
        <div className="content">
            <div className="upper-page-content">
                <div className="info-box">
                <div className="main-text">
                    <h1>Сервис по поиску публикаций о компании по его инн</h1>
                </div>
                <div className="under-text">
                    <span>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</span>
                </div>
                <div className="btn_main-page">
                    <Link to="/search" id="btn-text">Запросить данные</Link>
                </div>
            </div>
            <div className="picture"></div>
            </div>

            <div className="middle-page-content">
            <div className="title">
                <span> Почему именно мы</span>
                <div className="slider">
                <Carousel />
            </div>

            </div>


            <div className="image-elements">
            </div>
        </div>
        </div>
    )
}

export default MainPageComponent;