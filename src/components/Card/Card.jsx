import './Card.css';

function Card () {


    return (
        <div className="tariff-card">
            <div className="card-wrapper">
                <div className="card-upper-side">
                    <div className="title-part">
                        <p className="card-title">Beginner</p>
                        <p className="card-title_info">Для небольшого исследования</p>
                    </div>
                    <div className="card-logo"></div>
                </div>
                <div className="card-content">
                    <div className="card-prices">
                        <p className="card-prices_title">
                            <span>799 ₽</span>
                            <span id="price-prev"> 1 200 ₽</span>
                        </p>
                        <p className="card-prices_title-info">или 150 ₽/мес. при рассрочке на 24 мес.</p>
                    </div>
                    <div className="card-list">
                        <p>В тариф входят:</p>
                        <ul>
                            <li>Безлимитная история запросов</li>
                            <li>Безопасная сделка</li>
                            <li>Поддержка 24/7</li>
                        </ul>
                    </div>
                    <button className="card-btn">Подробнее</button>
                </div>
            </div>
        </div>
    )
}
export default Card;