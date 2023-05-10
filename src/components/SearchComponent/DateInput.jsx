import React, { useState } from 'react';
import './DateInput.css';

function DateInput(props) {
    const [isValid, setIsValid] = useState(true);
    const { value, onChange } = props;

    const handleChange = (e) => {
        onChange(e.target.value);
    };


    return (
        <form>
            <input type="date"  id="start-date" value={value} onChange={handleChange} />
            <div className="date-range">
                <input type="date" id="start-date" name="start-date" onChange={handleStartDateChange} />
                <input type="date" id="end-date" name="end-date" onChange={handleEndDateChange} />
                {!isValid && <div className="date-range" style={{ color: 'red' }}>Введите корректные данные</div>}

            </div>
        </form>

    );
}

export default DateInput;

