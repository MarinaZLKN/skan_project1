import './SearchComponent.css';
import {useState} from "react";
import DateInput from "./DateInput";
import axios from "axios";
import {useSelector} from "react-redux";
import {getRequestConfig} from "./RequestConfig";
import Inn from "./Inn";
import { useNavigate } from 'react-router-dom';
import DataSlider from "../ResultPage/DataSlider/DataSlider";



function SearchComponent (){
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [inn, setInn] =useState('');
    const [data, setData] = useState('');
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    const token = useSelector((state) => state.token);
    const navigate = useNavigate();

    function handleStartDate (e) {
        setStartDate(e.target.value);
    }

    function handleEndDate (e) {
        setEndDate(e.target.value);
    }

    function handleInn(e) {
        setInn(e.target.value);
    }

    function handleValidation(startDate, endDate) {
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);

        if (isNaN(startDateObj.getTime()) || isNaN(endDateObj.getTime())) {
            console.log('Please enter a valid date range.');
            setIsValid(false)
            return false;
        }

        if (startDateObj > endDateObj) {
            console.log('Start date cannot be later than end date.');
            setIsValid(false)
            return false;
        }
        setIsValid(true)
        return true;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Clicked!')
        console.log(startDate, endDate)
        const isValid = handleValidation(startDate, endDate);
        console.log(isValid)

        if (!isValid) {
            return;
        }

        const config = getRequestConfig(startDate, endDate, inn);
        // console.log(config);
        axios.post(
            "https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms",
            config,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                }
            }).then(response => {
                const processedData = response.data;
                setData(processedData);
                console.log('processeddata', processedData)
                console.log('Data: ')
                console.log(response.data);
                // if (response.data.data){
                //     response.data.data.forEach((arr) => {
                //         console.log('HistogramTypes: ')
                //         console.log(arr.histogramTypes);
                //         arr.data.forEach((d) => console.log(d))
                //     })
                // }
                navigate('/resultpage', { state: { data: processedData } });
            }).catch(error => {
                console.log(error)
            })
    };

    return (
        <form className="search-component-content" onSubmit={handleSubmit}>
            <div className="search-component-inputs">
                <Inn handleInn={handleInn}/>
                <div className="search-input-list"> <p id="checkbox-p">Тональность</p> </div>
                <input id="input_1" type="text" list="list"/>
                    <datalist id="list" placeholder="Любая">
                        <option value="Любая"/>
                        <option value="Позитивная"/>
                        <option value="Негативная"/>
                    </datalist>
                <div className="search-input-3"><p id="checkbox-p">Количество документов на выдаче<sup>*</sup></p></div>
                <input id="input_1" type="text" size="30" placeholder="От 1 до 1000" min="1" max="1000"/>
                <div className="search-input-4"> <p id="checkbox-p">Диапазон поиска<sup>*</sup></p> </div>
                <form id="search-form">
                    <DateInput label="Start date"
                               startDate={startDate}
                               endDate={endDate}
                               isValid={isValid}
                               onChangeStartDate={handleStartDate}
                               onChangeEndDate={handleEndDate}
                               onValidation={handleValidation}/>
                </form>
            </div>
            <div className="search-checkbox-button">
                <div className="search-chechbox">
                <p id="checkbox-p"><input type="checkbox" name="checkbox" value=""/> Признак максимальной полноты</p>
                <p id="checkbox-p"><input type="checkbox" name="checkbox" value=""/> Упоминания в бизнес-контексте</p>
                <p id="checkbox-p"><input type="checkbox" name="checkbox" value=""/> Главная роль в публикации</p>
                <p id="checkbox-p"><input type="checkbox" name="checkbox" value=""/> Публикация только с риск-факторами</p>
                <p id="checkbox-p"><input type="checkbox" name="checkbox" value=""/> Включать технические новости рынков</p>
                <p id="checkbox-p"><input type="checkbox" name="checkbox" value=""/> Включать анонсы и календари</p>
                <p id="checkbox-p"><input type="checkbox" name="checkbox" value=""/> Включать сводки новостей</p>
            </div>
                <div className="search-down-part">
                    <button type="submit" className="search-button" onClick={handleSubmit} >Поиск</button>
                    <p id="bottom-p"> <sup>*</sup>Обязательные к заполнению поля</p>
                </div>
            </div>

        </form>
    )
}

export default SearchComponent;