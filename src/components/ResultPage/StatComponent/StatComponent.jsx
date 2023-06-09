import './StatComponent.css';
import DataSlider from "../DataSlider/DataSlider";


function StatComponent ({data}) {

    console.log('StatComp:', data)
     if (!data || !data.data || data.data.length === 0) {
        return (
          <div>
            <div className="stat-component_title">Общая сводка</div>
            <div className="stat-component_total-amount">Нет доступных данных</div>
          </div>);
    }

    return (
        <div>
            <div className="stat-component_title">Общая сводка</div>
            <div className="stat-component_total-amount"> Найдено {data.data[0].data.length}  вариантов</div>
            <DataSlider data={data} />
        </div>
    )
}

export default StatComponent;