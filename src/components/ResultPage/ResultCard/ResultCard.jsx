import './ResultCard.css';

function ResultCard() {
    return (
        <div className="result-card">
            <div className="result-card_header">
                <label className="result-card_date"> date</label>
                <label className="result-card_source"> source</label>
            </div>
            <div className="result-card_title"></div>
            <div className="result-card_news-type"></div>
            <div className="result-card_pic"></div>
            <div className="result-card_text"></div>
            <button className="result-card_btn">Читать в источнике</button>
        </div>
    )
}

export default ResultCard;