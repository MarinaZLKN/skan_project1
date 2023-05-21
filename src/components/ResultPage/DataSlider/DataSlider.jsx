import './DataSlider.css';
import {useState} from "react";
import {getSpaceUntilMaxLength} from "@testing-library/user-event/dist/utils";


function DataSlider ({data}) {
    console.log("DataSlider", data)
    const [index, setIndex] = useState(0)
    const maxLength = 3;

    const dates = data.data[0].data
        .map(element => element.date.split("T")[0])
        .slice(index, index + maxLength);

    const documents = data.data
        .filter(obj => obj.histogramType === "totalDocuments")
        .map(obj => obj.data.map(obj => obj.value))[0]
        .slice(index, index + maxLength);


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

    return(
        <>
        {/*    <div className="data-slider_box">*/}
        {/*    <div className="data-slider_left-part">*/}
        {/*        <div className="data-slider_titles">*/}
        {/*            <span className="titles">Период</span>*/}
        {/*            <span className="titles">Всего</span>*/}
        {/*            <span className="titles">Риски</span>*/}
        {/*        </div>*/}
        {/*    </div>*/}

        {/*</div>*/}

            <div className="wrapper">
                <div className="slider-btn" onClick={e => handleSteps(e, -1)}>&lt;</div>
                <table className="table">
                  <tr>
                    <th>Date</th>
                      {dates.map(elem => {
                          return(
                              <td>{elem}</td>
                          )
                      })}
                  </tr>
                  <tr>
                    <th>Docs</th>
                      {documents.map(doc => {
                          return (
                              <td>{doc}</td>
                          )
                      })}
                  </tr>
                  <tr>
                    <th>Risks</th>
                      {risks.map(risk => {
                          return (
                              <td> {risk}</td>
                          )
                      })}
                  </tr>
                </table>
                <div className="slider-btn" onClick={e => handleSteps(e, +1)}>&gt;</div>
            </div>
        </>

    )
}

export default DataSlider;