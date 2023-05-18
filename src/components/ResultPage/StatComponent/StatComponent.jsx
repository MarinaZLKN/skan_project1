import './StatComponent.css';
import DataSlider from "../DataSlider/DataSlider";
import {useLocation} from "react-router-dom";


function StatComponent () {

    const location = useLocation();
    const data = location.state?.data;
    return (
        <div>
            <div className="stat-component_title">Общая сводка</div>
            <div className="stat-component_total-amount"> Найдено вариантов</div>
            <DataSlider data={data} />
        </div>
    )
}

export default StatComponent;