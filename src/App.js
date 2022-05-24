import './App.css';
import CountdownTimer from 'react-awesome-countdowntimer';
import moment from 'moment';
import React from 'react';

function App() {
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
      <main>
        <div className="wrapper timer">
          <CountdownTimer endDate={moment('06-15-2022 7:00 PM')}/>
        </div>
      </main>
    </div>
  );
}

export default App;
