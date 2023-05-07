import './SearchComponent.css';
import {useState} from "react";
import DateInput from "./DateInput";
import {Link} from "react-router-dom";


function SearchComponent (){
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isValid, setIsValid] = useState(true);

    function handleValidation(start, end) {
        setIsValid(new Date(start) <= new Date(end));
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="search-component-content">
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
                     < DateInput startDate={startDate} endDate={endDate} onValidation={handleValidation}/>

                    {/*<p id="checkbox-p">*/}
                    {/*    <input type="date" id="date" name="start-date"/>*/}
                    {/*</p>*/}
                    {/*<p id="checkbox-p">*/}
                    {/*    <input type="date" id="date" name="end-date"/>*/}
                    {/*</p>*/}

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

        </div>
    )
}

export default SearchComponent;