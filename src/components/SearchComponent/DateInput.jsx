import React, { useState } from 'react';
import './DateInput.css';

function DateInput(props) {
    const { value, onChange } = props;

    const handleChange = (e) => {
        onChange(e.target.value);
    };


    return (
        <input type="date"  id="start-date" value={value} onChange={handleChange} />
    );
}

export default DateInput;
//
// <div className="date-range">
//                 <input type="date" id="start-date" name="start-date" onChange={handleStartDateChange} />
//                 <input type="date" id="end-date" name="end-date" onChange={handleEndDateChange} />
//                 {!isValid && <div className="date-range" style={{ color: 'red' }}>Введите корректные данные</div>}
//
//             </div>