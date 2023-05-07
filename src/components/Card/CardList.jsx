
import CardNew from "./CardNew";
import {useState} from "react";
import "./CardList.css";

const CardList = ({ cardData }) => {

  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCardId(cardId);
  };

  return (
      <div className="card-list-wrapper">
        {cardData.map((card) => (
          <CardNew
            key={card.id}
            title={card.title}
            under_text={card.under_text}
            price={card.price}
            price_before={card.price_before}
            info={card.info}
            label={card.label}
            li={card.li}
            li1={card.li1}
            li2={card.li2}
            color={card.color}
            border_color={card.border_color}
            logo={card.logo}
            selected={selectedCardId === card.id}
            handleCardClick={() => handleCardClick(card.id)}
          />
        ))}
    </div>
  );
};

export default CardList;