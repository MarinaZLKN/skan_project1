import './SearchComponent.css';
import {useState} from "react";
import DateInput from "./DateInput";
import {Link} from "react-router-dom";
import axios from "axios";


function SearchComponent (){
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isValid, setIsValid] = useState(true);


    function handleValidation(startDate, endDate) {
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);

        if (isNaN(startDateObj.getTime()) || isNaN(endDateObj.getTime())) {
            alert('Please enter a valid date range.');
        return false;
        }

        if (startDateObj > endDateObj) {
            alert('Start date cannot be later than end date.');
            return false;
        }

        return true;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const searchParams = {
            issueDateInterval: {
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString()
        },

        };


        axios.post('https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(searchParams)
        })
            .then(response => response.json())
            .then(data => {

            console.log(data);
        })
        .catch(error => {

            console.error(error);
        });
    };

    return (
        <form className="search-component-content" onSubmit={handleSubmit}>
            <div className="search-component-inputs">
                <div className="search-input-1"> <p id="checkbox-p">ИНН компании<sup>*</sup> </p> </div>
                <input id="input_1" type="text" name="inn"  size="30" placeholder="10 цифр"/>
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
                    <DateInput label="Start date" value={startDate} onChange={setStartDate} onValidation={handleValidation}/>
                    <DateInput label="End date" value={endDate} onChange={setEndDate} onValidation={handleValidation}/>
                     {/*< DateInput  onValidation={handleValidation}/>*/}

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
                    <Link to="/resultpage">
                        <button type="submit" className="search-button" disabled={!isValid}>Поиск</button>
                    </Link>
                    <p id="bottom-p"> <sup>*</sup>Обязательные к заполнению поля</p>
                </div>

            </div>

        </form>
    )
}

export default SearchComponent;