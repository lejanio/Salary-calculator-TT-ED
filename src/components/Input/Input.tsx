import React, {
  ChangeEvent, FC, useEffect, useState,
} from 'react';
import './Input.scss';

type InputType = {
  day: string;
  hours: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input:FC<InputType> = ({ day, hours, onChange }) => (
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

export default Input;
