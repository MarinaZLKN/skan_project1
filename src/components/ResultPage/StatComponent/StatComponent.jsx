import './StatComponent.css';
import DataSlider from "../DataSlider/DataSlider";


function StatComponent () {
    return (
        <div>
            <div className="stat-component_title">Общая сводка</div>
            <div className="stat-component_total-amount"> Найдено вариантов</div>
            <DataSlider />
        </div>
    )
}

export default StatComponent;