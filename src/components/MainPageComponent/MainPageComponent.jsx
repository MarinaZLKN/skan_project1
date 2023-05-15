import './MainPageComponent.css';
import Carousel from "../Slider/Slider";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import CardList from "../Card/CardList";


function MainPageComponent (){
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    const cardData = [
        {
            id: 1,
            color: 'yellow',
            border_color: '#FFB64F',
            title: 'Beginner',
            under_text: ' Для небольшого исследования',
            img: '../Card/pirn.png',
            price: '799 ₽',
            price_before: ' 1 200 ₽',
            info: 'или 150 ₽/мес. при рассрочке на 24 мес.',
            label: 'В тариф входят:',
            li: 'Безлимитная история запросов',
            li1: 'Безопасная сделка',
            li2: 'Поддержка 24/7',
        },
        {
            id: 2,
            title: 'Pro',
            color: 'blue',
            border_color: '#7CE3E1',
            under_text: ' Для HR и фрилансоров',
            img: './Card/target.png',
            price: '1 299 ₽',
            price_before: ' 2 600 ₽',
            info: 'или 279 ₽/мес. при рассрочке на 24 мес.',
            label: 'В тариф входят:',
            li: 'Все пункты тарифа Beginner',
            li1: 'Экспорт истории',
            li2: 'Рекомендации по приоритетам'
        },
        {
            id: 3,
            title: 'Business',
            color: 'black',
            border_color: '#000000',
            under_text: ' Для корпоративных клиентов',
            img: 'computer.png',
            price: '2 379 ₽',
            price_before: ' 3 700 ₽',
            info: 'Не имеет рассрочки',
            label: 'В тариф входят:',
            li: 'Все пункты тарифа Pro',
            li1: 'Безлимитное количество запросов',
            li2: 'Приоритетная поддержка'
        },

    ]

    //TODO create a card array with data
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
                    {isAuthenticated ?
                        <div className="btn_main-page">
                            <Link to="/search" id="btn-text">Запросить данные</Link>
                        </div> : null}
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
                <div className="image-elements"></div>

            </div>
            <div className="down-page-content">
               <div className="down-title">
                   <span>Наши тарифы</span>
               </div>
               <div className="tariff-cards">
                   <CardList cardData={cardData}/>
               </div>
            </div>
        </div>
    )
}

export default MainPageComponent;