import React, { Fragment, useState } from 'react';
import '../style/homeStyle.css';

export default function Home() {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');

  const formattedToday = `${year}-${month}-${day}`;
  const [Datevalue, setDatevalue] = useState(formattedToday);

  const [Time, setTime] = useState('17:00');
  //console.log(Time);
  const [NumberOfPeople, setNumberOfPeople] = useState(1);

  const [occasion, setOccasion] = useState('Promotion');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted!');
  };

  return (
    <Fragment>
      <div className='homeForm'>
        <form
          style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
          onSubmit={handleSubmit}
        >
          <label htmlFor='res-date'>Choose date</label>
          <input
            type='date'
            id='res-date'
            value={Datevalue}
            onChange={(e) => setDatevalue(e.target.value)}
          />
          <label htmlFor='res-time'>Choose time</label>
          <select
            id='res-time'
            value={Time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          <label htmlFor='guests'>Number of guests</label>
          <input
            type='number'
            placeholder='1'
            min='1'
            max='10'
            id='guests'
            value={NumberOfPeople}
            onChange={(e) => setNumberOfPeople(e.target.value)}
          />
          <label htmlFor='occasion'>Occasion</label>
          <select
            id='occasion'
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Promotion</option>
            <option>Celebration</option>
          </select>
          <input type='submit' value='Make Your reservation' />
        </form>
      </div>
    </Fragment>
  );
}
