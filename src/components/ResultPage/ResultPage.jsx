import './ResultPage.css';
import StatComponent from "./StatComponent/StatComponent";
import {useLocation} from "react-router-dom";
import ResultCard from "./ResultCard/ResultCard";


function ResultPage () {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const dataParam = searchParams.get('data');
    const data = dataParam ? JSON.parse(decodeURIComponent(dataParam)) : null;
    console.log("New approach: ", data)

    if (!data) {
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
            {/*<StatComponent data={data}/>*/}
            {/*<ResultCard/>*/}
        </>
    )
    }
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
                <StatComponent data={data}/>
                <ResultCard/>
            </>

        )
}

export default ResultPage;