import './CardBusiness.css';

function Card () {
    return (
        <div className="tariff-card">
            <div className="card-wrapper">
                <div className="card-upper-side_bus">
                    <div className="title-part">
                        <p className="card-title_bus">Business</p>
                        <p className="card-title_info_bus">Для корпоративных клиентов</p>
                    </div>
                    <div className="card-logo_bus"></div>
                </div>
                <div className="card-content">
                    <div className="card-prices">
                        <p className="card-prices_title">
                            <span>2 379 ₽</span>
                            <span id="price-prev"> 3 700 ₽</span>
                        </p>

                    </div>
                    <div className="card-list_bus">
                        <p>В тариф входят:</p>
                        <ul>
                            <li>Все пункты тарифа Pro</li>
                            <li>Безлимитное количество запросов</li>
                            <li>Приоритетная поддержка</li>
                        </ul>
                    </div>
                    <button className="card-btn">Подробнее</button>
                </div>
            </div>
        </div>
    )
}
export default Card;