import React, { useState } from 'react';
import './DateInput.css';

function DateInput({ startDate, endDate, isValid, onChangeStartDate, onChangeEndDate }) {

    return (
        <form>
            <div className="date-range">
                <input type="date"
                       id="start-date"
                       name="start-date"
                       value={startDate}
                       onChange={onChangeStartDate}
                       style={{
                           borderColor: !isValid ? 'red' : '',
                           outline: 'none',
                           color: !isValid ? 'red' : '',
                           boxShadow: !isValid ? '0px 0px 5px rgba(255, 89, 89, 0.6)' : ''
                       }}/>
                <input type="date"
                       id="end-date"
                       name="end-date"
                       value={endDate}
                       onChange={onChangeEndDate}
                       style={{
                           borderColor: !isValid ? 'red' : '',
                           outline: 'none',
                           color: !isValid ? 'red' : '',
                           boxShadow: !isValid ? '0px 0px 5px rgba(255, 89, 89, 0.6)' : ''
                       }}
                />
                {!isValid && <div className="date-range-error" style={{ color: 'red'}}>Введите корректные данные</div>}

            </div>
        </form>

    );
}

export default DateInput;

