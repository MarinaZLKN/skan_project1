import './ResultPage.css';


function ResultPage () {
    return(
        <div className="result-content">
            <div className="result-static">
                <div className="result-static_left">
                    <h1 className="result-static_main-title">Ищем. Скоро будут результаты</h1>
                    <span className="result-static_span">Поиск может занять некоторое время, просим сохранять терпение.</span>
                </div>
                <div className="result-static_pic"></div>
            </div>

        </div>
    )
}

export default ResultPage;