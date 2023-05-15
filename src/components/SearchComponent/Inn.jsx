import './SearchComponent.css';
import React, {useState} from "react";
function Inn ( {handleInn }) {

    const [isValid, setIsValid] = useState(false);

    function handleCheckInn(e) {
        let error = {
			code: null,
			message: null
		};
        const result = validateInn(e.target.value, error);
        setIsValid(result);

        if (result) handleInn(e);
    }
    function validateInn(inn, error) {
        let result = false;
        if (typeof inn === 'number') {
            inn = inn.toString();
        } else if (typeof inn !== 'string') {
            inn = '';
        }
        if (!inn.length) {
            error.code = 1;
            error.message = 'ИНН пуст';
        } else if (/[^0-9]/.test(inn)) {
            error.code = 2;
            error.message = 'ИНН может состоять только из цифр';
        } else if ([10, 12].indexOf(inn.length) === -1) {
            error.code = 3;
            error.message = 'ИНН может состоять только из 10 или 12 цифр';
        } else {
            let checkDigit = function (inn, coefficients) {
                let n = 0;
                for (let i in coefficients) {
                    n += coefficients[i] * inn[i];
                }
                return parseInt(n % 11 % 10);
            };
            switch (inn.length) {
                case 10:
                    let n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    if (n10 === parseInt(inn[9])) {
                        result = true;
                    }
                    break;
                case 12:
                    let n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    let n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    if ((n11 === parseInt(inn[10])) && (n12 === parseInt(inn[11]))) {
                        result = true;
                    }
                    break;
            }
            if (!result) {
                error.code = 4;
                error.message = 'Неправильное контрольное число';
            }
        }

        console.log(error);
        return result;
}




    return (
            <div className="search-input-1">
                <p id="checkbox-p">ИНН компании<sup>*</sup> </p>
                <input id="input_1"
                       type="text"
                       name="inn"
                       size="30"
                       onBlur={handleCheckInn}
                       placeholder="10 цифр"
                       style={{
                           borderColor: !isValid ? 'red' : '',
                           outline: 'none',
                           color: !isValid ? 'red' : '',
                           boxShadow: !isValid ? '0px 0px 5px rgba(255, 89, 89, 0.6)' : ''
                       }}
                />
                {!isValid && <div className="search-input-error" style={{ color: 'red'}}>Введите корректные данные</div>}
            </div>
    )
};

export default Inn;