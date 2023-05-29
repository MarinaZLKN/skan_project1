import './StatComponent.css';
import DataSlider from "../DataSlider/DataSlider";


function StatComponent ({data}) {

    return (
        <div>
            <div className="stat-component_title">Общая сводка</div>
            <div className="stat-component_total-amount"> Найдено bvncnnc  вариантов</div>
            <DataSlider data={data} />
        </div>
    )
}

export default StatComponent;