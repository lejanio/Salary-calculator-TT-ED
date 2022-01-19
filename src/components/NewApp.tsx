import React, { ChangeEvent, useEffect, useState } from 'react';
import NewInput from './NewInput';
import NewPayIndicator from './NewPayIndicator';

type EmployeeTable = {
  id: number
  name: string,
  weeks: {
    hours: number[];
    pay: number[];
  }[],
}

const employees = [
  {
    id: 1,
    name: 'Janice Ribtab',
    weeks: [
      {
        hours: [1, 0, 0, 0, 0, 0, 0],
        pay: [0, 0, 0, 0, 0, 0, 1],
      },
      {
        hours: [0, 1, 0, 0, 0, 0, 0],
        pay: [0, 0, 0, 0, 0, 1, 0],
      },
      {
        hours: [0, 0, 1, 0, 0, 0, 0],
        pay: [0, 0, 0, 0, 1, 0, 0],
      },
      {
        hours: [0, 0, 0, 1, 0, 0, 0],
        pay: [0, 0, 0, 1, 0, 0, 0],
      },
      {
        hours: [0, 0, 0, 0, 1, 0, 0],
        pay: [0, 0, 1, 0, 0, 0, 0],
      },
    ],
  },
  {
    id: 2,
    name: 'Steve Wiki',
    weeks: [
      {
        hours: [2, 0, 0, 0, 0, 0, 0],
        pay: [0, 0, 0, 0, 0, 0, 2],
      },
      {
        hours: [0, 2, 0, 0, 0, 0, 0],
        pay: [0, 0, 0, 0, 0, 2, 0],
      },
      {
        hours: [0, 0, 2, 0, 0, 0, 0],
        pay: [0, 0, 0, 0, 2, 0, 0],
      },
      {
        hours: [0, 0, 0, 2, 0, 0, 0],
        pay: [0, 0, 0, 2, 0, 0, 0],
      },
      {
        hours: [0, 0, 0, 0, 2, 0, 0],
        pay: [0, 0, 2, 0, 0, 0, 0],
      },
    ],
  },
  {
    id: 3,
    name: 'Zoe Hedge',
    weeks: [
      {
        hours: [3, 0, 0, 0, 0, 0, 0],
        pay: [0, 0, 0, 0, 0, 0, 0],
      },
      {
        hours: [0, 3, 0, 0, 0, 0, 0],
        pay: [0, 0, 0, 0, 0, 0, 0],
      },
      {
        hours: [0, 0, 3, 0, 0, 0, 0],
        pay: [0, 0, 0, 0, 0, 0, 0],
      },
      {
        hours: [0, 0, 0, 3, 0, 0, 0],
        pay: [0, 0, 0, 0, 0, 0, 0],
      },
      {
        hours: [0, 0, 0, 0, 3, 0, 0],
        pay: [0, 0, 0, 0, 0, 0, 0],
      },
    ],
  },
  {
    id: 4,
    name: 'Rufus Relquis',
    weeks: [
      {
        hours: [4, 0, 0, 0, 0, 0, 0],
        pay: [0, 0, 0, 0, 0, 0, 0],
      },
      {
        hours: [0, 4, 0, 0, 0, 0, 0],
        pay: [0, 0, 0, 0, 0, 0, 0],
      },
      {
        hours: [0, 0, 4, 0, 0, 0, 0],
        pay: [0, 0, 0, 0, 0, 0, 0],
      },
      {
        hours: [0, 0, 0, 4, 0, 0, 0],
        pay: [0, 0, 0, 0, 0, 0, 0],
      },
      {
        hours: [0, 0, 0, 0, 4, 0, 0],
        pay: [0, 0, 0, 0, 0, 0, 0],
      },
    ],
  }];

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
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

const NewApp = () => {
  const [employeeTable, setEmployeeTable] = useState<EmployeeTable[]>(employees);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedWeek, setSelectedWeek] = useState('');
  const [totalHours, setTotalHours] = useState(0);
  const [totalSalary, setTotalSalary] = useState(0);

  // const calculateDailyPay = (time: string) => {
  //   let pay = 0;
  //   if (day === 'Saturday' || day === 'Sunday') {
  //     pay = parseInt(time, 10) * 10 * 2;
  //   } else {
  //     pay = parseInt(time, 10) * 10;
  //   }
  //   if (Number.isNaN(pay)) {
  //     pay = 0;
  //   }
  //   setDailyPay(pay);
  // };
  //
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     calculateDailyPay(hoursWorked);
  //   }, 1000);
  //   return () => clearInterval(intervalId);
  // }, [hoursWorked]);

  const weekObjectIndex: number = weeks.findIndex((item) => item.interval === selectedWeek);
  const employeeObjectIndex: number = employeeTable.findIndex((item) => item.name === selectedEmployee);

  const calculateTotalHours = () => {
    if (employeeObjectIndex >= 0 && weekObjectIndex >= 0) {
      let total = 0;
      employeeTable[employeeObjectIndex].weeks[weekObjectIndex].hours.forEach((item) => {
        total += +item;
      });
      setTotalHours(total);
      console.log('total', total);
    }
  };

  const calculateTotalSalary = () => {
    if (employeeObjectIndex >= 0 && weekObjectIndex >= 0) {
      let total = 0;
      employeeTable[employeeObjectIndex].weeks[weekObjectIndex].pay.forEach((item) => {
        total += +item;
      });
      setTotalSalary(total);
      console.log('total', total);
    }
  };

  useEffect(() => {
    calculateTotalHours();
    calculateTotalSalary();
  }, [selectedEmployee, selectedWeek, employeeTable]);

  console.log('weekObjectIndex', weekObjectIndex);
  console.log('employeeObjectIndex', employeeObjectIndex);

  return (
    <div className="app">
      <div className="app-container">
        <header className="header">
          <div className="employee-select--wrapper">
            <label htmlFor="employees" className="employee-select__label">
              <div>{selectedEmployee}</div>
              <div>{selectedWeek}</div>
              Employee:
              {' '}
              <select
                name="employees"
                className="employee-select"
                value={selectedEmployee}
                onChange={(e) => {
                  setSelectedEmployee(e.target.value);
                  console.log('sSE', e.target.value);
                }}
              >
                <option value="" selected disabled>Choose an employee</option>
                {employeeTable.map(({ id, name }) => (
                  <option key={id} value={name}>{name}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="week-select--wrapper">
            <label htmlFor="weeks" className="week-select__label">
              Week:
              {' '}
              <select
                name="weeks"
                id="weeks"
                value={selectedWeek}
                onChange={(e) => {
                  setSelectedWeek(e.target.value);
                  // fn();
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
        <section className="main-section">
          <div>
            {(weekObjectIndex >= 0 && employeeObjectIndex >= 0)
              && employeeTable[employeeObjectIndex].weeks[weekObjectIndex].hours.map(
                (item, index) => (
                  <div
                    key={Math.random()}
                  >
                    <div>
                      <NewInput
                        day={weekdays[index]}
                        hours={item}
                        onChange={
                      (e: ChangeEvent<HTMLInputElement>) => {
                        setEmployeeTable(
                          employeeTable.map((employee, employeeIndex) => {
                            if (employeeIndex !== employeeObjectIndex) {
                              return employee;
                            }
                            return {
                              ...employee,
                              weeks: employee.weeks.map((week, weekIndex) => {
                                if (weekIndex !== weekObjectIndex) {
                                  return week;
                                }
                                return {
                                  ...week,
                                  hours: week.hours.map((day, dayIndex) => {
                                    if (dayIndex !== index) {
                                      return day;
                                    }
                                    const newValue: number = parseInt(e.target.value, 10);
                                    return newValue;
                                  }),
                                };
                              }),
                            };
                          }),
                        );
                        console.log('newEmployeeTable', employeeTable);
                      }
                    }
                      />
                      Bingo
                    </div>
                    <div>
                      €
                      {' '}
                      <span>
                        <NewPayIndicator
                          pay={employeeTable[employeeObjectIndex].weeks[weekObjectIndex].pay[index]}
                        />
                        {}
                      </span>
                    </div>
                  </div>
                ),
              )}
          </div>
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
            <span>{totalSalary}</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NewApp;
