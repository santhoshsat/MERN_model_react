import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HolidayList.css';

const HolidayApiComponent = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    const fetchHolidayOfCountry = async () => {
      try {
        const response = await axios.get('https://date.nager.at/api/v3/PublicHolidays/2023/at');
        setHolidays(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHolidayOfCountry();
  }, []);

  return (
    <div className="holiday-list-container">
      <h1>Government Holidays</h1>
      <ul className="holiday-list">
        {holidays.map((holiday) => (
          <li key={holiday.date}>
           <span className="holiday-date">{holiday.date}</span>
          <span className="holiday-name">{holiday.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HolidayApiComponent;