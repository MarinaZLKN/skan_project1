import './ResultPage.css';

import StatComponent from "./StatComponent/StatComponent";


function ResultPage ({props}) {
    console.log("ResultPage", props)
    return(
        <>
            <div className="result-content">
                <div className="result-static">
                    <div className="result-static_left">
                        <h1 className="result-static_main-title">Ищем. Скоро будут результаты</h1>
                        <span className="result-static_span">Поиск может занять некоторое время, просим сохранять терпение.</span>
                    </div>
                    <div className="result-static_pic"></div>
                </div>
            </div>
            <StatComponent data={props}/>
        </>

    )
}

export default ResultPage;