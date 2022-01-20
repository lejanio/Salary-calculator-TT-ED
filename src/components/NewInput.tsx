import React, {
  ChangeEvent, FC, useEffect, useState,
} from 'react';
import './NewInput.scss';

type InputType = {
  day: string;
  hours: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const NewInput:FC<InputType> = ({ day, hours, onChange }) => {
  const [hoursWorked, setHoursWorked] = useState(hours);

  return (
    <div className="weekday-information">
      <div className="hours-input--wrapper">
        <label className="custom-label">
          <span className="label-text">{day}</span>
          <input
            type="text"
            className="input"
            value={hours}
            onChange={(e) => {
              onChange(e);
            }}
            onFocus={(e) => e.target.select()}
          />
        </label>
      </div>
    </div>
  );
};

export default NewInput;
