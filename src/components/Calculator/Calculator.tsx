import React, { ChangeEvent, useEffect, useState } from 'react';
import produce from 'immer';
import Input from '../Input/Input';
import PayAmount from '../PayAmount/PayAmount';
import './Calculator.scss';

type EmployeeTable = {
  id: number
  name: string,
  weeks: {
    hours: number[];
    pay: number[];
  }[],
}

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const employees = [
  {
    id: 1,
    name: 'Janice Ribtab',
    weeks: [
      {
        hours: [1, 0, 1, 0, 1, 0, 1],
        pay: [10, 0, 10, 0, 10, 0, 20],
      },
      {
        hours: [0, 1, 0, 1, 0, 1, 0],
        pay: [0, 10, 0, 10, 0, 20, 0],
      },
      {
        hours: [1, 0, 1, 0, 1, 0, 1],
        pay: [10, 0, 10, 0, 10, 0, 20],
      },
      {
        hours: [0, 1, 0, 1, 0, 1, 0],
        pay: [0, 10, 0, 10, 0, 20, 0],
      },
      {
        hours: [1, 0, 1, 0, 1, 0, 1],
        pay: [10, 0, 10, 0, 10, 0, 20],
      },
    ],
  },
  {
    id: 2,
    name: 'Steve Wiki',
    weeks: [
      {
        hours: [2, 0, 2, 0, 2, 0, 2],
        pay: [20, 0, 20, 0, 20, 0, 40],
      },
      {
        hours: [0, 2, 0, 2, 0, 2, 0],
        pay: [0, 20, 0, 20, 0, 40, 0],
      },
      {
        hours: [2, 0, 2, 0, 2, 0, 2],
        pay: [20, 0, 20, 0, 20, 0, 40],
      },
      {
        hours: [0, 2, 0, 2, 0, 2, 0],
        pay: [0, 20, 0, 20, 0, 40, 0],
      },
      {
        hours: [2, 0, 2, 0, 2, 0, 2],
        pay: [20, 0, 20, 0, 20, 0, 40],
      },
    ],
  },
  {
    id: 3,
    name: 'Zoe Hedge',
    weeks: [
      {
        hours: [3, 0, 3, 0, 3, 0, 3],
        pay: [30, 0, 30, 0, 30, 0, 60],
      },
      {
        hours: [0, 3, 0, 3, 0, 3, 0],
        pay: [0, 30, 0, 30, 0, 60, 0],
      },
      {
        hours: [3, 0, 3, 0, 3, 0, 3],
        pay: [30, 0, 30, 0, 30, 0, 60],
      },
      {
        hours: [0, 3, 0, 3, 0, 3, 0],
        pay: [0, 30, 0, 30, 0, 60, 0],
      },
      {
        hours: [3, 0, 3, 0, 3, 0, 3],
        pay: [30, 0, 30, 0, 30, 0, 60],
      },
    ],
  },
  {
    id: 4,
    name: 'Rufus Relquis',
    weeks: [
      {
        hours: [4, 0, 4, 0, 4, 0, 4],
        pay: [40, 0, 40, 0, 40, 0, 80],
      },
      {
        hours: [0, 4, 0, 4, 0, 4, 0],
        pay: [0, 40, 0, 40, 0, 80, 0],
      },
      {
        hours: [4, 0, 4, 0, 4, 0, 4],
        pay: [40, 0, 40, 0, 40, 0, 80],
      },
      {
        hours: [0, 4, 0, 4, 0, 4, 0],
        pay: [0, 40, 0, 40, 0, 80, 0],
      },
      {
        hours: [4, 0, 4, 0, 4, 0, 4],
        pay: [40, 0, 40, 0, 40, 0, 80],
      },
    ],
  }];

const weeks = [
  {
    id: 1,
    interval: '17 Jan 2022 - 23 Jan 2022',
  },
  {
    id: 2,
    interval: '10 Jan 2022 - 16 Jan 2022',
  },
  {
    id: 3,
    interval: '3 Jan 2022 - 9 Jan 2022',
  },
  {
    id: 4,
    interval: '27 Dec 2021 - 2 Jan 2022',
  },
  {
    id: 5,
    interval: '20 Dec 2021 - 26 Dec 2021',
  },
];

const Calculator = () => {
  const [employeeTable, setEmployeeTable] = useState<EmployeeTable[]>(employees);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedWeek, setSelectedWeek] = useState('');
  const [totalHours, setTotalHours] = useState(0);
  const [totalSalary, setTotalSalary] = useState(0);
  const [progressBarActive, setProgressBarActive] = useState(false);

  const weekObjectIndex: number = weeks.findIndex((item) => item.interval === selectedWeek);
  const employeeObjectIndex: number = employeeTable.findIndex((item) => item.name === selectedEmployee);

  const calculateTotalHours = () => {
    if (employeeObjectIndex >= 0 && weekObjectIndex >= 0) {
      let total = 0;
      employeeTable[employeeObjectIndex].weeks[weekObjectIndex].hours.forEach((item) => {
        total += +item;
      });
      setTotalHours(total);
    }
  };

  const calculateTotalSalary = () => {
    if (employeeObjectIndex >= 0 && weekObjectIndex >= 0) {
      let total = 0;
      employeeTable[employeeObjectIndex].weeks[weekObjectIndex].pay.forEach((item) => {
        total += +item;
      });
      setTotalSalary(total);
    }
  };

  const calculateDailyPay = () => {
    if (employeeObjectIndex >= 0 && weekObjectIndex >= 0) {
      let pay = 0;
      employeeTable[employeeObjectIndex].weeks[weekObjectIndex].pay.map((item, index) => {
        const time = employeeTable[employeeObjectIndex].weeks[weekObjectIndex].hours[index];
        if (index === 5 || index === 6) {
          pay = time * 10 * 2;
        } else {
          pay = time * 10;
        }
        if (Number.isNaN(pay)) {
          pay = 0;
        }
        setProgressBarActive(false);
        return setEmployeeTable(
          produce((draft) => {
            draft[employeeObjectIndex].weeks[weekObjectIndex].pay[index] = pay;
          }),
        );
      });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => calculateDailyPay(), 500);
    return () => clearInterval(intervalId);
  }, [selectedEmployee, selectedWeek, employeeTable]);

  useEffect(() => {
    calculateTotalHours();
    calculateTotalSalary();
  }, [selectedEmployee, selectedWeek, employeeTable]);

  return (
    <div className="app">
      <div className="app-container">
        <header className="header">
          <div>
            <label className="custom-label--large">
              <span className="label-text--large">Employee</span>
              <select
                name="employees"
                className="input--large"
                value={selectedEmployee}
                onChange={(e) => {
                  setSelectedEmployee(e.target.value);
                }}
              >
                <option value="" selected disabled>Choose an employee</option>
                {employeeTable.map(({ id, name }) => (
                  <option key={id} value={name}>{name}</option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <label className="custom-label--large">
              <span className="label-text--large">Week</span>
              <select
                name="weeks"
                className="employee-select input--large"
                id="weeks"
                value={selectedWeek}
                onChange={(e) => {
                  setSelectedWeek(e.target.value);
                }}
              >
                <option value="" selected disabled>Choose week</option>
                {weeks.map(({ id, interval }) => (
                  <option key={id} value={interval}>{interval}</option>
                ))}
              </select>
            </label>
          </div>
        </header>
        <div className="progress-bar--wrapper">
          {progressBarActive && (
            <div className="progress-bar--container">
              <div className="progress-bar" />
            </div>
          )}
        </div>
        <section className="main-section">
          {(weekObjectIndex >= 0 && employeeObjectIndex >= 0)
            ? (employeeTable[employeeObjectIndex].weeks[weekObjectIndex].hours.map(
              (item, index) => (
                <div
                  key={Math.random()}
                  className="row-item"
                >
                  <div>
                    <Input
                      day={weekdays[index]}
                      hours={item}
                      onChange={
                      (e: ChangeEvent<HTMLInputElement>) => {
                        setProgressBarActive(true);
                        setEmployeeTable(produce((draft) => {
                          draft[employeeObjectIndex].weeks[weekObjectIndex].hours[index] = parseInt(e.target.value, 10);
                        }));
                      }
                    }
                    />
                  </div>
                  <div className="daily-pay">
                    €
                    <span>
                      <PayAmount
                        pay={employeeTable[employeeObjectIndex].weeks[weekObjectIndex].pay[index].toFixed(2)}
                      />
                      {}
                    </span>
                  </div>
                </div>
              ),
            ))
            : (<div className="message">Please choose an employee and a time interval</div>)}
        </section>
        <footer className="footer">
          <div className="footer__item">
            <span>Hours worked</span>
            <span>
              {totalHours}
            </span>
          </div>
          <div className="footer__item">
            <span>Salary</span>
            <span>
              €
              {' '}
              {totalSalary.toFixed(2)}
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Calculator;
