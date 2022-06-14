import './App.css';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    const threshold = moment(1655218800000);

    setInterval(() => {
      const todayMs = moment().valueOf();

      setDays(format(threshold.diff(todayMs, 'days')));
      setHours(format(threshold.diff(todayMs, 'hours') % 24));
      setMinutes(format(threshold.diff(todayMs, 'minutes') % 60));
      setSeconds(format(threshold.diff(todayMs, 'seconds') % 60));
    }, 1000);
  }, []);

  useEffect(() => {
    const threshold = moment(1655218800000);
    const todayMs = moment().valueOf();
    const thresholdMs = threshold.valueOf();

    if (todayMs > thresholdMs) {
      setIsOver(true);
    }
  }, [seconds])

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
          {isOver && (
            <div className="title">
              <div className="image left animated"></div>
              <h1>It's over!</h1>
              <div className="image right animated"></div>
            </div>
          )}
          {!isOver && (
            <div className="title">
              <div className="image left"></div>
              <h1>It's almost over!</h1>
              <div className="image right"></div>
            </div>
          )}
        </div>

      </header>
      {!!days && !isOver && (
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
