import './Card.css';

const CardNew = ({ title, under_text, price, price_before, info, label, li,li1, li2, selected, color, border_color, logo, handleCardClick }) => {
  const buttonStyle = selected ? { backgroundColor: '#D2D2D2', color: 'black' } : {};
  const borderStyle = selected ? { border: `2px solid ${border_color}`} : {};
  const titleColor =  "card-upper-side.black" ? {color: 'white'} : {};

  return (
      <div className="tariff-card" style={borderStyle} onClick={handleCardClick}>
        <div className="card-wrapper">
          <div className={`card-upper-side ${color}`} style={titleColor}>
            <div className="title-part">
              <p className="card-title" style={titleColor}>{title}</p>
              <p className="card-title_info" >{under_text}</p>
            </div>
            <div className="card-logo">
              <img src={logo} alt="no picture"/>
            </div>
          </div>
          <div className="card-content">
            {selected && (
              <div className="additional-btn">Текущий тариф</div>
            )}
            <div className="card-prices">
              <p className="card-prices_title">
                <span>{price}</span>
                <span id="price-prev">{price_before}</span>
              </p>
              <p className="card-prices_title-info">{info}</p>
            </div>
            <div className="card-list">
              <p>{label}</p>
              <ul>
                <li>{li}</li>
                <li>{li1}</li>
                <li>{li2}</li>
              </ul>
            </div>
            <button className="card-btn" style={buttonStyle} onClick={handleCardClick}>
              {selected ? 'Перейти в личный кабинет' : 'Подробнее'}
            </button>
          </div>
        </div>
    </div>
  );
};

export default CardNew;