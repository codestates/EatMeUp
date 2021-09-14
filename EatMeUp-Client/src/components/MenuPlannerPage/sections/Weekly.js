import React from "react";
import { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import "./Calendar.css";

const Weekly = () => {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;
  const thisWeek = today.clone().startOf("week").week();

  const calendarArr = () => {
    let result = [];
  
    result = result.concat(
    Array(7).fill(0).map((data, i) => {
        let thisweekDays = today.clone().startOf("year").week(thisWeek).startOf("week").add(i, "day");

        if (moment().format("YYYYMMDD") === thisweekDays.format("YYYYMMDD")) {
      
          return (
            <td key={i} className='cell today'>
              <Link className='eachDay-link' to='#'>
                <span>{thisweekDays.format("D")}</span>
              </Link>
            </td>
          );
        } else {

          return (
            <td key={i} className='cell'>
              <Link className='eachDay-link' to='#'>
                <span>{thisweekDays.format("D")}</span>
              </Link>
            </td>
          );
        }
      }))
      return result;
  };

  return (
    <div id='body'>
      <div id='calendar-controler'>
        <button
          id='left'
          onClick={() => setMoment(getMoment.clone().subtract(1, "week"))}
        ></button>
        <span id='date'>{today.format("YYYY년 MM월")}</span>
        <button
          id='right'
          onClick={() => {
            setMoment(getMoment.clone().add(1, "week"));
          }}
        ></button>
      </div>
      <table id='calendar-table'>
        <thead>
          <tr>
            <td id='weekend'>SUN</td>
            <td id='thead'>MON</td>
            <td id='thead'>TUE</td>
            <td id='thead'>WED</td>
            <td id='thead'>THU</td>
            <td id='thead'>FRI</td>
            <td id='thead'>SAT</td>
          </tr>
        </thead>
        <tbody className='calendar-body'>{calendarArr()}</tbody>
      </table>
    </div>
  );
};

export default Weekly;
