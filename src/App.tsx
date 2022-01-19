import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Input from './components/Input';
import NewApp from './components/NewApp';

type EmployeeTable = {
  id: number
  name: string,
  hours: {
    1: number[];
    2: number[];
    3: number[];
    4: number[];
    5: number[];
  },
  pay: {
      1: number[];
      2: number[];
      3: number[];
      4: number[];
      5: number[];
    },
}

const employees = [
  {
    id: 1,
    name: 'Janice Ribtab',
    hours: {
      1: [1, 0, 0, 0, 0, 0, 0],
      2: [0, 1, 0, 0, 0, 0, 0],
      3: [0, 0, 1, 0, 0, 0, 0],
      4: [0, 0, 0, 1, 0, 0, 0],
      5: [0, 0, 0, 0, 1, 0, 0],
    },
    pay: {
      1: [0, 0, 0, 0, 0, 0, 0],
      2: [0, 0, 0, 0, 0, 0, 0],
      3: [0, 0, 0, 0, 0, 0, 0],
      4: [0, 0, 0, 0, 0, 0, 0],
      5: [0, 0, 0, 0, 0, 0, 0],
    },
  },
  {
    id: 2,
    name: 'Steve Wiki',
    hours: {
      1: [2, 0, 0, 0, 0, 0, 0],
      2: [0, 2, 0, 0, 0, 0, 0],
      3: [0, 0, 2, 0, 0, 0, 0],
      4: [0, 0, 0, 2, 0, 0, 0],
      5: [0, 0, 0, 0, 2, 0, 0],
    },
    pay: {
      1: [0, 0, 0, 0, 0, 0, 0],
      2: [0, 0, 0, 0, 0, 0, 0],
      3: [0, 0, 0, 0, 0, 0, 0],
      4: [0, 0, 0, 0, 0, 0, 0],
      5: [0, 0, 0, 0, 0, 0, 0],
    },
  },
  {
    id: 3,
    name: 'Zoe Hedge',
    hours: {
      1: [3, 0, 0, 0, 0, 0, 0],
      2: [0, 3, 0, 0, 0, 0, 0],
      3: [0, 0, 3, 0, 0, 0, 0],
      4: [0, 0, 0, 3, 0, 0, 0],
      5: [0, 0, 0, 0, 3, 0, 0],
    },
    pay: {
      1: [0, 0, 0, 0, 0, 0, 0],
      2: [0, 0, 0, 0, 0, 0, 0],
      3: [0, 0, 0, 0, 0, 0, 0],
      4: [0, 0, 0, 0, 0, 0, 0],
      5: [0, 0, 0, 0, 0, 0, 0],
    },
  },
  {
    id: 4,
    name: 'Rufus Relquis',
    hours: {
      1: [4, 0, 0, 0, 0, 0, 0],
      2: [0, 4, 0, 0, 0, 0, 0],
      3: [0, 0, 4, 0, 0, 0, 0],
      4: [0, 0, 0, 4, 0, 0, 0],
      5: [0, 0, 0, 0, 4, 0, 0],
    },
    pay: {
      1: [0, 0, 0, 0, 0, 0, 0],
      2: [0, 0, 0, 0, 0, 0, 0],
      3: [0, 0, 0, 0, 0, 0, 0],
      4: [0, 0, 0, 0, 0, 0, 0],
      5: [0, 0, 0, 0, 0, 0, 0],
    },
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

// type Day = {
//   name: string;
//   hours: number
// }
//
// type Week = {
//   day: Day;
//   dayNumber: number
// }
//
// type Timetable = {
//   unit: Week;
//   weekNumber: number
// }

// type SelectedEmployee = {
//   employee: string;
//   week: string,
// }

const App = () => {
  const [employeeTable, setEmployeeTable] = useState<EmployeeTable[]>(employees);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedWeek, setSelectedWeek] = useState('');

  // const curr = new Date(); // get current date
  // const first = curr.getDate() - curr.getDay() + 2; // First day is the day of the month - the day of the week
  // const last = first + 6; // last day is the first day + 6
  //
  // const firstday = new Date(curr.setDate(first)).toUTCString();
  // const lastday = new Date(curr.setDate(last)).toUTCString();
  //
  // console.log(Date.parse(firstday));
  // console.log(lastday);
  //
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
  useEffect(() => {

  }, [selectedEmployee, selectedWeek]);

  const weekObjectIndex: number = weeks.findIndex((item) => item.interval === selectedWeek);
  const employeeObjectIndex: number = employees.findIndex((item) => item.name === selectedEmployee);

  // const fn = () => {
  //   const weekObject = weeks.find(({ interval }) => interval === '20 Dec 2021 - 26 Dec 2021');
  //   console.log('weekObject', weekObject);
  //   const weekObjectIndex = weeks.findIndex((item) => item.interval === selectedWeek);
  //   console.log('weekObjectIndex', weekObjectIndex);
  // };

  console.log('emplHours', (weekObjectIndex >= 0 && employeeObjectIndex >= 0) && employees[employeeObjectIndex].hours);
  console.log('weekObjectIndex', weekObjectIndex);

  return (
    <div className="app">
      <NewApp />
      {/* <br /> */}
      {/* <br /> */}
      {/* <div className="app-container"> */}
      {/*   <header className="header"> */}
      {/*     <div className="employee-select--wrapper"> */}
      {/*       <label htmlFor="employees" className="employee-select__label"> */}
      {/*         <div>{selectedEmployee}</div> */}
      {/*         <div>{selectedWeek}</div> */}
      {/*         Employee: */}
      {/*         {' '} */}
      {/*         <select */}
      {/*           name="employees" */}
      {/*           className="employee-select" */}
      {/*           value={selectedEmployee} */}
      {/*           onChange={(e) => { */}
      {/*             setSelectedEmployee(e.target.value); */}
      {/*           }} */}
      {/*         > */}
      {/*           <option value="" selected disabled>Choose an employee</option> */}
      {/*           {employees.map(({ id, name }) => ( */}
      {/*             <option key={id} value={name}>{name}</option> */}
      {/*           ))} */}
      {/*         </select> */}
      {/*       </label> */}
      {/*     </div> */}
      {/*     <div className="week-select--wrapper"> */}
      {/*       <label htmlFor="weeks" className="week-select__label"> */}
      {/*         Week: */}
      {/*         {' '} */}
      {/*         <select */}
      {/*           name="weeks" */}
      {/*           id="weeks" */}
      {/*           value={selectedWeek} */}
      {/*           onChange={(e) => { */}
      {/*             setSelectedWeek(e.target.value); */}
      {/*             // fn(); */}
      {/*           }} */}
      {/*         > */}
      {/*           <option value="" selected disabled>Choose week</option> */}
      {/*           {weeks.map(({ id, interval }) => ( */}
      {/*             <option key={id} value={interval}>{interval}</option> */}
      {/*           ))} */}
      {/*         </select> */}
      {/*         /!* <input type="week" className="week-select" /> *!/ */}
      {/*       </label> */}
      {/*     </div> */}
      {/*     /!* console.log('emplHours', (weekObjectIndex >= 0 && employeeObjectIndex >= 0) && employees[employeeObjectIndex].hours); *!/ */}
      {/*   </header> */}
      {/*   <section className="main-section"> */}
      {/*     /!* @ts-ignore *!/ */}
      {/*     {(weekObjectIndex >= 0 && employeeObjectIndex >= 0) && employeeTable[employeeObjectIndex].hours[weekObjectIndex + 1].map((item, index) => ( */}
      {/*       <div */}
      {/*         key={item.name} */}
      {/*       > */}
      {/*         <Input */}
      {/*           day={weekdays[index]} */}
      {/*           hours={item} */}
      {/*         /> */}
      {/*         Bingo */}
      {/*         {item} */}
      {/*       </div> */}
      {/*     ))} */}
      {/*     /!* @ts-ignore *!/ */}
      {/*     {(weekObjectIndex >= 0 && employeeObjectIndex >= 0) && employeeTable[employeeObjectIndex].pay[weekObjectIndex + 1].map((item, index) => ( */}
      {/*       <span> */}
      {/*         € */}
      {/*         <span>{item}</span> */}
      {/*       </span> */}
      {/*     ))} */}

      {/*   </section> */}
      {/*   <footer className="footer"> */}
      {/*     <div className="footer__item"> */}
      {/*       <span>Hours worked</span> */}
      {/*       <span>(hours value)</span> */}
      {/*     </div> */}
      {/*     <div className="footer__item"> */}
      {/*       <span>Salary</span> */}
      {/*       <span>(total salary value)</span> */}
      {/*     </div> */}
      {/*   </footer> */}
      {/* </div> */}
    </div>
  );
};

export default App;
