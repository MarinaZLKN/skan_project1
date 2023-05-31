import './DataSlider.css';
import {useState} from "react";
import {useSelector} from "react-redux";
import Loader, {Circles} from 'react-loader-spinner';


function DataSlider ({data}) {
    console.log("DataSlider", data)
    const [index, setIndex] = useState(0)
    const isLoading = useSelector((state) => state.loading);
    const maxLength = 8;


    //extracting the dates
    const dates = data.data[0].data
        .map(element => element.date.split("T")[0])
        .slice(index, index + maxLength);

    //extracting the docs
    const documents = data.data
        .filter(obj => obj.histogramType === "totalDocuments")
        .map(obj => obj.data.map(obj => obj.value))[0]
        .slice(index, index + maxLength);

    //extracting the risks
    const risks = data.data
        .filter(obj => obj.histogramType === "riskFactors")
        .map(obj => obj.data.map(obj => obj.value))[0]
        .slice(index, index + maxLength);

    function handleSteps(e, step){
        const newIndex = index + step;
        if ((-1 < newIndex ) & (newIndex < dates.length)) {
            setIndex(newIndex);
        }
        console.log(index);
    }

     if (isLoading) {
        return (
          <div className="data-slider_box">
            <Circles type="Oval" color="#000000" height={50} width={50} />
          </div>
        );
      }

    return(
        <>
            <div className="slider-btn_left" onClick={e => handleSteps(e, -1)}>&lt;</div>
            <div className="data-slider_box">
                <div className="data-slider_left-part">
                    <div className="data-slider_titles">
                        <span className="titles">Период</span>
                        <span className="titles">Всего</span>
                        <span className="titles">Риски</span>
                    </div>
                </div>
                <div className="data-slider_right-part">
                    <div className="table">
                      <div className="table-tr">
                          {dates.map(elem => {
                              return(
                                  <div className="table-value">{elem}</div>
                              )
                          })}
                      </div>
                      <div className="table-tr">
                          {documents.map(doc => {
                              return (
                                  <div className="table-value">{doc}</div>
                              )
                          })}
                      </div>
                          <div className="table-tr">
                              {risks.map(risk => {
                                  return (
                                      <div className="table-value">{risk}</div>
                                  )
                              })}
                          </div>
                    </div>
                </div>
                <div className="slider-btn_right" onClick={e => handleSteps(e, +1)}>&gt;</div>
                </div>

        </>

    )
}

export default DataSlider;