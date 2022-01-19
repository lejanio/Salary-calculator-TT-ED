import React, { FC, useEffect, useState } from 'react';

type InputType = {
  day: string;
  hours: string;
}

const Input:FC<InputType> = ({ day, hours }) => {
  const [hoursWorked, setHoursWorked] = useState(hours);
  const [dailyPay, setDailyPay] = useState(0);
  // console.log(123);
  const calculateDailyPay = (time: string) => {
    let pay = 0;
    if (day === 'Saturday' || day === 'Sunday') {
      pay = parseInt(time, 10) * 10 * 2;
    } else {
      pay = parseInt(time, 10) * 10;
    }
    if (Number.isNaN(pay)) {
      pay = 0;
    }
    setDailyPay(pay);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      calculateDailyPay(hoursWorked);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [hoursWorked]);

  return (
    <div className="weekday-information">
      <div className="hours-input--wrapper">
        <label htmlFor="">
          {day}
          <input
            type="text"
            className="hours-input"
            value={hoursWorked}
            onChange={(e) => {
              setHoursWorked(e.target.value);
            }}
            onFocus={(e) => e.target.select()}
          />
        </label>
      </div>
      <span>
        €
        <span>{dailyPay.toFixed(2)}</span>
      </span>
      <div style={{ width: '30px' }}>
        <progress max="100" value="50" />
      </div>
    </div>
  );
};

export default Input;
