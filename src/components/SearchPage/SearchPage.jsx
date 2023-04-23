import './SearchPage.css';

function SearchPage (){
    return(
        <div className="search-page-content">
            <div className="search-wrapper">
                <div className="search-text">
                    <div className="search-title">
                        <p>Найдите необходимые данные в пару кликов.</p>
                    </div>
                    <div className="search-under-text">
                        <p> Задайте параметры поиска.</p>
                        <p>Чем больше заполните, тем точнее поиск</p>
                    </div>
                </div>
                <div className="search-component-wrapper"></div>
                <div className="search-pictures">
                    <div className="pic1"></div>
                    <div className="pic2"></div>
                    <div className="pic3"></div>
                </div>
            </div>
        </div>
    )
}
export default SearchPage;