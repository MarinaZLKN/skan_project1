import React, { useState } from 'react';
import './DateInput.css';

function DateInput({ startDate, endDate, onValidation }) {
  const [isValid, setIsValid] = useState(true);

  function handleStartDateChange(event) {
      console.log(event.target.value)
      onValidation(event.target.value, endDate);
  }

  function handleEndDateChange(event) {
    onValidation(startDate, event.target.value);
  }

  return (
      <>
          <div className="date-range">
              <input type="date" id="start-date" name="start-date" onChange={handleStartDateChange} />
              <input type="date" id="end-date" name="end-date" onChange={handleEndDateChange} />
              {!isValid && <div className="date-range" style={{ color: 'red' }}>Введите корректные данные</div>}
          </div>
      </>
  );
}

export default DateInput;