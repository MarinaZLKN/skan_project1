import React, { useState } from 'react';
import './DateInput.css';

function DateInput({ startDate, endDate, isValid, onChangeStartDate, onChangeEndDate }) {

    return (
        <form>
            <div className="date-range">
                <input type="date" id="start-date" name="start-date" value={startDate} onChange={onChangeStartDate}  />
                <input type="date" id="end-date" name="end-date" value={endDate} onChange={onChangeEndDate}  />
                {!isValid && <div className="date-range" style={{ color: 'red' }}>Введите корректные данные</div>}

            </div>
        </form>

    );
}

export default DateInput;

