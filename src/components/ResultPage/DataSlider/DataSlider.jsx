import './DataSlider.css';

function DataSlider (data) {

    return(
        <div className="data-slider_box">
            <div className="data-slider_left-part">
                <div className="data-slider_titles">
                    <span className="titles">Период</span>
                    <span className="titles">Всего</span>
                    <span className="titles">Риски</span>
                </div>
            </div>
        </div>
    )
}

export default DataSlider;