import './StatComponent.css';
import DataSlider from "../DataSlider/DataSlider";
import {useLocation} from "react-router-dom";
import {dummyData} from "../DummyData";

function StatComponent ({data}) {
    console.log("StatComponent", data)
    //const location = useLocation();
    //const data = location.state?.data;
    return (
        <div>
            <div className="stat-component_title">Общая сводка</div>
            <div className="stat-component_total-amount"> Найдено bvncnncвариантов</div>
            <DataSlider data={data} />
        </div>
    )
}

export default StatComponent;