import './SearchComponent.css';


function SearchComponent (){
    return (
        <div className="search-componenet-content">
            <div className="search-component-inputs">
                <div className="search-input-1"> <p id="checkbox-p">ИНН компании<sup>*</sup> </p> </div>
                <input id="input_1" type="text" name="inn" value="" size="30" placeholder="10 цифр"/>
                <div className="search-input-list"> <p id="checkbox-p">Тональность</p> </div>
                <input id="input_1" type="text" list="list"/>
                    <datalist id="list" placeholder="Любая">
                        <option value="Любая"/>
                        <option value="Определенная"/>
                        <option value="Классная"/>
                    </datalist>
                <div className="search-input-3"><p id="checkbox-p">Количество документов на выдаче<sup>*</sup></p>  </div>
                <input id="input_1" type="text" size="30" placeholder="От 1 до 1000"/>
                <div className="search-input-4"> <p id="checkbox-p">Диапазон поиска<sup>*</sup></p> </div>
                <form id="search-form">
                    <p id="checkbox-p">
                        <input type="date" id="date" name="date"/>
                    </p>
                    <p id="checkbox-p">
                        <input type="date" id="date" name="date"/>
                    </p>

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
                    <div className="search-button">
                        <a href="#" id="auth-text">Поиск</a>
                     </div>
                    <p id="bottom-p"> <sup>*</sup>Обязательные к заполнению поля</p>
                </div>

            </div>

        </div>
    )
}

export default SearchComponent;