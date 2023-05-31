import './SearchComponent.css';
import {useState} from "react";
import DateInput from "./DateInput";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getRequestConfig} from "./RequestConfig";
import Inn from "./Inn";
import { useNavigate } from 'react-router-dom';
import {setLoading} from "../../actions";
import { Link } from 'react-router-dom';


function SearchComponent (){
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [inn, setInn] =useState('');
    const [data, setData] = useState('');
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    const token = useSelector((state) => state.token);
    const navigate = useNavigate();

    const dispatch = useDispatch();

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(setLoading(true));
        const isValid = handleValidation(startDate, endDate);
        console.log(isValid)

        if (!isValid) {
            setLoading(false);
            return;
        }

        const config = getRequestConfig(startDate, endDate, inn);

        try {
            const response = await axios.post(
            "https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms",
            config,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                }
            }
          );
          const processedData = response.data;
          await setData(processedData);
          console.log('processedData: ',processedData)
          navigate(`/resultpage?data=${encodeURIComponent(JSON.stringify(processedData))}`);
          // navigate('/resultpage', { data: processedData });
        } catch (error) {
          console.log(error);
        } finally {
          dispatch(setLoading(false));
        }


        // axios.post(
        //     "https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms",
        //     config,
        //     {
        //         headers: {
        //             Authorization: `Bearer ${token}`,
        //             Accept: 'application/json',
        //         }
        //     }).then(response => {
        //         const processedData = response.data;
        //         setData(processedData);
        //         console.log('processedData', processedData)
        //         navigate('/resultpage', { data: processedData });
        //     }).catch(error => {
        //         console.log(error)
        //     })
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
                    <button type="submit" className="search-button"  >Поиск</button>
                    <p id="bottom-p"> <sup>*</sup>Обязательные к заполнению поля</p>
                </div>
            </div>

        </form>
    )
}

export default SearchComponent;