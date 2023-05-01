import React, { useState } from 'react';
import './DateInput.css';

function DateInput({ startDate, endDate, onValidation }) {
  const [isValid, setIsValid] = useState(true);

  function handleStartDateChange(event) {
    onValidation(event.target.value, endDate);
  }

  function handleEndDateChange(event) {
    onValidation(startDate, event.target.value);
  }

  return (
      <>
          <div className="date-range">
              <input type="date" id="start-date" name="start-date" value={startDate} onChange={handleStartDateChange} />
              <input type="date" id="end-date" name="end-date" value={endDate} onChange={handleEndDateChange} />
              {!isValid && <div className="date-range" style={{ color: 'red' }}>Введите корректные данные</div>}
          </div>
      </>
  );
}

export default DateInput;