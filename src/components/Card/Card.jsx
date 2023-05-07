import './Card.css';
import {useEffect, useState} from "react";

function Card () {


    const [selected, setSelected] = useState(false);
    const [buttonStyle, setButtonStyle] = useState(null);
    const [buttonText, setButtonText] = useState('Подробнее');

    const handleCardClick = () => {
        setSelected(!selected);
        setButtonText(buttonText === 'Подробнее' ? 'Перейти в личный кабинет' : 'Подробнее');
    };

    useEffect(() => {
        if (selected) {
            setButtonStyle({ backgroundColor: '#D2D2D2', color: 'black' });
        } else {
            setButtonStyle({ backgroundColor: '#5970FF', color: 'white' });
        }
    }, [selected]);



    return (
        <div className={`tariff-card ${selected ? 'selected' : ''}`} onClick={handleCardClick}>
            <div className="card-wrapper">
                <div className="card-upper-side">
                    <div className="title-part">
                        <p className="card-title">Beginner</p>
                        <p className="card-title_info">Для небольшого исследования</p>
                    </div>
                    <div className="card-logo"></div>
                </div>
                <div className="card-content">
                    {selected && (
                        <div className="additional-btn">Текущий тариф</div>
                    )}
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
                    <button className="card-btn" style={buttonStyle} onClick={handleCardClick}>{buttonText}</button>
                </div>
            </div>
        </div>
    )
}
export default Card;


// {`tariff-card ${selected ? 'selected'  : ''}`} onClick={handleCardClick}