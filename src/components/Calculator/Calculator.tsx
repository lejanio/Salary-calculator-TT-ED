import React, { ChangeEvent, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import produce from 'immer';
import Input from '../Input/Input';
import PayAmount from '../PayAmount/PayAmount';
import './Calculator.scss';
import { weekdays, employees as initialEmployees, weeks } from '../../assets/data';

type EmployeeTable = {
  id: number
  name: string,
  weeks: {
    hours: number[];
    pay: number[];
  }[],
}

const Calculator = () => {
  const [employeeTable, setEmployeeTable] = useState<EmployeeTable[]>(initialEmployees);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedWeek, setSelectedWeek] = useState('');
  const [totalHours, setTotalHours] = useState(0);
  const [totalSalary, setTotalSalary] = useState(0);
  const [progressBarActive, setProgressBarActive] = useState(false);

  const weekObjectIndex = weeks.findIndex((item) => item.interval === selectedWeek);
  const employeeObjectIndex = employeeTable.findIndex((item) => item.name === selectedEmployee);

  const calculateTotalHours = () => {
    if (employeeObjectIndex >= 0 && weekObjectIndex >= 0) {
      let total = 0;
      const chosenEmployeeWeekHours = employeeTable[employeeObjectIndex].weeks[weekObjectIndex].hours;

      chosenEmployeeWeekHours.forEach((item) => {
        total += +item;
      });
      setTotalHours(total);
    }
  };

  const calculateTotalSalary = () => {
    if (employeeObjectIndex >= 0 && weekObjectIndex >= 0) {
      let total = 0;
      const chosenEmployeeWeekPay = employeeTable[employeeObjectIndex].weeks[weekObjectIndex].pay;

      chosenEmployeeWeekPay.forEach((item) => {
        total += +item;
      });
      setTotalSalary(total);
    }
  };

  const calculateDailyPay = () => {
    if (employeeObjectIndex >= 0 && weekObjectIndex >= 0) {
      let pay = 0;
      const chosenEmployeeWeek = employeeTable[employeeObjectIndex].weeks[weekObjectIndex];

      chosenEmployeeWeek.pay.map((item, index) => {
        const time = chosenEmployeeWeek.hours[index];
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
              <FontAwesomeIcon icon={faUserAlt} className="user-icon" />
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
              <FontAwesomeIcon icon={faAngleDown} className="angle-down-icon" />
            </label>
          </div>
          <div>
            <label className="custom-label--large">
              <span className="label-text--large">Week</span>
              <FontAwesomeIcon icon={faUserAlt} className="user-icon" />
              <select
                name="weeks"
                className="input--large"
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
              <FontAwesomeIcon icon={faAngleDown} className="angle-down-icon" />
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
                  key={weekdays[index]}
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
