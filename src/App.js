import './App.css';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      const today = moment();
      const threshold = moment(1655305200000);

      setDays(format(threshold.diff(today, 'days')));
      setHours(format(threshold.diff(today, 'hours') % 24));
      setMinutes(format(threshold.diff(today, 'minutes') % 60));
      setSeconds(format(threshold.diff(today, 'seconds') % 60));
    }, 1000);
  }, [seconds]);

  const format = (value) => {
    if (value.toString().length < 2) {
      return `0${value}`
    }

    return `${value}`;
  }

  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <div className="title">
            <div className="image left"></div>
            <h1>It's almost over!</h1>
            <div className="image right"></div>
          </div>
        </div>

      </header>
      { !!days && (
        <main>
          <div className="wrapper timer">
            <div>
              <div className="section">
                <div className="time">{days}</div>
                <div className="label">Days</div>
              </div>
              <div className="section">
                <div className="time">{hours}</div>
                <div className="label">Hours</div>
              </div>
              <div className="section">
                <div className="time">{minutes}</div>
                <div className="label">Minutes</div>
              </div>
              <div className="section">
                <div className="time">{seconds}</div>
                <div className="label">Seconds</div>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
