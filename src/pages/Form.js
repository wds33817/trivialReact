import React, { Fragment, useRef, useState, useEffect } from 'react';

import '../style/formStyle.css';
import Nameform from './Nameform';
// uncontrolled inputs
export default function Form() {
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    console.log(inputValue);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type='text' />
        <button type='submit'>Submit</button>
      </form>

      <Nameform />
      <Statistics />
      <FetchUsers />
    </Fragment>
  );
}

function Statistics() {
  const [btcData, setBtcData] = useState({});

  const fetchData = () => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((response) => response.json())
      .then((jsonData) => setBtcData(jsonData.bpi.USD))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const rateFloat = btcData.rate
    ? parseFloat(btcData.rate.replace(/,/g, ''))
    : 0;

  return (
    <>
      <h1>Current BTC/USD data</h1>
      {rateFloat > 0 ? (
        <>
          <p>Code: {btcData.code}</p>
          <p>Symbol: {btcData.symbol}</p>
          <p>Rate: {btcData.rate}</p>
          <p>Description: {btcData.description}</p>
          <p>Rate Float: {btcData.rate_float}</p>
        </>
      ) : (
        <p>Data pending ...</p>
      )}
    </>
  );
}

function FetchUsers() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch('https://randomuser.me/api/?results=1')
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Data returned</h1>
      <h2>First Name: {user.results[0].name.first}</h2>
      <h2>Last Name: {user.results[0].name.last}</h2>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}
