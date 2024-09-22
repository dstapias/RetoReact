import React from 'react';
import { useState, useEffect } from 'react';

function Timer() {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          if (seconds === 59) {
            setMinutes(prevMinutes => prevMinutes + 1);
            setSeconds(0);
          } else {
            setSeconds(prevSeconds => prevSeconds + 1);
          }
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, seconds]);
  
    const handleStart = () => {
      setIsActive(true);
    };
  
    const handleStop = () => {
      setIsActive(false);
    };
  
    const handleReset = () => {
      setMinutes(0);
      setSeconds(0);
    };
  
    return (
      <div className="container mt-4">
        <h1>Timer</h1>
        <div className="display-4">
          {String(minutes).padStart(2, '0')} mins : {String(seconds).padStart(2, '0')} secs
        </div>
        <div className="mt-4">
          <button className="btn btn-success me-2" onClick={handleStart}>Start</button>
          <button className="btn btn-danger me-2" onClick={handleStop}>Stop</button>
          <button className="btn btn-warning" onClick={handleReset}>Reset</button>
        </div>
      </div>
    );
  }
export default Timer;