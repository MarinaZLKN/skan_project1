import './CardPro.css';

function Card () {
    return (
        <div className="tariff-card">
            <div className="card-wrapper">
                <div className="card-upper-side_pro">
                    <div className="title-part">
                        <p className="card-title">Pro</p>
                        <p className="card-title_info">Для HR и фрилансеров</p>
                    </div>
                    <div className="card-logo_pro"></div>
                </div>
                <div className="card-content">
                    <div className="card-prices">
                        <p className="card-prices_title">
                            <span>1 299 ₽</span>
                            <span id="price-prev"> 2 600 ₽</span>
                        </p>
                        <p className="card-prices_title-info">или 279 ₽/мес. при рассрочке на 24 мес.</p>
                    </div>
                    <div className="card-list">
                        <p>В тариф входят:</p>
                        <ul>
                            <li>Все пункты тарифа Beginner</li>
                            <li>Экспорт истории</li>
                            <li>Рекомендации по приоритетам</li>
                        </ul>
                    </div>
                    <button className="card-btn">Подробнее</button>
                </div>
            </div>
        </div>
    )
}
export default Card;